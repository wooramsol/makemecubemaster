import { useCallback, useEffect, useRef, useState } from 'react';
import { GuideLayer } from './components/GuideLayer';
import { CameraView } from './components/CameraView';
import { ColorLearnOverlay } from './components/ColorLearnOverlay';
import { DetectionOverlay } from './components/DetectionOverlay';
import { LiveScanOverlay } from './components/LiveScanOverlay';
import { ScannedFacesBar } from './components/ScannedFacesBar';
import { SolvingAROverlay } from './components/SolvingAROverlay';
import { SolvingFaceStatusPanel } from './components/SolvingFaceStatusPanel';
import { SolvingScanZone } from './components/SolvingScanZone';
import { LoadingScreen } from './components/LoadingScreen';
import { ScanReadyOverlay } from './components/ScanReadyOverlay';
import { StepIndicator } from './components/StepIndicator';
import { useCubeApp } from './hooks/useCubeApp';
import { useWebcam } from './hooks/useWebcam';
import { COLOR_HEX, COLOR_LEARN_ORDER } from './lib/vision/colorReference';
import { APP_VERSION } from './lib/appVersion';
import './styles/global.css';

export default function App() {
  const { videoRef, setVideoRef, state: webcamState, start: startWebcam } = useWebcam();
  const {
    state,
    currentMove,
    confirmColorLearn,
    startLiveScan,
    retryLiveScan,
    retryColorLearn,
    startTracking,
    stopTracking,
    skipCurrentMove,
  } = useCubeApp(videoRef);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

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

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateSize = () => {
      setViewportSize({
        width: viewport.clientWidth,
        height: viewport.clientHeight,
      });
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  const colorLearnTarget = COLOR_LEARN_ORDER[state.colorLearnIndex] ?? 'R';

  const isBooting = state.phase === 'loading' || !webcamState.isReady;
  const hasError = Boolean(state.error || webcamState.error);
  const isComputing = state.phase === 'computing';
  const isSolving = state.phase === 'solving';

  const totalSteps = state.solution?.moves.length ?? 0;
  const currentStep = (state.solution?.currentIndex ?? 0) + 1;
  const showScannedFaces =
    state.phase === 'liveScan' ||
    state.phase === 'computing' ||
    (hasError && Object.keys(state.scannedFaceColors).length > 0);

  return (
    <main className="app">
      <div
        className={`viewport${state.phase === 'liveScan' ? ' viewport--scanning' : ''}${isSolving ? ' viewport--solving' : ''}`}
        ref={viewportRef}
      >
        <CameraView setVideoRef={setVideoRef} onDimensions={handleDimensions} />

        {!isBooting && !hasError && (
          <>
            <GuideLayer
              phase={state.phase}
              frameWidth={dimensions.width}
              frameHeight={dimensions.height}
              viewportWidth={viewportSize.width}
              viewportHeight={viewportSize.height}
              colorLearnSpot={state.phase === 'colorLearn'}
              spotColor={COLOR_HEX[colorLearnTarget]}
            />

            <ColorLearnOverlay
              visible={state.phase === 'colorLearn'}
              stepIndex={state.colorLearnIndex}
              sample={state.colorLearnSample}
              ready={state.colorLearnReady}
              error={state.colorLearnError}
              onConfirm={confirmColorLearn}
            />

            <ScanReadyOverlay
              visible={state.phase === 'scanReady'}
              feedback={state.detectionFeedback}
              onStart={startLiveScan}
            />

            <ScannedFacesBar
              visible={showScannedFaces}
              scannedFaces={state.scannedFaceColors}
            />

            <DetectionOverlay
              feedback={state.detectionFeedback}
              visible={state.phase === 'liveScan'}
            />

            <StepIndicator phase={state.phase} currentStep={currentStep} totalSteps={totalSteps} />
            <LiveScanOverlay
              phase={state.phase}
              knownFaces={state.knownFaces}
              progress={state.liveScanProgress}
              needsNewFace={state.detectionFeedback.status === 'rotate'}
              needsClearerCenter={state.liveScanNeedsClearerCenter}
            />

            <SolvingScanZone
              visible={isSolving}
              frameWidth={dimensions.width}
              frameHeight={dimensions.height}
              viewportWidth={viewportSize.width}
              viewportHeight={viewportSize.height}
              tracking={state.solvingFeedback.tracking}
              rotationProgress={state.solvingFeedback.rotationProgress}
            />

            <SolvingAROverlay
              active={isSolving && Boolean(currentMove && state.currentPose)}
              pose={state.currentPose}
              move={currentMove}
              rotationProgress={state.solvingFeedback.rotationProgress}
              frameWidth={dimensions.width}
              frameHeight={dimensions.height}
              viewportWidth={viewportSize.width}
              viewportHeight={viewportSize.height}
            />

            <SolvingFaceStatusPanel
              visible={isSolving && Boolean(currentMove)}
              tracking={state.solvingFeedback.tracking}
              faceScanInfos={state.solvingFeedback.faceScanInfos}
              expectedMove={currentMove}
              rotationProgress={state.solvingFeedback.rotationProgress}
              onSkip={skipCurrentMove}
            />

            {state.phase === 'solved' && (
              <div className="solved-banner">
                <p>Done</p>
              </div>
            )}
          </>
        )}

        {isComputing && (
          <>
            <ScannedFacesBar
              visible={showScannedFaces}
              scannedFaces={state.scannedFaceColors}
            />
            <LoadingScreen overlay message="Computing…" />
          </>
        )}

        {isBooting && (
          <LoadingScreen
            overlay
            message={state.phase === 'loading' ? 'Loading…' : 'Camera…'}
          />
        )}

        {hasError && !isBooting && (
          <div className="error-screen overlay">
            <ScannedFacesBar
              visible={showScannedFaces}
              scannedFaces={state.scannedFaceColors}
            />
            <p>{state.error ?? webcamState.error}</p>
            <div className="error-actions">
              {state.colorsCalibrated && (
                <button type="button" className="error-button primary" onClick={retryLiveScan}>
                  Re-scan
                </button>
              )}
              <button type="button" className="error-button secondary" onClick={retryColorLearn}>
                Re-learn colors
              </button>
            </div>
          </div>
        )}
      </div>
      <p className="app-version" aria-hidden="true">
        v{APP_VERSION}
      </p>
    </main>
  );
}
