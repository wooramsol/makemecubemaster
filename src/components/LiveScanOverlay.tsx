import type { AppPhase, FaceId } from '../types';

interface LiveScanOverlayProps {
  phase: AppPhase;
  knownFaces: FaceId[];
  progress: number;
}

export function LiveScanOverlay({ phase, knownFaces, progress }: LiveScanOverlayProps) {
  if (phase !== 'liveScan') return null;

  return (
    <div className="calibration-overlay live-scan-overlay">
      <div className="calibration-bar">
        <div className="calibration-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <p className="calibration-sub">{knownFaces.length} / 6</p>
    </div>
  );
}
