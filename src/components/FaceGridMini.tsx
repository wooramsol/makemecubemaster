import type { StickerColor } from '../types';
import { COLOR_HEX } from '../lib/vision/colorReference';
import { mirrorFaceCellsForSelfie } from '../lib/vision/selfieView';

interface FaceGridMiniProps {
  colors: StickerColor[] | null;
  label: string;
  empty?: boolean;
}

export function FaceGridMini({ colors, label, empty = false }: FaceGridMiniProps) {
  const hasColors = colors && colors.length === 9;
  const cells = hasColors ? mirrorFaceCellsForSelfie(colors) : [];

  return (
    <div className={`face-grid-mini ${empty ? 'face-grid-mini--empty' : ''}`}>
      <div className="face-grid-mini-cells">
        {hasColors
          ? cells.map((color, i) => (
              <span
                key={i}
                className="face-grid-mini-cell"
                style={{ background: COLOR_HEX[color] }}
              />
            ))
          : Array.from({ length: 9 }, (_, i) => (
              <span key={i} className="face-grid-mini-cell face-grid-mini-cell--placeholder" />
            ))}
      </div>
      <span className="face-grid-mini-label">{label}</span>
    </div>
  );
}
