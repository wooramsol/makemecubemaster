import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AROverlay } from './components/AROverlay';
import { CameraView } from './components/CameraView';
import { ColorLearnOverlay } from './components/ColorLearnOverlay';
import { DetectionOverlay } from './components/DetectionOverlay';
import { LiveScanOverlay } from './components/LiveScanOverlay';
import { ScannedFacesBar } from './components/ScannedFacesBar';
import { LoadingScreen } from './components/LoadingScreen';
import { ScanReadyOverlay } from './components/ScanReadyOverlay';
import { StepIndicator } from './components/StepIndicator';
import { useCubeApp } from './hooks/useCubeApp';
import { useWebcam } from './hooks/useWebcam';
import { getGuideOverlayRect, getWhiteSpotOverlayRect } from './lib/vision/guideOverlay';
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

  const guideRect = useMemo(
    () =>
      getGuideOverlayRect(
        dimensions.width,
        dimensions.height,
        viewportSize.width,
        viewportSize.height,
      ),
    [dimensions.width, dimensions.height, viewportSize.width, viewportSize.height],
  );

  const spotRect = useMemo(
    () =>
      getWhiteSpotOverlayRect(
        dimensions.width,
        dimensions.height,
        viewportSize.width,
        viewportSize.height,
      ),
    [dimensions.width, dimensions.height, viewportSize.width, viewportSize.height],
  );

  const isBooting = state.phase === 'loading' || !webcamState.isReady;
  const hasError = Boolean(state.error || webcamState.error);
  const isComputing = state.phase === 'computing';
  const showAr = state.phase === 'solving';

  const totalSteps = state.solution?.moves.length ?? 0;
  const currentStep = (state.solution?.currentIndex ?? 0) + 1;
  const showScannedFaces =
    state.phase === 'liveScan' ||
    (hasError && Object.keys(state.scannedFaceColors).length > 0);

  return (
    <main className="app">
      <div className="viewport" ref={viewportRef}>
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

            <ColorLearnOverlay
              visible={state.phase === 'colorLearn'}
              stepIndex={state.colorLearnIndex}
              sample={state.colorLearnSample}
              ready={state.colorLearnReady}
              error={state.colorLearnError}
              onConfirm={confirmColorLearn}
              guideRect={guideRect}
              spotRect={spotRect}
            />

            <ScanReadyOverlay
              visible={state.phase === 'scanReady'}
              feedback={state.detectionFeedback}
              guideRect={guideRect}
              onStart={startLiveScan}
            />

            <ScannedFacesBar
              visible={showScannedFaces}
              scannedFaces={state.scannedFaceColors}
            />

            <DetectionOverlay
              feedback={state.detectionFeedback}
              visible={state.phase === 'liveScan'}
              guideRect={guideRect}
            />

            <StepIndicator phase={state.phase} currentStep={currentStep} totalSteps={totalSteps} />
            <LiveScanOverlay
              phase={state.phase}
              knownFaces={state.knownFaces}
              progress={state.liveScanProgress}
              needsNewFace={state.detectionFeedback.status === 'rotate'}
            />

            {state.phase === 'solving' && currentMove && (
              <div className="solving-banner">
                <p className="solving-move">{currentMove}</p>
              </div>
            )}

            {state.phase === 'solved' && (
              <div className="solved-banner">
                <p>Done</p>
              </div>
            )}
          </>
        )}

        {isComputing && <LoadingScreen overlay message="Computing…" />}

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
    </main>
  );
}
