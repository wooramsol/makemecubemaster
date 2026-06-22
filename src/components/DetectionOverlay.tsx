import type { DetectionFeedback, StickerColor } from '../types';
import type { GuideOverlayRect } from '../lib/vision/guideOverlay';
import { FaceColorGrid } from './FaceColorGrid';
import { GuideFrame } from './GuideFrame';

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
  guideRect: GuideOverlayRect | null;
  displayMirror?: boolean;
}

export function DetectionOverlay({ feedback, visible, guideRect, displayMirror }: DetectionOverlayProps) {
  if (!visible) return null;

  const showGrid = feedback.cellColors.length === 9;

  return (
    <div className="detection-overlay" aria-live="polite">
      <GuideFrame rect={guideRect} />

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
            displayMirror={displayMirror}
          />
        )}
      </div>
    </div>
  );
}
