import { useCallback, useEffect, useRef, useState } from 'react';
import type {
  AppPhase,
  CubePose,
  DetectionFeedback,
  DetectionStatus,
  FaceId,
  Move,
  SolutionProgress,
  StickerColor,
} from '../types';
import { buildFaceletFromMap } from '../lib/cube/state';
import { createSolverWorker, type SolverResponse } from '../lib/cube/solverClient';
import { emptyColorCounts, getCalibrationFeedback, isColorsReadable } from '../lib/vision/colorClassifier';
import { reconcileCubeFaces, formatImbalanceHint, isCubeColorBalanced } from '../lib/vision/cubeColorReconcile';
import {
  COLOR_LEARN_ORDER,
  calibrateLearnedColor,
  isColorsCalibrated,
  resetColorReferences,
  type ColorLearnSample,
} from '../lib/vision/colorReference';
import { FrameProcessor } from '../lib/vision/frameProcessor';
import { LiveFaceAccumulator } from '../lib/vision/liveFaceScan';
import { loadOpenCV } from '../lib/vision/opencvLoader';
import { validateFaceletString } from '../lib/vision/scanValidation';

export interface CubeAppState {
  phase: AppPhase;
  error: string | null;
  knownFaces: FaceId[];
  currentVisibleFace: FaceId | null;
  liveScanProgress: number;
  solution: SolutionProgress | null;
  currentPose: CubePose | null;
  solverReady: boolean;
  detectionFeedback: DetectionFeedback;
  colorLearnIndex: number;
  colorLearnSample: ColorLearnSample | null;
  colorLearnReady: boolean;
  colorLearnError: string | null;
  colorsCalibrated: boolean;
}

const initialFeedback: DetectionFeedback = {
  status: 'searching',
  stableProgress: 0,
  stableTarget: 0,
  detectedCenter: null,
  colorCounts: emptyColorCounts(),
  cellColors: [],
};

const initialState: CubeAppState = {
  phase: 'loading',
  error: null,
  knownFaces: [],
  currentVisibleFace: null,
  liveScanProgress: 0,
  solution: null,
  currentPose: null,
  solverReady: false,
  detectionFeedback: initialFeedback,
  colorLearnIndex: 0,
  colorLearnSample: null,
  colorLearnReady: false,
  colorLearnError: null,
  colorsCalibrated: false,
};

