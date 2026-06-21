import { useCallback, useEffect, useRef, useState } from 'react';
import type {
  AppPhase,
  CubePose,
  DetectionFeedback,
  DetectionStatus,
  FaceId,
  Move,
  ScannedFace,
  SolutionProgress,
  StickerColor,
} from '../types';
import { CALIBRATION_ORDER, getFaceScanHint } from '../lib/cube/colors';
import { buildFaceletString } from '../lib/cube/state';
import { createSolverWorker, type SolverResponse } from '../lib/cube/solverClient';
import { countStickerColors, emptyColorCounts, getCalibrationFeedback, isColorsReadable } from '../lib/vision/colorClassifier';
import { FrameProcessor } from '../lib/vision/frameProcessor';
import { loadOpenCV } from '../lib/vision/opencvLoader';
import { colorsDifferEnough, validateFaceletString } from '../lib/vision/scanValidation';
import {
  calibrateWhiteBalanceFromCanvas,
  resetWhiteBalance,
  setWhiteBalance,
  type WhiteBalanceSample,
} from '../lib/vision/whiteBalance';

export interface CubeAppState {
  phase: AppPhase;
  error: string | null;
  scannedFaces: ScannedFace[];
  currentCalibrationFace: FaceId | null;
  calibrationProgress: number;
  solution: SolutionProgress | null;
  currentPose: CubePose | null;
  solverReady: boolean;
  calibrationHint: string;
  detectionFeedback: DetectionFeedback;
  canCaptureFace: boolean;
  whiteBalanceSample: WhiteBalanceSample | null;
  whiteBalanceReady: boolean;
  whiteBalanceError: string | null;
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
  scannedFaces: [],
  currentCalibrationFace: CALIBRATION_ORDER[0] ?? null,
  calibrationProgress: 0,
  solution: null,
  currentPose: null,
  solverReady: false,
  calibrationHint: '',
  detectionFeedback: initialFeedback,
  canCaptureFace: false,
  whiteBalanceSample: null,
  whiteBalanceReady: false,
  whiteBalanceError: null,
};

interface PendingFrame {
  colors: StickerColor[];
  pose: CubePose;
}

