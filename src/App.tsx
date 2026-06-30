import { useCallback, useEffect, useState } from 'react';
import { AROverlay } from './components/AROverlay';
import { CalibrationOverlay } from './components/CalibrationOverlay';
import { CameraView } from './components/CameraView';
import { LoadingScreen } from './components/LoadingScreen';
import { SolveCubeViewer } from './components/SolveCubeViewer';
import { StepIndicator } from './components/StepIndicator';
import { useCubeApp } from './hooks/useCubeApp';
import { useWebcam } from './hooks/useWebcam';
import './styles/global.css';

export default function App() {
  const { videoRef, state: webcamState, start: startWebcam } = useWebcam();
  const { state, currentMove, startCalibration, startTracking, stopTracking } =
    useCubeApp(videoRef);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    void startWebcam();
  }, [startWebcam]);

  useEffect(() => {
    if (webcamState.isReady && state.phase !== 'loading') {
      startTracking();
      return stopTracking;
    }
    return undefined;
  }, [webcamState.isReady, state.phase, startTracking, stopTracking]);

  const handleDimensions = useCallback((width: number, height: number) => {
    setDimensions({ width, height });
  }, []);

  if (state.phase === 'loading' || !webcamState.isReady) {
    return <LoadingScreen message={state.phase === 'loading' ? 'AI 엔진 로딩 중...' : '카메라 연결 중...'} />;
  }

  if (state.error || webcamState.error) {
    return (
      <div className="error-screen">
        <p>{state.error ?? webcamState.error}</p>
      </div>
    );
  }

  const totalSteps = state.solution?.moves.length ?? 0;
  const currentStep = (state.solution?.currentIndex ?? 0) + 1;
  const trackingActive = state.phase === 'solving' || state.phase === 'calibrating';

  const showSolveViewer =
    (state.phase === 'solving' || state.phase === 'solved') &&
    Boolean(state.solution?.moves.length);

  return (
    <main className="app">
      <div className={`viewport${showSolveViewer ? ' viewport--solve-viewer' : ''}`}>
        <CameraView videoRef={videoRef} onDimensions={handleDimensions} />
        <AROverlay
          pose={state.currentPose}
          move={currentMove}
          width={dimensions.width}
          height={dimensions.height}
          active={trackingActive && state.phase === 'solving'}
        />

        <StepIndicator phase={state.phase} currentStep={currentStep} totalSteps={totalSteps} />

        <SolveCubeViewer
          visible={showSolveViewer}
          facelet={state.solveFacelet}
          moves={state.solution?.moves ?? []}
          currentIndex={state.solution?.currentIndex ?? 0}
          solved={state.phase === 'solved'}
        />

        <CalibrationOverlay
          phase={state.phase}
          hint={state.calibrationHint}
          progress={state.calibrationProgress}
        />

        {state.phase === 'camera' && (
          <button type="button" className="primary-button" onClick={startCalibration}>
            큐브 스캔 시작
          </button>
        )}

        {state.phase === 'solved' && !showSolveViewer && (
          <div className="solved-banner">
            <p>완료!</p>
          </div>
        )}
      </div>
    </main>
  );
}
