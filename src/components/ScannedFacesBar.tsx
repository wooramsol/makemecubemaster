import type { FaceId, ReadColor } from '../types';
import { ALL_FACES } from '../lib/cube/colors';
import { FaceGridMini } from './FaceGridMini';

export const FACE_CENTER_LABEL: Record<FaceId, string> = {
  U: 'W',
  D: 'Y',
  F: 'G',
  B: 'B',
  R: 'R',
  L: 'O',
};

interface ScannedFacesBarProps {
  visible: boolean;
  scannedFaces: Partial<Record<FaceId, ReadColor[]>>;
  onRescanFace?: (faceId: FaceId) => void;
  rescanTargetFace?: FaceId | null;
  interactive?: boolean;
}

export function ScannedFacesBar({
  visible,
  scannedFaces,
  onRescanFace,
  rescanTargetFace = null,
  interactive = false,
}: ScannedFacesBarProps) {
  if (!visible) return null;

  const scannedCount = ALL_FACES.filter((id) => scannedFaces[id]).length;

  return (
    <div
      className={`scanned-faces-bar${interactive ? ' scanned-faces-bar--interactive' : ''}`}
      aria-live="polite"
    >
      <p className="scanned-faces-bar-title">Scanned {scannedCount}/6</p>
      {interactive && scannedCount > 0 && (
        <p className="scanned-faces-bar-hint">Tap a face to re-scan</p>
      )}
      <div className="scanned-faces-bar-grid">
        {ALL_FACES.map((faceId) => (
          <FaceGridMini
            key={faceId}
            faceId={faceId}
            colors={scannedFaces[faceId] ?? null}
            label={FACE_CENTER_LABEL[faceId]}
            empty={!scannedFaces[faceId]}
            onClick={onRescanFace}
            selected={rescanTargetFace === faceId}
            clickable={interactive}
          />
        ))}
      </div>
    </div>
  );
}