export function useCubeApp(videoRef: React.RefObject<HTMLVideoElement | null>) {
  const [state, setState] = useState<CubeAppState>(initialState);
  const frameProcessor = useRef<FrameProcessor | null>(null);
  const solverWorker = useRef<Worker | null>(null);
  const faceletRef = useRef<string>('');
  const rafRef = useRef<number>(0);
  const requestId = useRef(0);
  const phaseRef = useRef<AppPhase>('loading');
  const solutionRef = useRef<SolutionProgress | null>(null);
  const pendingFrameRef = useRef<PendingFrame | null>(null);
  const solvingStartMs = useRef(0);
  const solveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
            error: '해법 계산 시간이 초과되었습니다. 다시 스캔해 주세요.',
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
    (hasPose: boolean, colors: StickerColor[] | null, canCapture: boolean): DetectionFeedback => {
      const { detectedCenter, colorCounts } = getCalibrationFeedback(colors);
      const readable = isColorsReadable(colors);

      let status: DetectionStatus = 'searching';
      if (!hasPose || !readable) {
        status = 'searching';
      } else if (canCapture) {
        status = 'detected';
      } else {
        status = 'detected';
      }

      return {
        status,
        stableProgress: 0,
        stableTarget: 0,
        detectedCenter,
        colorCounts,
        cellColors: readable && colors ? [...colors] : [],
      };
    },
    [],
  );

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
            calibrationHint: '',
            detectionFeedback: initialFeedback,
            canCaptureFace: false,
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
                ? '인식된 큐브 상태가 올바르지 않습니다. 조명을 밝게 하고 6면을 다시 스캔해 주세요.'
                : msg.message,
          }));
        }
      };

      worker.postMessage({ type: 'init' });
      setState((s) => ({ ...s, phase: 'camera' }));
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

  const startWhiteBalance = useCallback(() => {
    resetWhiteBalance();
    setState((s) => ({
      ...s,
      phase: 'whiteBalance',
      whiteBalanceSample: null,
      whiteBalanceReady: false,
      whiteBalanceError: null,
      error: null,
    }));
  }, []);

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

    setWhiteBalance(result.gains);
    pendingFrameRef.current = null;
    setState((s) => ({
      ...s,
      phase: 'calibrating',
      error: null,
      scannedFaces: [],
      currentCalibrationFace: CALIBRATION_ORDER[0] ?? null,
      calibrationProgress: 0,
      calibrationHint: CALIBRATION_ORDER[0] ? getFaceScanHint(CALIBRATION_ORDER[0]) : '',
      detectionFeedback: initialFeedback,
      canCaptureFace: false,
      whiteBalanceSample: result.sample,
      whiteBalanceReady: true,
      whiteBalanceError: null,
    }));
    frameProcessor.current?.disableTracking();
  }, [videoRef]);

  const skipWhiteBalance = useCallback(() => {
    resetWhiteBalance();
    pendingFrameRef.current = null;
    setState((s) => ({
      ...s,
      phase: 'calibrating',
      error: null,
      scannedFaces: [],
      currentCalibrationFace: CALIBRATION_ORDER[0] ?? null,
      calibrationProgress: 0,
      calibrationHint: CALIBRATION_ORDER[0] ? getFaceScanHint(CALIBRATION_ORDER[0]) : '',
      detectionFeedback: initialFeedback,
      canCaptureFace: false,
      whiteBalanceSample: null,
      whiteBalanceReady: false,
    }));
    frameProcessor.current?.disableTracking();
  }, []);

  const startCalibration = useCallback(() => {
    pendingFrameRef.current = null;
    setState((s) => ({
      ...s,
      phase: 'calibrating',
      scannedFaces: [],
      currentCalibrationFace: CALIBRATION_ORDER[0] ?? null,
      calibrationProgress: 0,
      calibrationHint: CALIBRATION_ORDER[0] ? getFaceScanHint(CALIBRATION_ORDER[0]) : '',
      detectionFeedback: initialFeedback,
      canCaptureFace: false,
    }));
    frameProcessor.current?.disableTracking();
  }, []);

  const captureCurrentFace = useCallback(() => {
    const pending = pendingFrameRef.current;
    if (!pending) return;

    setState((prev) => {
      if (prev.phase !== 'calibrating' || !prev.currentCalibrationFace) return prev;

      const faceId = prev.currentCalibrationFace;
      const lastScanned = prev.scannedFaces[prev.scannedFaces.length - 1];
      if (lastScanned && !colorsDifferEnough(pending.colors, lastScanned.colors)) {
        return prev;
      }

      const scanned: ScannedFace = { faceId, colors: pending.colors };
      const newFaces = [...prev.scannedFaces, scanned];
      const nextFace = CALIBRATION_ORDER[newFaces.length] ?? null;
      pendingFrameRef.current = null;

      if (nextFace) {
        return {
          ...prev,
          scannedFaces: newFaces,
          currentCalibrationFace: nextFace,
          calibrationProgress: newFaces.length / 6,
          calibrationHint: getFaceScanHint(nextFace),
          canCaptureFace: false,
          detectionFeedback: {
            status: 'captured',
            stableProgress: 0,
            stableTarget: 0,
            detectedCenter: pending.colors[4] ?? null,
            colorCounts: countStickerColors(pending.colors),
            cellColors: [...pending.colors],
          },
        };
      }

      try {
        const facelet = buildFaceletString(newFaces);
        const validationError = validateFaceletString(facelet);
        if (validationError) {
          return { ...prev, phase: 'error', error: validationError };
        }

        faceletRef.current = facelet;
        queueMicrotask(() => requestSolve(facelet, pending.pose));

        return {
          ...prev,
          phase: 'computing',
          scannedFaces: newFaces,
          currentCalibrationFace: null,
          calibrationProgress: 1,
          calibrationHint: '',
          canCaptureFace: false,
          detectionFeedback: {
            status: 'captured',
            stableProgress: 0,
            stableTarget: 0,
            detectedCenter: null,
            colorCounts: emptyColorCounts(),
            cellColors: [],
          },
        };
      } catch (error) {
        return {
          ...prev,
          phase: 'error',
          error: error instanceof Error ? error.message : '큐브 상태 생성 실패',
        };
      }
    });
  }, [requestSolve]);

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

    if (phase === 'calibrating') {
      setState((prev) => {
        if (!prev.currentCalibrationFace) {
          return { ...prev, currentPose: result.pose };
        }

        const colors = result.detectedFace?.colors ?? null;
        const hasDetection = Boolean(result.pose) && isColorsReadable(colors);

        let canCapture = hasDetection;
        const lastScanned = prev.scannedFaces[prev.scannedFaces.length - 1];
        if (canCapture && lastScanned && colors) {
          canCapture = colorsDifferEnough(colors, lastScanned.colors);
        }

        if (hasDetection && colors && result.pose) {
          pendingFrameRef.current = { colors, pose: result.pose };
        } else {
          pendingFrameRef.current = null;
        }

        return {
          ...prev,
          currentPose: result.pose,
          canCaptureFace: canCapture,
          detectionFeedback: buildFeedback(Boolean(result.pose), colors, canCapture),
        };
      });
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
  }, [videoRef, applyCompletedMove, buildFeedback]);

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

  const currentMove =
    state.solution && state.solution.currentIndex < state.solution.moves.length
      ? (state.solution.moves[state.solution.currentIndex] ?? null)
      : null;

  return {
    state,
    currentMove,
    startWhiteBalance,
    confirmWhiteBalance,
    skipWhiteBalance,
    startCalibration,
    captureCurrentFace,
    startTracking,
    stopTracking,
  };
}
