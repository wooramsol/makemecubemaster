import { useMemo } from 'react';
import type { DetectionFeedback, FaceId, StickerColor } from '../types';
import { getGuideOverlayRect, getPanelBesideGuideStyle } from '../lib/vision/guideOverlay';
import { ScanIsoCubeGuide } from './ScanIsoCubeGuide';

const STATUS_LABEL: Record<DetectionFeedback['status'], string> = {
  searching: '…',
  detected: 'OK',
  stabilizing: '…',
  captured: '✓',
  rotate: 'Rotate',
};

interface DetectionOverlayProps {
  feedback: DetectionFeedback;
  visible: boolean;
  scannedFaces: Partial<Record<FaceId, StickerColor[]>>;
  lastCapturedFace: FaceId | null;
  currentVisibleFace: FaceId | null;
  frameWidth: number;
  frameHeight: number;
  viewportWidth: number;
  viewportHeight: number;
}

export function DetectionOverlay({
  feedback,
  visible,
  scannedFaces,
  lastCapturedFace,
  currentVisibleFace,
  frameWidth,
  frameHeight,
  viewportWidth,
  viewportHeight,
}: DetectionOverlayProps) {
  const panelStyle = useMemo(() => {
    const guideRect = getGuideOverlayRect(
      frameWidth,
      frameHeight,
      viewportWidth,
      viewportHeight,
    );
    if (!guideRect || !viewportWidth) return undefined;
    return getPanelBesideGuideStyle(guideRect, viewportWidth, 200);
  }, [frameWidth, frameHeight, viewportWidth, viewportHeight]);

  if (!visible) return null;

  const previewColors =
    feedback.cellColors.length === 9 ? (feedback.cellColors as StickerColor[]) : null;

  return (
    <div className="detection-overlay" aria-live="polite">
      <div className="scan-ui-panel scan-ui-panel--iso" style={panelStyle}>
        <ScanIsoCubeGuide
          scannedFaces={scannedFaces}
          lastCapturedFace={lastCapturedFace}
          currentVisibleFace={currentVisibleFace}
          previewColors={previewColors}
        />

        <div className={`detection-status ${feedback.status}`}>
          <span className="status-text">{STATUS_LABEL[feedback.status]}</span>
          {feedback.status === 'rotate' && (
            <span className="status-progress">New face</span>
          )}
          {feedback.status === 'stabilizing' && (
            <span className="status-progress">
              {feedback.stableProgress.toFixed(1)}/{feedback.stableTarget}s
            </span>
          )}
          {feedback.status === 'captured' && lastCapturedFace && (
            <span className="status-progress">{lastCapturedFace} saved</span>
          )}
        </div>
      </div>
    </div>
  );
}
