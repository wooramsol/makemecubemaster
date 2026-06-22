import type { StickerColor } from '../types';
import { FaceColorGrid } from './FaceColorGrid';

interface FaceGridMiniProps {
  colors: StickerColor[] | null;
  label: string;
  empty?: boolean;
  displayMirror?: boolean;
}

export function FaceGridMini({ colors, label, empty = false, displayMirror }: FaceGridMiniProps) {
  const hasColors = colors && colors.length === 9;

  return (
    <div className={`face-grid-mini ${empty ? 'face-grid-mini--empty' : ''}`}>
      {hasColors ? (
        <FaceColorGrid colors={colors} variant="mini" displayMirror={displayMirror} />
      ) : (
        <div className="face-color-grid face-color-grid--mini face-color-grid--placeholder">
          {Array.from({ length: 9 }, (_, i) => (
            <span key={i} className="face-grid-mini-cell face-grid-mini-cell--placeholder" />
          ))}
        </div>
      )}
      <span className="face-grid-mini-label">{label}</span>
    </div>
  );
}
