import type { AppPhase, FaceId } from '../types';
import { isAwaitingFirstWhiteCenter } from '../lib/vision/scanWhiteCalibration';
import { isColorsCalibrated } from '../lib/vision/colorReference';
import { FACE_CENTER_LABEL } from './ScannedFacesBar';

interface LiveScanOverlayProps {
  phase: AppPhase;
  knownFaces: FaceId[];
  progress: number;
  rescanTargetFace?: FaceId | null;
  needsNewFace?: boolean;
  needsClearerCenter?: boolean;
  needsDeferredWarmFace?: boolean;
}

export function LiveScanOverlay({
  phase,
  knownFaces,
  progress,
  rescanTargetFace = null,
  needsNewFace = false,
  needsClearerCenter = false,
  needsDeferredWarmFace = false,
}: LiveScanOverlayProps) {
  if (phase !== 'liveScan') return null;

  const awaitingWhite = knownFaces.length === 0 && isAwaitingFirstWhiteCenter();
  const rescanLabel = rescanTargetFace ? FACE_CENTER_LABEL[rescanTargetFace] : null;

  const calibrated = isColorsCalibrated();

  return (
    <div className="calibration-overlay live-scan-overlay">
      <div className="calibration-bar">
        <div className="calibration-fill" style={{ width: `${progress * 100}%` }} />
      </div>
      <p className="calibration-sub">{knownFaces.length} / 6</p>
      {rescanLabel ? (
        <p className="calibration-hint">
          Re-scanning <strong>{rescanLabel}</strong> — align that face to the camera
        </p>
      ) : awaitingWhite ? (
        <p className="calibration-hint">
          First face: center <strong>white</strong> sticker, then scan all 9 colors
        </p>
      ) : calibrated ? (
        <p className="calibration-hint calibration-hint--muted">
          Using your calibrated colors — show each unscanned face
        </p>
      ) : (
        <p className="calibration-hint calibration-hint--muted">
          ? cells fill as other faces scan
        </p>
      )}
      {needsNewFace && (
        <p className="calibration-hint">Show a different face</p>
      )}
      {needsDeferredWarmFace && (
        <p className="calibration-hint">Scan white / yellow / green / blue faces first</p>
      )}
      {needsClearerCenter && !needsNewFace && !awaitingWhite && !needsDeferredWarmFace && (
        <p className="calibration-hint">Hold steady — reading colors</p>
      )}
    </div>
  );
}
