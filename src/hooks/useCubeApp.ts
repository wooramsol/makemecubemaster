import { useCallback, useEffect, useRef, useState } from 'react';
import type { AppPhase, CubePose, FaceId, Move, ScannedFace, SolutionProgress } from '../types';
import { CALIBRATION_ORDER, FACE_CENTER_COLORS, FACE_LABELS } from '../lib/cube/colors';
import { buildFaceletString } from '../lib/cube/state';
import { createSolverWorker, type SolverResponse } from '../lib/cube/solverClient';
import { isFaceColorValid } from '../lib/vision/colorClassifier';
import { FrameProcessor } from '../lib/vision/frameProcessor';
import { loadOpenCV } from '../lib/vision/opencvLoader';

const STABLE_CALIBRATION_FRAMES = 8;

export interface CubeAppState {
  phase: AppPhase;
  error: string | null;
  scannedFaces: ScannedFace[];
  currentCalibrationFace: FaceId | null;
  calibrationProgress: number;
  solution: SolutionProgress | null;
  solveFacelet: string | null;
  currentPose: CubePose | null;
  solverReady: boolean;
  calibrationHint: string;
}

const initialState: CubeAppState = {
  phase: 'loading',
  error: null,
  scannedFaces: [],
  currentCalibrationFace: CALIBRATION_ORDER[0] ?? null,
  calibrationProgress: 0,
  solution: null,
  solveFacelet: null,
  currentPose: null,
  solverReady: false,
  calibrationHint: '',
};

export function useCubeApp(videoRef: React.RefObject<HTMLVideoElement | null>) {
  const [state, setState] = useState<CubeAppState>(initialState);
  const frameProcessor = useRef<FrameProcessor | null>(null);
  const solverWorker = useRef<Worker | null>(null);
  const faceletRef = useRef<string>('');
  const stableCalibCount = useRef(0);
  const rafRef = useRef<number>(0);
  const requestId = useRef(0);
  const phaseRef = useRef<AppPhase>('loading');
  const solutionRef = useRef<SolutionProgress | null>(null);

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
          setState((s) => ({
            ...s,
            phase: 'solving',
            solution: { moves: msg.moves, currentIndex: 0 },
            solveFacelet: faceletRef.current || null,
            calibrationHint: '',
          }));
          frameProcessor.current?.enableTracking();
        } else if (msg.type === 'facelet') {
          faceletRef.current = msg.facelet;
        } else if (msg.type === 'error') {
          setState((s) => ({ ...s, phase: 'error', error: msg.message }));
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
  }, []);

  useEffect(() => {
    void init();
    return () => {
      cancelAnimationFrame(rafRef.current);
      solverWorker.current?.terminate();
      frameProcessor.current?.disableTracking();
    };
  }, [init]);

  const startCalibration = useCallback(() => {
    stableCalibCount.current = 0;
    setState((s) => ({
      ...s,
      phase: 'calibrating',
      scannedFaces: [],
      currentCalibrationFace: CALIBRATION_ORDER[0] ?? null,
      calibrationProgress: 0,
      calibrationHint: FACE_LABELS[CALIBRATION_ORDER[0]!] ?? '',
    }));
    frameProcessor.current?.disableTracking();
  }, []);

  const processFrame = useCallback(() => {
    const video = videoRef.current;
    const processor = frameProcessor.current;
    if (!video || !processor || video.readyState < 2) return;

    const result = processor.process(video);
    setState((s) => ({ ...s, currentPose: result.pose }));

    const phase = phaseRef.current;

    if (phase === 'calibrating') {
      setState((prev) => {
        if (!prev.currentCalibrationFace) return prev;
        const faceId = prev.currentCalibrationFace;
        const expected = FACE_CENTER_COLORS[faceId];

        if (result.detectedFace && isFaceColorValid(result.detectedFace.colors, expected)) {
          stableCalibCount.current++;
          if (stableCalibCount.current < STABLE_CALIBRATION_FRAMES) return prev;

          const scanned: ScannedFace = { faceId, colors: result.detectedFace.colors };
          const newFaces = [...prev.scannedFaces, scanned];
          const nextFace = CALIBRATION_ORDER[newFaces.length] ?? null;
          stableCalibCount.current = 0;

          if (nextFace) {
            return {
              ...prev,
              scannedFaces: newFaces,
              currentCalibrationFace: nextFace,
              calibrationProgress: newFaces.length / 6,
              calibrationHint: FACE_LABELS[nextFace],
            };
          }

          try {
            const facelet = buildFaceletString(newFaces);
            faceletRef.current = facelet;
            const id = ++requestId.current;
            solverWorker.current?.postMessage({ type: 'solve', facelet, id });
            if (result.pose) processor.syncPose(result.pose);

            return {
              ...prev,
              scannedFaces: newFaces,
              currentCalibrationFace: null,
              calibrationProgress: 1,
              calibrationHint: '해법 계산 중...',
            };
          } catch (error) {
            return {
              ...prev,
              phase: 'error',
              error: error instanceof Error ? error.message : '큐브 상태 생성 실패',
            };
          }
        }

        stableCalibCount.current = Math.max(0, stableCalibCount.current - 1);
        return prev;
      });
    }

    if (phase === 'solving' && result.rotationMove) {
      const solution = solutionRef.current;
      if (solution) {
        const expected = solution.moves[solution.currentIndex];
        if (result.rotationMove === expected) {
          applyCompletedMove(result.rotationMove);
          if (result.pose) processor.syncPose(result.pose);
        }
      }
    }
  }, [videoRef, applyCompletedMove]);

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
    startCalibration,
    startTracking,
    stopTracking,
  };
}
