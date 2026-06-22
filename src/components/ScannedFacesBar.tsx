import type { FaceId, StickerColor } from '../types';
import { ALL_FACES } from '../lib/cube/colors';
import { FaceGridMini } from './FaceGridMini';

const FACE_CENTER_LABEL: Record<FaceId, string> = {
  U: 'W',
  D: 'Y',
  F: 'G',
  B: 'B',
  R: 'R',
  L: 'O',
};

interface ScannedFacesBarProps {
  visible: boolean;
  scannedFaces: Partial<Record<FaceId, StickerColor[]>>;
  displayMirror?: boolean;
  onFlipPreview?: () => void;
}

export function ScannedFacesBar({
  visible,
  scannedFaces,
  displayMirror,
  onFlipPreview,
}: ScannedFacesBarProps) {
  if (!visible) return null;

  const scannedCount = ALL_FACES.filter((id) => scannedFaces[id]).length;

  return (
    <div className="scanned-faces-bar" aria-live="polite">
      <div className="scanned-faces-bar-header">
        <p className="scanned-faces-bar-title">Scanned {scannedCount}/6</p>
        {onFlipPreview && (
          <button type="button" className="scanned-faces-flip" onClick={onFlipPreview}>
            Flip
          </button>
        )}
      </div>
      <div className="scanned-faces-bar-grid">
        {ALL_FACES.map((faceId) => (
          <FaceGridMini
            key={faceId}
            colors={scannedFaces[faceId] ?? null}
            label={FACE_CENTER_LABEL[faceId]}
            empty={!scannedFaces[faceId]}
            displayMirror={displayMirror}
          />
        ))}
      </div>
    </div>
  );
}
