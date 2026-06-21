import { useCallback, useEffect, useState } from 'react';
import { AROverlay } from './components/AROverlay';
import { CameraView } from './components/CameraView';
import { DetectionOverlay } from './components/DetectionOverlay';
import { LiveScanOverlay } from './components/LiveScanOverlay';
import { LoadingScreen } from './components/LoadingScreen';
import { StepIndicator } from './components/StepIndicator';
import { WhiteBalanceOverlay } from './components/WhiteBalanceOverlay';
import { useCubeApp } from './hooks/useCubeApp';
import { useWebcam } from './hooks/useWebcam';
import './styles/global.css';

export default function App() {
  const { videoRef, setVideoRef, state: webcamState, start: startWebcam } = useWebcam();
  const { state, currentMove, confirmWhiteBalance, retryLiveScan, retryFromWhiteBalance, startTracking, stopTracking } =
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
  const isComputing = state.phase === 'computing';

  const totalSteps = state.solution?.moves.length ?? 0;
  const currentStep = (state.solution?.currentIndex ?? 0) + 1;
  const showAr = state.phase === 'solving';

  return (
    <main className="app">
      <div className="viewport">
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

            <WhiteBalanceOverlay
              visible={state.phase === 'whiteBalance'}
              sample={state.whiteBalanceSample}
              ready={state.whiteBalanceReady}
              error={state.whiteBalanceError}
              onConfirm={confirmWhiteBalance}
            />

            <DetectionOverlay
              feedback={state.detectionFeedback}
              visible={state.phase === 'liveScan'}
            />

            <StepIndicator phase={state.phase} currentStep={currentStep} totalSteps={totalSteps} />
            <LiveScanOverlay
              phase={state.phase}
              knownFaces={state.knownFaces}
              currentFace={state.currentVisibleFace}
              progress={state.liveScanProgress}
            />

            {state.phase === 'solving' && currentMove && (
              <div className="solving-banner">
                <p className="solving-move">{currentMove}</p>
                <p className="solving-hint">화살표 방향으로 면을 돌리세요</p>
              </div>
            )}

            {state.phase === 'solved' && (
              <div className="solved-banner">
                <p>완료!</p>
              </div>
            )}
          </>
        )}

        {isComputing && (
          <LoadingScreen overlay message="6면 인식 완료 — 해법 계산 중..." />
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
            <div className="error-actions">
              {state.whiteBalanceCalibrated && (
                <button type="button" className="error-button primary" onClick={retryLiveScan}>
                  다시 스캔
                </button>
              )}
              <button type="button" className="error-button secondary" onClick={retryFromWhiteBalance}>
                흰색 기준부터 다시
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
