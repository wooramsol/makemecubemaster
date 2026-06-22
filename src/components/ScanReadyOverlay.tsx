import type { DetectionFeedback } from '../types';
import type { GuideOverlayRect } from '../lib/vision/guideOverlay';
import { useConfirmKey } from '../hooks/useConfirmKey';
import { GuideFrame } from './GuideFrame';

interface ScanReadyOverlayProps {
  visible: boolean;
  feedback: DetectionFeedback;
  guideRect: GuideOverlayRect | null;
  onStart: () => void;
}

export function ScanReadyOverlay({
  visible,
  feedback,
  guideRect,
  onStart,
}: ScanReadyOverlayProps) {
  const cubeDetected =
    feedback.status === 'detected' && feedback.cellColors.length === 9;

  useConfirmKey(onStart, visible);

  if (!visible) return null;

  return (
    <div className="scan-ready-overlay" aria-live="polite">
      <GuideFrame rect={guideRect} />

      <div className="scan-ready-panel">
        <p className="scan-ready-hint">
          {cubeDetected ? 'Cube detected' : 'Align cube in guide'}
        </p>
        <button type="button" className="capture-button" onClick={onStart}>
          Start scan
        </button>
      </div>
    </div>
  );
}
