import { useMemo } from 'react';
import type { DetectionFeedback, StickerColor } from '../types';
import { getGuideOverlayRect, getPanelBesideGuideStyle } from '../lib/vision/guideOverlay';
import { FaceColorGrid } from './FaceColorGrid';

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
  frameWidth: number;
  frameHeight: number;
  viewportWidth: number;
  viewportHeight: number;
}

export function DetectionOverlay({
  feedback,
  visible,
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
    return getPanelBesideGuideStyle(guideRect, viewportWidth, 120);
  }, [frameWidth, frameHeight, viewportWidth, viewportHeight]);

  if (!visible) return null;

  const showGrid = feedback.cellColors.length === 9;

  return (
    <div className="detection-overlay" aria-live="polite">
      <div className="scan-ui-panel scan-ui-panel--compact" style={panelStyle}>
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
        </div>

        {showGrid && (
          <FaceColorGrid
            colors={feedback.cellColors as StickerColor[]}
            variant="overlay"
            orientation="mirror"
          />
        )}
      </div>
    </div>
  );
}
