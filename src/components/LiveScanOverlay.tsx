import type { AppPhase, FaceId } from '../types';
import { ALL_FACES, getFaceLabel } from '../lib/cube/colors';

interface LiveScanOverlayProps {
  phase: AppPhase;
  knownFaces: FaceId[];
  currentFace: FaceId | null;
  progress: number;
}

export function LiveScanOverlay({
  phase,
  knownFaces,
  currentFace,
  progress,
}: LiveScanOverlayProps) {
  if (phase !== 'liveScan') return null;

  const knownSet = new Set(knownFaces);
  const remaining = ALL_FACES.filter((f) => !knownSet.has(f));

  return (
    <div className="calibration-overlay live-scan-overlay">
      <p className="calibration-step">2단계 — 라이브 스캔</p>
      <p className="calibration-hint">큐브를 천천히 돌려 6면을 인식하세요</p>
      <div className="calibration-bar">
        <div className="calibration-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <p className="calibration-sub">
        {knownFaces.length} / 6 면 인식됨
        {currentFace && !knownSet.has(currentFace) && ` · ${getFaceLabel(currentFace)} 인식 중`}
      </p>
      <div className="face-chips" aria-label="인식된 면">
        {ALL_FACES.map((face) => (
          <span
            key={face}
            className={`face-chip${knownSet.has(face) ? ' known' : ''}${currentFace === face ? ' active' : ''}`}
          >
            {getFaceLabel(face).replace('면 ', '')}
          </span>
        ))}
      </div>
      {remaining.length > 0 && remaining.length < 6 && (
        <p className="live-scan-remaining">아직: {remaining.map((f) => getFaceLabel(f)).join(', ')}</p>
      )}
    </div>
  );
}
