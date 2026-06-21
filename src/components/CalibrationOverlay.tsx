import type { AppPhase, FaceId } from '../types';
import { getFaceLabel, getFaceScanHint } from '../lib/cube/colors';

interface CalibrationOverlayProps {
  phase: AppPhase;
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
        <strong>섞인 상태 그대로</strong> 스캔합니다. 큐브를 맞출 필요 없습니다.
        가이드 안에 면을 맞추고 잠시 유지하세요.
      </p>
    </div>
  );
}