export function useCubeApp(videoRef: React.RefObject<HTMLVideoElement | null>) {
  const [state, setState] = useState<CubeAppState>(initialState);
  const frameProcessor = useRef<FrameProcessor | null>(null);
  const solverWorker = useRef<Worker | null>(null);
  const liveAccumulator = useRef(new LiveFaceAccumulator());
  const faceletRef = useRef<string>('');
  const rafRef = useRef<number>(0);
  const requestId = useRef(0);
  const phaseRef = useRef<AppPhase>('loading');
  const colorLearnIndexRef = useRef(0);
  const solutionRef = useRef<SolutionProgress | null>(null);
  const solvingStartMs = useRef(0);
  const solveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPoseRef = useRef<CubePose | null>(null);
  const solveTriggeredRef = useRef(false);

  const clearSolveTimeout = useCallback(() => {
    if (solveTimeoutRef.current) {
      clearTimeout(solveTimeoutRef.current);
      solveTimeoutRef.current = null;
    }
  }, []);

  const requestSolve = useCallback(
    (facelet: string, pose: CubePose, scannedFaces: Map<FaceId, StickerColor[]>) => {
      const worker = solverWorker.current;
      if (!worker) {
        setState((s) => ({
          ...s,
          phase: 'error',
          error: 'Solver failed to start. Refresh the page and try again.',
        }));
        return;
      }

      clearSolveTimeout();
      const id = ++requestId.current;
      worker.postMessage({
        type: 'solve',
        facelet,
        scannedFaces: Object.fromEntries(scannedFaces) as Record<FaceId, StickerColor[]>,
        id,
      });
      frameProcessor.current?.syncPose(pose);

      solveTimeoutRef.current = setTimeout(() => {
        setState((s) => {
          if (s.phase !== 'computing') return s;
          return {
            ...s,
            phase: 'error',
            error:
              'Solve timed out. Colors may have been misread — re-scan in steady light.',
          };
        });
      }, 45000);
    },
    [clearSolveTimeout],
  );

  useEffect(() => {
    phaseRef.current = state.phase;
    solutionRef.current = state.solution;
    colorLearnIndexRef.current = state.colorLearnIndex;
  }, [state.phase, state.solution, state.colorLearnIndex]);

  const applyCompletedMove = useCallback((move: Move) => {
    const id = ++requestId.current;
    solverWorker.current?.postMessage({
      type: 'apply',
      move,
      facelet: faceletRef.current,
      id,
    });

    setState((prev) => {
      if (!prev.solution) return prev;
      const expected = prev.solution.moves[prev.solution.currentIndex];
      if (move !== expected) return prev;

      const nextIndex = prev.solution.currentIndex + 1;
      if (nextIndex >= prev.solution.moves.length) {
        return {
          ...prev,
          phase: 'solved',
          solution: { ...prev.solution, currentIndex: nextIndex },
        };
      }
      return { ...prev, solution: { ...prev.solution, currentIndex: nextIndex } };
    });
  }, []);

  const buildFeedback = useCallback(
    (
      hasPose: boolean,
      colors: StickerColor[] | null,
      stableProgress: number,
      stableTarget: number,
      captured: boolean,
      needsNewFace: boolean,
    ): DetectionFeedback => {
      const { detectedCenter, colorCounts } = getCalibrationFeedback(colors);
      const readable = isColorsReadable(colors);

      let status: DetectionStatus = 'searching';
      if (!hasPose || !readable) {
        status = 'searching';
      } else if (needsNewFace) {
        status = 'rotate';
      } else if (captured) {
        status = 'captured';
      } else if (stableProgress > 0 && stableProgress < stableTarget) {
        status = 'stabilizing';
      } else {
        status = 'detected';
      }

      return {
        status,
        stableProgress,
        stableTarget,
        detectedCenter,
        colorCounts,
        cellColors: readable && colors ? [...colors] : [],
      };
    },
    [],
  );

  const enterScanReady = useCallback(() => {
    liveAccumulator.current.reset();
    solveTriggeredRef.current = false;
    lastPoseRef.current = null;
    setState((s) => ({
      ...s,
      phase: 'scanReady',
      error: null,
      knownFaces: [],
      currentVisibleFace: null,
      liveScanProgress: 0,
      detectionFeedback: initialFeedback,
    }));
    frameProcessor.current?.disableTracking();
  }, []);

  const beginLiveScan = useCallback(() => {
    liveAccumulator.current.reset();
    solveTriggeredRef.current = false;
    lastPoseRef.current = null;
    setState((s) => ({
      ...s,
      phase: 'liveScan',
      error: null,
      knownFaces: [],
      currentVisibleFace: null,
      liveScanProgress: 0,
      detectionFeedback: initialFeedback,
    }));
    frameProcessor.current?.disableTracking();
  }, []);

  const init = useCallback(async () => {
    try {
      await loadOpenCV();
      frameProcessor.current = new FrameProcessor();

      const worker = createSolverWorker();
      solverWorker.current = worker;

      worker.onmessage = (event: MessageEvent<SolverResponse>) => {
        const msg = event.data;
        if (msg.type === 'ready') {
          setState((s) => ({ ...s, solverReady: true }));
        } else if (msg.type === 'solution') {
          if (msg.id !== requestId.current) return;
          clearSolveTimeout();
          faceletRef.current = msg.facelet;
          solvingStartMs.current = Date.now();
          setState((s) => ({
            ...s,
            phase: msg.moves.length === 0 ? 'solved' : 'solving',
            solution: { moves: msg.moves, currentIndex: 0 },
            detectionFeedback: initialFeedback,
          }));
          if (msg.moves.length > 0) {
            frameProcessor.current?.enableTracking();
          }
        } else if (msg.type === 'facelet') {
          if (msg.id !== requestId.current) return;
          faceletRef.current = msg.facelet;
        } else if (msg.type === 'error') {
          if (msg.id !== undefined && msg.id !== requestId.current) return;
          clearSolveTimeout();
          solveTriggeredRef.current = false;
          setState((s) => ({
            ...s,
            phase: 'error',
            error: msg.message,
          }));
        }
      };

      worker.onerror = () => {
        clearSolveTimeout();
        setState((s) => ({
          ...s,
          phase: 'error',
          error: 'Solver failed to load. Refresh the page and try again.',
        }));
      };

      worker.postMessage({ type: 'init' });
      resetColorReferences();
      liveAccumulator.current.reset();
      setState((s) => ({
        ...s,
        phase: 'colorLearn',
        colorLearnIndex: 0,
        colorLearnSample: null,
        colorLearnReady: false,
        colorLearnError: null,
        colorsCalibrated: false,
      }));
    } catch (error) {
      setState((s) => ({
        ...s,
        phase: 'error',
        error: error instanceof Error ? error.message : 'Init failed',
      }));
    }
  }, [clearSolveTimeout]);

  useEffect(() => {
    void init();
    return () => {
      cancelAnimationFrame(rafRef.current);
      clearSolveTimeout();
      solverWorker.current?.terminate();
      frameProcessor.current?.disableTracking();
    };
  }, [init, clearSolveTimeout]);

  const confirmColorLearn = useCallback(() => {
    const video = videoRef.current;
    const processor = frameProcessor.current;
    if (!video || !processor || video.readyState < 2) return;

    if (!processor.captureFrame(video)) return;

    const index = colorLearnIndexRef.current;
    const target = COLOR_LEARN_ORDER[index];
    if (!target) return;

    const canvas = processor.getFrameCanvas();
    const sample = calibrateLearnedColor(
      canvas,
      video.videoWidth,
      video.videoHeight,
      target,
    );
    if (!sample) {
      setState((s) => ({
        ...s,
        colorLearnError: `Could not read ${target}. Center the sticker in the circle.`,
      }));
      return;
    }

    const nextIndex = index + 1;
    if (nextIndex >= COLOR_LEARN_ORDER.length) {
      enterScanReady();
      setState((s) => ({
        ...s,
        colorsCalibrated: true,
        colorLearnError: null,
      }));
      return;
    }

    setState((s) => ({
      ...s,
      colorLearnIndex: nextIndex,
      colorLearnSample: null,
      colorLearnReady: false,
      colorLearnError: null,
    }));
  }, [videoRef, enterScanReady]);

  const startLiveScan = useCallback(() => {
    beginLiveScan();
  }, [beginLiveScan]);

  const processFrame = useCallback(() => {
    const video = videoRef.current;
    const processor = frameProcessor.current;
    if (!video || !processor || video.readyState < 2) return;

    const result = processor.process(video);
    const phase = phaseRef.current;

    if (phase === 'colorLearn') {
      processor.captureFrame(video);
      const target = COLOR_LEARN_ORDER[colorLearnIndexRef.current];
      if (target) {
        const sample = processor.getColorLearnSample(
          video.videoWidth,
          video.videoHeight,
          target,
        );
        setState((prev) => ({
          ...prev,
          colorLearnSample: sample,
          colorLearnReady: sample?.ready ?? false,
          colorLearnError: null,
        }));
      }
      return;
    }

    if (phase === 'scanReady') {
      const colors = result.detectedFace?.colors ?? null;
      const hasPose = Boolean(result.pose);
      setState((prev) => ({
        ...prev,
        detectionFeedback: buildFeedback(hasPose, colors, 0, 0, false, false),
      }));
      return;
    }

    if (phase === 'liveScan') {
      if (!isColorsCalibrated()) {
        setState((s) => ({
          ...s,
          phase: 'colorLearn',
          colorsCalibrated: false,
          colorLearnIndex: 0,
        }));
        return;
      }

      const colors = result.detectedFace?.colors ?? null;
      const hasPose = Boolean(result.pose);
      if (result.pose) lastPoseRef.current = result.pose;

      const snapshot = liveAccumulator.current.update(colors);
      const captured = Boolean(snapshot.newlyCaptured);

      if (snapshot.isComplete && lastPoseRef.current && !solveTriggeredRef.current) {
        solveTriggeredRef.current = true;
        try {
          const reconciled = reconcileCubeFaces(snapshot.faces);
          if (!isCubeColorBalanced(reconciled)) {
            const hint = formatImbalanceHint(snapshot.faces);
            setState((s) => ({
              ...s,
              phase: 'error',
              error: hint
                ? `Color mismatch (${hint}). Re-learn colors or re-scan.`
                : 'Color mismatch. Scan all 6 unique faces.',
            }));
            return;
          }

          const facelet = buildFaceletFromMap(reconciled);
          const validationError = validateFaceletString(facelet);
          if (validationError) {
            const hint = formatImbalanceHint(reconciled);
            setState((s) => ({
              ...s,
              phase: 'error',
              error: hint ? `${validationError} (${hint})` : validationError,
            }));
            return;
          }
          faceletRef.current = facelet;
          const pose = lastPoseRef.current;
          setState((s) => ({
            ...s,
            phase: 'computing',
            knownFaces: snapshot.knownFaces,
            liveScanProgress: 1,
            currentPose: pose,
          }));
          queueMicrotask(() => requestSolve(facelet, pose, reconciled));
        } catch (error) {
          setState((s) => ({
            ...s,
            phase: 'error',
            error: error instanceof Error ? error.message : 'Failed to build cube state',
          }));
        }
        return;
      }

      setState((prev) => ({
        ...prev,
        currentPose: result.pose,
        knownFaces: snapshot.knownFaces,
        currentVisibleFace: snapshot.currentFace,
        liveScanProgress: snapshot.knownFaces.length / 6,
        detectionFeedback: buildFeedback(
          hasPose,
          colors,
          snapshot.stableProgress,
          snapshot.stableTarget,
          captured,
          snapshot.needsNewFace,
        ),
      }));
      return;
    }

    setState((s) => ({ ...s, currentPose: result.pose }));

    if (phase === 'solving' && result.rotationMove) {
      if (Date.now() - solvingStartMs.current < 3000) return;

      const solution = solutionRef.current;
      if (solution) {
        const expected = solution.moves[solution.currentIndex];
        if (result.rotationMove === expected) {
          applyCompletedMove(result.rotationMove);
          if (result.pose) processor.syncPose(result.pose);
        }
      }
    }
  }, [videoRef, applyCompletedMove, buildFeedback, requestSolve]);

  const runLoop = useCallback(() => {
    processFrame();
    rafRef.current = requestAnimationFrame(runLoop);
  }, [processFrame]);

  const startTracking = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(runLoop);
  }, [runLoop]);

  const stopTracking = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
  }, []);

  const retryLiveScan = useCallback(() => {
    clearSolveTimeout();
    enterScanReady();
    setState((s) => ({ ...s, solution: null }));
  }, [clearSolveTimeout, enterScanReady]);

  const retryColorLearn = useCallback(() => {
    clearSolveTimeout();
    solveTriggeredRef.current = false;
    liveAccumulator.current.reset();
    lastPoseRef.current = null;
    resetColorReferences();
    frameProcessor.current?.disableTracking();
    setState((s) => ({
      ...s,
      phase: 'colorLearn',
      error: null,
      solution: null,
      knownFaces: [],
      currentVisibleFace: null,
      liveScanProgress: 0,
      colorLearnIndex: 0,
      colorLearnSample: null,
      colorLearnReady: false,
      colorLearnError: null,
      colorsCalibrated: false,
      detectionFeedback: initialFeedback,
    }));
  }, [clearSolveTimeout]);

  const currentMove =
    state.solution && state.solution.currentIndex < state.solution.moves.length
      ? (state.solution.moves[state.solution.currentIndex] ?? null)
      : null;

  return {
    state,
    currentMove,
    confirmColorLearn,
    startLiveScan,
    retryLiveScan,
    retryColorLearn,
    startTracking,
    stopTracking,
  };
}
