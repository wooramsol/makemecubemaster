import type { AppPhase, FaceId } from '../types';

interface LiveScanOverlayProps {
  phase: AppPhase;
  knownFaces: FaceId[];
  progress: number;
  needsNewFace?: boolean;
}

export function LiveScanOverlay({
  phase,
  knownFaces,
  progress,
  needsNewFace = false,
}: LiveScanOverlayProps) {
  if (phase !== 'liveScan') return null;

  return (
    <div className="calibration-overlay live-scan-overlay">
      <div className="calibration-bar">
        <div className="calibration-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <p className="calibration-sub">{knownFaces.length} / 6</p>
      <p className="calibration-hint calibration-hint--muted">
        Any face order · same tilt each time
      </p>
      {needsNewFace && (
        <p className="calibration-hint">Show a different face</p>
      )}
    </div>
  );
}
