import type { AppPhase, FaceId } from '../types';

interface LiveScanOverlayProps {
  phase: AppPhase;
  knownFaces: FaceId[];
  progress: number;
  needsNewFace?: boolean;
  needsClearerCenter?: boolean;
}

export function LiveScanOverlay({
  phase,
  knownFaces,
  progress,
  needsNewFace = false,
  needsClearerCenter = false,
}: LiveScanOverlayProps) {
  if (phase !== 'liveScan') return null;

  return (
    <div className="calibration-overlay live-scan-overlay">
      <div className="calibration-bar">
        <div className="calibration-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <p className="calibration-sub">{knownFaces.length} / 6</p>
      <p className="calibration-hint calibration-hint--muted">
        White faces fill as you scan · same tilt each time
      </p>
      {needsNewFace && (
        <p className="calibration-hint">Show a different face</p>
      )}
      {needsClearerCenter && !needsNewFace && (
        <p className="calibration-hint">Center the face color in the guide</p>
      )}
    </div>
  );
}
