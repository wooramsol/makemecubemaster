import { useMemo } from 'react';
import type { DetectionFeedback, StickerColor } from '../types';
import { getGuideOverlayRect } from '../lib/vision/guideOverlay';
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
  const guideRect = useMemo(
    () => getGuideOverlayRect(frameWidth, frameHeight, viewportWidth, viewportHeight),
    [frameWidth, frameHeight, viewportWidth, viewportHeight],
  );

  const panelStyle = useMemo(() => {
    if (!guideRect || !viewportWidth) return undefined;
    const gap = 12;
    const panelWidth = Math.min(120, viewportWidth * 0.34);
    const left = Math.min(
      guideRect.left + guideRect.width + gap,
      viewportWidth - panelWidth - 8,
    );
    const top = guideRect.top + guideRect.height / 2;
    return {
      left: `${left}px`,
      top: `${top}px`,
      transform: 'translateY(-50%)',
      maxWidth: `${panelWidth}px`,
    } as React.CSSProperties;
  }, [guideRect, viewportWidth]);

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
