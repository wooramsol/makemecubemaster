import type { DetectionFeedback } from '../types';
import { useConfirmKey } from '../hooks/useConfirmKey';

interface ScanReadyOverlayProps {
  visible: boolean;
  feedback: DetectionFeedback;
  onStart: () => void;
}

export function ScanReadyOverlay({
  visible,
  feedback,
  onStart,
}: ScanReadyOverlayProps) {
  const cubeDetected =
    feedback.status === 'detected' && feedback.cellColors.length === 9;

  useConfirmKey(onStart, visible);

  if (!visible) return null;

  return (
    <div className="scan-ready-overlay" aria-live="polite">
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
