import type { DetectionFeedback, StickerColor } from '../types';
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
}

export function DetectionOverlay({ feedback, visible }: DetectionOverlayProps) {
  if (!visible) return null;

  const showGrid = feedback.cellColors.length === 9;

  return (
    <div className="detection-overlay" aria-live="polite">
      <div className="scan-ui-panel scan-ui-panel--compact">
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
