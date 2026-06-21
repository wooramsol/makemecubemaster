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
import { reconcileCubeFaces, formatImbalanceHint } from '../lib/vision/cubeColorReconcile';
import { FrameProcessor } from '../lib/vision/frameProcessor';
import { LiveFaceAccumulator } from '../lib/vision/liveFaceScan';
import { loadOpenCV } from '../lib/vision/opencvLoader';
import { validateFaceletString } from '../lib/vision/scanValidation';
import {
  calibrateWhiteBalanceFromCanvas,
  isWhiteBalanceCalibrated,
  resetWhiteBalance,
  type WhiteBalanceSample,
} from '../lib/vision/whiteBalance';

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
  whiteBalanceSample: WhiteBalanceSample | null;
  whiteBalanceReady: boolean;
  whiteBalanceError: string | null;
  whiteBalanceCalibrated: boolean;
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
  whiteBalanceSample: null,
  whiteBalanceReady: false,
  whiteBalanceError: null,
  whiteBalanceCalibrated: false,
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
    (facelet: string, pose: CubePose) => {
      clearSolveTimeout();
      const id = ++requestId.current;
      solverWorker.current?.postMessage({ type: 'solve', facelet, id });
      frameProcessor.current?.syncPose(pose);

      solveTimeoutRef.current = setTimeout(() => {
        setState((s) => {
          if (s.phase !== 'computing') return s;
          return {
            ...s,
            phase: 'error',
            error: '해법 계산 시간이 초과되었습니다. 다시 시도해 주세요.',
          };
        });
      }, 20000);
    },
    [clearSolveTimeout],
  );

  useEffect(() => {
    phaseRef.current = state.phase;
    solutionRef.current = state.solution;
  }, [state.phase, state.solution]);

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
    ): DetectionFeedback => {
      const { detectedCenter, colorCounts } = getCalibrationFeedback(colors);
      const readable = isColorsReadable(colors);

      let status: DetectionStatus = 'searching';
      if (!hasPose || !readable) {
        status = 'searching';
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
          clearSolveTimeout();
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
          faceletRef.current = msg.facelet;
        } else if (msg.type === 'error') {
          clearSolveTimeout();
          setState((s) => ({
            ...s,
            phase: 'error',
            error:
              msg.message.includes('Invalid') || msg.message.includes('invalid')
                ? '인식된 큐브 상태가 올바르지 않습니다. 큐브를 돌려 다시 스캔해 주세요.'
                : msg.message,
          }));
        }
      };

      worker.postMessage({ type: 'init' });
      resetWhiteBalance();
      liveAccumulator.current.reset();
      setState((s) => ({
        ...s,
        phase: 'whiteBalance',
        whiteBalanceCalibrated: false,
        whiteBalanceSample: null,
        whiteBalanceReady: false,
        whiteBalanceError: null,
      }));
    } catch (error) {
      setState((s) => ({
        ...s,
        phase: 'error',
        error: error instanceof Error ? error.message : '초기화 실패',
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

  const confirmWhiteBalance = useCallback(() => {
    const video = videoRef.current;
    const processor = frameProcessor.current;
    if (!video || !processor || video.readyState < 2) return;

    if (!processor.captureFrame(video)) return;

    const canvas = processor.getFrameCanvas();
    const result = calibrateWhiteBalanceFromCanvas(canvas, video.videoWidth, video.videoHeight);
    if (!result) {
      setState((s) => ({
        ...s,
        whiteBalanceError: '흰색 영역을 찾지 못했습니다. 흰 스티커 면을 가이드 안에 밝게 맞춰 주세요.',
      }));
      return;
    }

    beginLiveScan();
    setState((s) => ({
      ...s,
      whiteBalanceSample: result.sample,
      whiteBalanceReady: true,
      whiteBalanceError: null,
      whiteBalanceCalibrated: true,
    }));
  }, [videoRef, beginLiveScan]);

  const processFrame = useCallback(() => {
    const video = videoRef.current;
    const processor = frameProcessor.current;
    if (!video || !processor || video.readyState < 2) return;

    const result = processor.process(video);
    const phase = phaseRef.current;

    if (phase === 'whiteBalance') {
      processor.captureFrame(video);
      const sample = processor.getWhiteBalanceSample(video.videoWidth, video.videoHeight);
      setState((prev) => ({
        ...prev,
        whiteBalanceSample: sample,
        whiteBalanceReady: sample?.ready ?? false,
        whiteBalanceError: null,
      }));
      return;
    }

    if (phase === 'liveScan') {
      if (!isWhiteBalanceCalibrated()) {
        setState((s) => ({ ...s, phase: 'whiteBalance', whiteBalanceCalibrated: false }));
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
          const facelet = buildFaceletFromMap(reconciled);
          const validationError = validateFaceletString(facelet);
          if (validationError) {
            const hint = formatImbalanceHint(reconciled);
            const detail =
              hint.length > 0
                ? `${validationError} (${hint}. 노란 조명에서는 흰 면 기준 보정을 다시 해 보세요.)`
                : `${validationError} (노란 조명에서는 흰 면 기준 보정을 다시 해 보세요.)`;
            setState((s) => ({ ...s, phase: 'error', error: detail }));
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
          queueMicrotask(() => requestSolve(facelet, pose));
        } catch (error) {
          setState((s) => ({
            ...s,
            phase: 'error',
            error: error instanceof Error ? error.message : '큐브 상태 생성 실패',
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
    beginLiveScan();
    setState((s) => ({ ...s, solution: null }));
  }, [clearSolveTimeout, beginLiveScan]);

  const retryFromWhiteBalance = useCallback(() => {
    clearSolveTimeout();
    solveTriggeredRef.current = false;
    liveAccumulator.current.reset();
    lastPoseRef.current = null;
    resetWhiteBalance();
    frameProcessor.current?.disableTracking();
    setState((s) => ({
      ...s,
      phase: 'whiteBalance',
      error: null,
      solution: null,
      knownFaces: [],
      currentVisibleFace: null,
      liveScanProgress: 0,
      whiteBalanceCalibrated: false,
      whiteBalanceSample: null,
      whiteBalanceReady: false,
      whiteBalanceError: null,
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
    confirmWhiteBalance,
    retryLiveScan,
    retryFromWhiteBalance,
    startTracking,
    stopTracking,
  };
}
