import type { AppPhase, FaceId } from '../types';
import { isAwaitingFirstWhiteCenter } from '../lib/vision/scanWhiteCalibration';

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

  const awaitingWhite = knownFaces.length === 0 && isAwaitingFirstWhiteCenter();

  return (
    <div className="calibration-overlay live-scan-overlay">
      <div className="calibration-bar">
        <div className="calibration-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <p className="calibration-sub">{knownFaces.length} / 6</p>
      {awaitingWhite ? (
        <p className="calibration-hint">
          First face: center <strong>white</strong> sticker — all 9 colors scan using it as reference
        </p>
      ) : (
        <p className="calibration-hint calibration-hint--muted">
          ? cells fill automatically as other faces scan — no re-scan needed
        </p>
      )}
      {needsNewFace && (
        <p className="calibration-hint">Show a different face</p>
      )}
      {needsClearerCenter && !needsNewFace && !awaitingWhite && (
        <p className="calibration-hint">Hold steady — reading colors</p>
      )}
    </div>
  );
}
