import type { AppPhase, FaceId } from '../types';
import { getFaceLabel, getFaceScanHint } from '../lib/cube/colors';

interface CalibrationOverlayProps {
  phase: AppPhase;
  progress: number;
  currentFace: FaceId | null;
  faceIndex: number;
  canCapture: boolean;
  onCapture: () => void;
}

export function CalibrationOverlay({
  phase,
  progress,
  currentFace,
  faceIndex,
  canCapture,
  onCapture,
}: CalibrationOverlayProps) {
  if (phase !== 'calibrating' || !currentFace) return null;

  const isRepeatFace = faceIndex > 0;

  return (
    <div className="calibration-overlay">
      <p className="calibration-step">
        {faceIndex + 1} / 6 — {getFaceLabel(currentFace)}
      </p>
      <p className="calibration-hint">{getFaceScanHint(currentFace)}</p>
      <div className="calibration-bar">
        <div className="calibration-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <p className="calibration-sub">
        {isRepeatFace
          ? '다른 면을 가이드에 맞춘 뒤 아래 버튼을 누르세요.'
          : '큐브 면을 가이드에 맞추고 준비되면 버튼을 누르세요.'}
      </p>
      <button
        type="button"
        className="capture-button"
        disabled={!canCapture}
        onClick={onCapture}
      >
        {canCapture ? '이 면 스캔' : '큐브를 가이드 안에 맞추세요'}
      </button>
    </div>
  );
}
