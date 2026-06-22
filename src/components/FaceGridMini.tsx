import type { StickerColor } from '../types';
import { FaceColorGrid } from './FaceColorGrid';

interface FaceGridMiniProps {
  colors: StickerColor[] | null;
  label: string;
  empty?: boolean;
}

export function FaceGridMini({ colors, label, empty = false }: FaceGridMiniProps) {
  const hasColors = colors && colors.length === 9;

  return (
    <div className={`face-grid-mini ${empty ? 'face-grid-mini--empty' : ''}`}>
      {hasColors ? (
        <FaceColorGrid colors={colors} variant="mini" orientation="real" />
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
