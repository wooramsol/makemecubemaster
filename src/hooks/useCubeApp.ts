import { useCallback, useEffect, useRef, useState } from 'react';
import type {
  AppPhase,
  CubePose,
  DetectionFeedback,
  DetectionStatus,
  FaceId,
  Move,
  SolutionProgress,
  SolvingFeedback,
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
import { LiveFaceAccumulator, canonicalizeScannedFaces } from '../lib/vision/liveFaceScan';
import { cloneFaceColorsMap } from '../lib/vision/selfieView';
import { loadOpenCV } from '../lib/vision/opencvLoader';

function scannedFacesFromMap(
  faces: Map<FaceId, StickerColor[]>,
): Partial<Record<FaceId, StickerColor[]>> {
  return Object.fromEntries(cloneFaceColorsMap(faces)) as Partial<
    Record<FaceId, StickerColor[]>
  >;
}

export interface CubeAppState {
  phase: AppPhase;
  error: string | null;
  knownFaces: FaceId[];
  scannedFaceColors: Partial<Record<FaceId, StickerColor[]>>;
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
  liveScanNeedsClearerCenter: boolean;
  solvingFeedback: SolvingFeedback;
}

const initialFeedback: DetectionFeedback = {
  status: 'searching',
  stableProgress: 0,
  stableTarget: 0,
  detectedCenter: null,
  colorCounts: emptyColorCounts(),
  cellColors: [],
};

const initialSolvingFeedback: SolvingFeedback = {
  tracking: 'searching',
  rotationProgress: 0,
  wrongMove: null,
};

const initialState: CubeAppState = {
  phase: 'loading',
  error: null,
  knownFaces: [],
  scannedFaceColors: {},
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
  liveScanNeedsClearerCenter: false,
  solvingFeedback: initialSolvingFeedback,
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
  const trackingLostFrames = useRef(0);
  const expectedMoveRef = useRef<Move | null>(null);

  const syncExpectedMove = useCallback((move: Move | null) => {
    if (move === expectedMoveRef.current) return;
    expectedMoveRef.current = move;
    frameProcessor.current?.setExpectedMove(move);
  }, []);

  const clearSolveTimeout = useCallback(() => {
    if (solveTimeoutRef.current) {
      clearTimeout(solveTimeoutRef.current);
      solveTimeoutRef.current = null;
    }
  }, []);

  const requestSolve = useCallback(
    (
      facelet: string,
      pose: CubePose,
      scannedFaces: Map<FaceId, StickerColor[]>,
      captures: StickerColor[][],
    ) => {
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
        captures,
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
              'Solve timed out. Scan order and direction do not matter — please try again.',
          };
        });
      }, 60000);
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
          solvingFeedback: initialSolvingFeedback,
        };
      }
      return {
        ...prev,
        solution: { ...prev.solution, currentIndex: nextIndex },
        solvingFeedback: { ...initialSolvingFeedback, tracking: 'locked' },
      };
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
      scannedFaceColors: {},
      currentVisibleFace: null,
      liveScanProgress: 0,
      detectionFeedback: initialFeedback,
      liveScanNeedsClearerCenter: false,
    }));
    frameProcessor.current?.disableTracking();
    expectedMoveRef.current = null;
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
      scannedFaceColors: {},
      currentVisibleFace: null,
      liveScanProgress: 0,
      detectionFeedback: initialFeedback,
      liveScanNeedsClearerCenter: false,
    }));
    frameProcessor.current?.disableTracking();
    expectedMoveRef.current = null;
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
            solvingFeedback: initialSolvingFeedback,
          }));
          if (msg.moves.length > 0) {
            frameProcessor.current?.enableTracking();
            syncExpectedMove(msg.moves[0] ?? null);
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
        const snapshotFaces = canonicalizeScannedFaces(cloneFaceColorsMap(snapshot.faces));
        const scannedRecord = scannedFacesFromMap(snapshotFaces);
        const captures = [...snapshotFaces.values()].map((colors) => [...colors]);

        try {
          let solveMap = snapshotFaces;
          if (!isCubeColorBalanced(solveMap)) {
            solveMap = reconcileCubeFaces(snapshotFaces);
            if (!isCubeColorBalanced(solveMap)) {
              const hint = formatImbalanceHint(snapshotFaces);
              setState((s) => ({
                ...s,
                phase: 'error',
                scannedFaceColors: scannedRecord,
                error: hint
                  ? `Color mismatch (${hint}). Re-learn colors or re-scan.`
                  : 'Color mismatch. Scan all 6 unique faces.',
              }));
              return;
            }
          }

          const facelet = buildFaceletFromMap(solveMap);
          const pose = lastPoseRef.current;
          setState((s) => ({
            ...s,
            phase: 'computing',
            knownFaces: snapshot.knownFaces,
            scannedFaceColors: scannedRecord,
            liveScanProgress: 1,
            currentPose: pose,
          }));
          queueMicrotask(() => requestSolve(facelet, pose, snapshotFaces, captures));
        } catch (error) {
          setState((s) => ({
            ...s,
            phase: 'error',
            scannedFaceColors: scannedRecord,
            error: error instanceof Error ? error.message : 'Failed to build cube state',
          }));
        }
        return;
      }

      setState((prev) => ({
        ...prev,
        currentPose: result.pose,
        knownFaces: snapshot.knownFaces,
        scannedFaceColors: scannedFacesFromMap(
          canonicalizeScannedFaces(snapshot.faces),
        ),
        currentVisibleFace: snapshot.currentFace,
        liveScanProgress: snapshot.knownFaces.length / 6,
        liveScanNeedsClearerCenter: snapshot.needsClearerCenter,
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

    if (phase !== 'solving') return;

    const solution = solutionRef.current;
    const expected =
      solution && solution.currentIndex < solution.moves.length
        ? solution.moves[solution.currentIndex]
        : null;

    syncExpectedMove(expected ?? null);

    let tracking: SolvingFeedback['tracking'] = 'searching';
    if (!result.pose) {
      trackingLostFrames.current++;
      tracking = trackingLostFrames.current > 12 ? 'lost' : 'searching';
    } else {
      trackingLostFrames.current = 0;
      tracking = processor.isTrackingLost() ? 'searching' : 'locked';
    }

    setState((s) => ({
      ...s,
      solvingFeedback: {
        tracking,
        rotationProgress: result.rotationProgress,
        wrongMove: result.wrongMove,
      },
    }));

    if (!result.rotationMove) return;
    if (Date.now() - solvingStartMs.current < 800) return;

    if (solution && expected && result.rotationMove === expected) {
      applyCompletedMove(result.rotationMove);
      if (result.pose) processor.syncPose(result.pose);
      const nextMove = solution.moves[solution.currentIndex + 1] ?? null;
      syncExpectedMove(nextMove);
      trackingLostFrames.current = 0;
    }
  }, [videoRef, applyCompletedMove, buildFeedback, requestSolve, syncExpectedMove]);

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
      scannedFaceColors: {},
      currentVisibleFace: null,
      liveScanProgress: 0,
      colorLearnIndex: 0,
      colorLearnSample: null,
      colorLearnReady: false,
      colorLearnError: null,
      colorsCalibrated: false,
      detectionFeedback: initialFeedback,
      liveScanNeedsClearerCenter: false,
    }));
  }, [clearSolveTimeout]);

  const skipCurrentMove = useCallback(() => {
    const solution = solutionRef.current;
    if (!solution || solution.currentIndex >= solution.moves.length) return;
    const expected = solution.moves[solution.currentIndex];
    if (!expected) return;
    const nextMove = solution.moves[solution.currentIndex + 1] ?? null;
    applyCompletedMove(expected);
    const pose = lastPoseRef.current;
    if (pose) frameProcessor.current?.syncPose(pose);
    syncExpectedMove(nextMove);
    trackingLostFrames.current = 0;
  }, [applyCompletedMove, syncExpectedMove]);

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
    skipCurrentMove,
  };
}
