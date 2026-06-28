import { useMemo } from 'react';
import type { DetectionFeedback, FaceId, ReadColor } from '../types';
import { getGuideOverlayRect, getPanelBesideGuideStyle } from '../lib/vision/guideOverlay';
import { FaceColorGrid } from './FaceColorGrid';

const STATUS_LABEL: Record<DetectionFeedback['status'], string> = {
  searching: '…',
  detected: 'OK',
  'weak-read': 'Unclear',
  stabilizing: '…',
  captured: '✓',
  rotate: 'Rotate',
};

interface DetectionOverlayProps {
  feedback: DetectionFeedback;
  visible: boolean;
  scannedFaces: Partial<Record<FaceId, ReadColor[]>>;
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
  lastCapturedFace,
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
    return getPanelBesideGuideStyle(guideRect, viewportWidth, viewportHeight, 168);
  }, [frameWidth, frameHeight, viewportWidth, viewportHeight]);

  if (!visible) return null;

  const previewColors =
    feedback.cellColors.length === 9 ? feedback.cellColors : null;

  return (
    <div className="detection-overlay" aria-live="polite">
      <div className="scan-ui-panel scan-ui-panel--live" style={panelStyle}>
        {previewColors && (
          <div className="scan-live-preview">
            <FaceColorGrid
              colors={previewColors}
              variant="overlay"
              orientation="mirror"
            />
            {feedback.uncertainCells > 0 && (
              <p className="scan-live-preview-hint">
                {feedback.uncertainCells} unclear — filled after all faces
              </p>
            )}
          </div>
        )}

        <div className={`detection-status ${feedback.status}`}>
          <span className="status-dot" aria-hidden />
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
