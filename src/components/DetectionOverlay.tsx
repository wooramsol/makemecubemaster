import type { DetectionFeedback, StickerColor } from '../types';
import type { GuideOverlayRect } from '../lib/vision/guideOverlay';
import { COLOR_HEX } from '../lib/vision/colorReference';
import { mirrorFaceCellsForSelfie } from '../lib/vision/selfieView';
import { GuideFrame } from './GuideFrame';

const STATUS_LABEL: Record<DetectionFeedback['status'], string> = {
  searching: '…',
  detected: 'OK',
  stabilizing: '…',
  captured: '✓',
};

interface DetectionOverlayProps {
  feedback: DetectionFeedback;
  visible: boolean;
  guideRect: GuideOverlayRect | null;
}

export function DetectionOverlay({ feedback, visible, guideRect }: DetectionOverlayProps) {
  if (!visible) return null;

  const showGrid = feedback.cellColors.length === 9;
  const displayCells = showGrid ? mirrorFaceCellsForSelfie(feedback.cellColors) : [];

  return (
    <div className="detection-overlay" aria-live="polite">
      <GuideFrame rect={guideRect} />

      <div className="scan-ui-panel scan-ui-panel--compact">
        <div className={`detection-status ${feedback.status}`}>
          <span className="status-text">{STATUS_LABEL[feedback.status]}</span>
          {feedback.status === 'stabilizing' && (
            <span className="status-progress">
              {feedback.stableProgress.toFixed(1)}/{feedback.stableTarget}s
            </span>
          )}
        </div>

        {showGrid && (
          <div className="cell-grid">
            {displayCells.map((color, i) => (
              <span
                key={i}
                className="cell-grid-item"
                style={{ background: COLOR_HEX[color as StickerColor] }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
