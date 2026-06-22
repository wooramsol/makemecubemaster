import type { StickerColor } from '../types';
import { COLOR_HEX } from '../lib/vision/colorReference';
import { mirrorFaceCellsHorizontally } from '../lib/vision/selfieView';

export type FaceGridOrientation = 'mirror' | 'real';

interface FaceColorGridProps {
  colors: StickerColor[];
  cellClassName?: string;
  variant?: 'mini' | 'overlay';
  /** mirror = selfie preview; real = physical world (stored sensor order). */
  orientation?: FaceGridOrientation;
}

export function FaceColorGrid({
  colors,
  cellClassName,
  variant = 'overlay',
  orientation = 'real',
}: FaceColorGridProps) {
  const resolvedCellClass =
    cellClassName ?? (variant === 'mini' ? 'face-grid-mini-cell' : 'cell-grid-item');
  const displayColors =
    orientation === 'mirror' ? mirrorFaceCellsHorizontally(colors) : colors;

  return (
    <div className={`face-color-grid face-color-grid--${variant}`}>
      {displayColors.map((color, i) => (
        <span
          key={i}
          className={resolvedCellClass}
          style={{ background: COLOR_HEX[color] }}
        />
      ))}
    </div>
  );
}
