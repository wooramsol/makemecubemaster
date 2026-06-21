import type { AppPhase } from '../types';

interface CalibrationOverlayProps {
  phase: AppPhase;
  hint: string;
  progress: number;
}

export function CalibrationOverlay({ phase, hint, progress }: CalibrationOverlayProps) {
  if (phase !== 'calibrating') return null;

  return (
    <div className="calibration-overlay">
      <p className="calibration-hint">{hint}</p>
      <div className="calibration-bar">
        <div className="calibration-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <p className="calibration-sub">큐브 면을 카메라 중앙에 맞추고 잠시 유지하세요</p>
    </div>
  );
}
