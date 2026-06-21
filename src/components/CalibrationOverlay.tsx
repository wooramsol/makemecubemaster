import type { AppPhase, FaceId } from '../types';
import { getFaceLabel, getFaceScanHint } from '../lib/cube/colors';

interface CalibrationOverlayProps {
  phase: AppPhase;
  hint: string;
  progress: number;
  currentFace: FaceId | null;
  faceIndex: number;
}

export function CalibrationOverlay({
  phase,
  progress,
  currentFace,
  faceIndex,
}: CalibrationOverlayProps) {
  if (phase !== 'calibrating' || !currentFace) return null;

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
        큐브를 얼굴 대신 <strong>정사각형 가이드</strong> 안에 맞추세요. 배경은 단색이면
        더 잘 인식됩니다.
      </p>
    </div>
  );
}
