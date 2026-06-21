import { useCallback, useEffect, useState } from 'react';
import { AROverlay } from './components/AROverlay';
import { CalibrationOverlay } from './components/CalibrationOverlay';
import { CameraView } from './components/CameraView';
import { DetectionOverlay } from './components/DetectionOverlay';
import { LoadingScreen } from './components/LoadingScreen';
import { StepIndicator } from './components/StepIndicator';
import { useCubeApp } from './hooks/useCubeApp';
import { useWebcam } from './hooks/useWebcam';
import './styles/global.css';

export default function App() {
  const { videoRef, setVideoRef, state: webcamState, start: startWebcam } = useWebcam();
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

  const isBooting = state.phase === 'loading' || !webcamState.isReady;
  const hasError = Boolean(state.error || webcamState.error);

  const totalSteps = state.solution?.moves.length ?? 0;
  const currentStep = (state.solution?.currentIndex ?? 0) + 1;
  const trackingActive = state.phase === 'solving' || state.phase === 'calibrating';
  const showAr = trackingActive && state.phase === 'solving';

  return (
    <main className="app">
      <div className="viewport">
        {/* video는 항상 마운트 — 로딩 중에도 스트림 연결 유지 */}
        <CameraView setVideoRef={setVideoRef} onDimensions={handleDimensions} />

        {!isBooting && !hasError && (
          <>
            <AROverlay
              pose={state.currentPose}
              move={currentMove}
              width={dimensions.width}
              height={dimensions.height}
              active={showAr}
            />

            <DetectionOverlay
              pose={state.currentPose}
              feedback={state.detectionFeedback}
              videoWidth={dimensions.width}
              videoHeight={dimensions.height}
              visible={state.phase === 'calibrating'}
            />

            <StepIndicator phase={state.phase} currentStep={currentStep} totalSteps={totalSteps} />
            <CalibrationOverlay
              phase={state.phase}
              progress={state.calibrationProgress}
              currentFace={state.currentCalibrationFace}
              faceIndex={state.scannedFaces.length}
            />

        {state.phase === 'camera' && (
          <button type="button" className="primary-button" onClick={startCalibration}>
            섞인 큐브 스캔
          </button>
        )}

            {state.phase === 'solved' && (
              <div className="solved-banner">
                <p>완료!</p>
              </div>
            )}
          </>
        )}

        {isBooting && (
          <LoadingScreen
            overlay
            message={state.phase === 'loading' ? 'AI 엔진 로딩 중...' : '카메라 연결 중...'}
          />
        )}

        {hasError && !isBooting && (
          <div className="error-screen overlay">
            <p>{state.error ?? webcamState.error}</p>
          </div>
        )}
      </div>
    </main>
  );
}
