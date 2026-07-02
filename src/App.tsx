import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AppTitle } from './components/AppTitle';
import { GuideLayer } from './components/GuideLayer';
import { CameraView } from './components/CameraView';
import { ColorLearnOverlay } from './components/ColorLearnOverlay';
import { DetectionOverlay } from './components/DetectionOverlay';
import { LiveScanOverlay } from './components/LiveScanOverlay';
import { ScannedFacesBar } from './components/ScannedFacesBar';
import { SolvingMoveHint } from './components/SolvingMoveHint';
import { SolvingCubeAROverlay } from './components/SolvingCubeAROverlay';
import { LoadingScreen } from './components/LoadingScreen';
import { ScanReadyOverlay } from './components/ScanReadyOverlay';
import { SolveCubeViewer } from './components/SolveCubeViewer';
import { useCubeApp } from './hooks/useCubeApp';
import { useWebcam } from './hooks/useWebcam';
import { COLOR_HEX, COLOR_LEARN_ORDER } from './lib/vision/colorReference';
import { faceletToFaceMap } from './lib/cube/state';
import type { FaceId, StickerColor } from './types';
import './styles/global.css';

export default function App() {
  const { videoRef, setVideoRef, state: webcamState, start: startWebcam } = useWebcam();
  const {
    state,
    currentMove,
    confirmColorLearn,
    startLiveScan,
    retryLiveScan,
    requestRescanFace,
    startTracking,
    stopTracking,
    skipCurrentMove,
  } = useCubeApp(videoRef);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [cameraBox, setCameraBox] = useState({ width: 0, height: 0 });

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

  // The camera feed shrinks (e.g. to 42% height) when the solve viewer is
  // shown, so AR overlays must track the video element box, not the viewport.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateBox = () => {
      setCameraBox({ width: video.clientWidth, height: video.clientHeight });
    };

    updateBox();
    const observer = new ResizeObserver(updateBox);
    observer.observe(video);
    return () => observer.disconnect();
  }, [videoRef, webcamState.isReady]);

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

  const showSolveViewer =
    (state.phase === 'solving' || state.phase === 'solved') &&
    Boolean(state.solution?.moves.length);

  const liveFaceColors = useMemo(
    () => ({
      ...state.solvingFeedback.visibleFaceColors,
      ...state.solvingFeedback.stableVisibleFaceColors,
    }),
    [
      state.solvingFeedback.visibleFaceColors,
      state.solvingFeedback.stableVisibleFaceColors,
    ],
  );

  const overlayWidth = cameraBox.width || viewportSize.width;
  const overlayHeight = cameraBox.height || viewportSize.height;

  const solvingFaceColors = useMemo<Partial<Record<FaceId, StickerColor[]>>>(() => {
    if (!state.solvingFacelet) return {};
    try {
      return Object.fromEntries(faceletToFaceMap(state.solvingFacelet)) as Partial<
        Record<FaceId, StickerColor[]>
      >;
    } catch {
      return {};
    }
  }, [state.solvingFacelet]);

  return (
    <main className="app">
      <div
        className={`viewport${state.phase === 'liveScan' ? ' viewport--scanning' : ''}${isSolving ? ' viewport--solving' : ''}${showSolveViewer ? ' viewport--solve-viewer' : ''}`}
        ref={viewportRef}
      >
        <CameraView setVideoRef={setVideoRef} onDimensions={handleDimensions} />
        <AppTitle />

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
              interactive={state.phase === 'liveScan'}
              onRescanFace={requestRescanFace}
              rescanTargetFace={state.rescanTargetFace}
            />

            <DetectionOverlay
              feedback={state.detectionFeedback}
              visible={state.phase === 'liveScan'}
              scannedFaces={state.scannedFaceColors}
              lastCapturedFace={state.lastCapturedFace}
              currentVisibleFace={state.currentVisibleFace}
              frameWidth={dimensions.width}
              frameHeight={dimensions.height}
              viewportWidth={viewportSize.width}
              viewportHeight={viewportSize.height}
            />

            <LiveScanOverlay
              phase={state.phase}
              knownFaces={state.knownFaces}
              progress={state.liveScanProgress}
              rescanTargetFace={state.rescanTargetFace}
              needsNewFace={state.detectionFeedback.status === 'rotate'}
              needsClearerCenter={state.liveScanNeedsClearerCenter}
              needsDeferredWarmFace={state.liveScanNeedsDeferredWarmFace}
            />

            <SolveCubeViewer
              visible={showSolveViewer}
              facelet={state.solvingFacelet || null}
              moves={state.solution?.moves ?? []}
              currentIndex={state.solution?.currentIndex ?? 0}
              solved={state.phase === 'solved'}
            />

            <SolvingCubeAROverlay
              active={isSolving && Boolean(currentMove)}
              pose={state.currentPose}
              move={currentMove}
              rotationProgress={state.solvingFeedback.rotationProgress}
              liveFaceColors={liveFaceColors}
              scannedFaceColors={solvingFaceColors}
              frameWidth={dimensions.width}
              frameHeight={dimensions.height}
              viewportWidth={overlayWidth}
              viewportHeight={overlayHeight}
            />

            {isSolving && currentMove && (
              <SolvingMoveHint
                visible
                move={currentMove}
                facelet={state.solvingFacelet}
                rotationProgress={state.solvingFeedback.rotationProgress}
                scanMatch={state.solvingFeedback.scanMatch}
                handMotionDetected={state.solvingFeedback.handMotionDetected}
                wrongMove={state.solvingFeedback.wrongMove}
                currentStep={currentStep}
                totalSteps={totalSteps}
                frameWidth={dimensions.width}
                frameHeight={dimensions.height}
                viewportWidth={viewportSize.width}
                viewportHeight={viewportSize.height}
                layerTurnInProgress={state.solvingFeedback.layerTurnInProgress}
                sawShapeBreak={state.solvingFeedback.sawShapeBreak}
                layerTurnValidated={state.solvingFeedback.layerTurnValidated}
                holdFaceAligned={state.solvingFeedback.holdFaceAligned}
                onSkip={skipCurrentMove}
              />
            )}

            {state.phase === 'solved' && !showSolveViewer && (
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
              <button type="button" className="error-button primary" onClick={retryLiveScan}>
                Re-calibrate colors
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
