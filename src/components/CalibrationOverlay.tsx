import type { AppPhase, FaceId } from '../types';
import { FACE_LABELS } from '../lib/cube/colors';

interface CalibrationOverlayProps {
  phase: AppPhase;
  hint: string;
  progress: number;
  currentFace: FaceId | null;
  faceIndex: number;
}

export function CalibrationOverlay({
  phase,
  hint,
  progress,
  currentFace,
  faceIndex,
}: CalibrationOverlayProps) {
  if (phase !== 'calibrating') return null;

  return (
    <div className="calibration-overlay">
      <p className="calibration-step">
        {faceIndex + 1} / 6 — {currentFace ? FACE_LABELS[currentFace] : hint}
      </p>
      <p className="calibration-hint">{hint}</p>
      <div className="calibration-bar">
        <div className="calibration-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <p className="calibration-sub">
        큐브를 화면 중앙 사각형 안에 맞추세요. 초록 테두리가 보이면 인식된 것입니다.
      </p>
    </div>
  );
}
