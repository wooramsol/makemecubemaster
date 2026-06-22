import type { StickerColor } from '../types';
import { COLOR_HEX } from '../lib/vision/colorReference';

interface FaceColorGridProps {
  colors: StickerColor[];
  cellClassName?: string;
  variant?: 'mini' | 'overlay';
}

/**
 * Selfie preview uses CSS scaleX(-1) on the video. Stored colors are raw sensor
 * order; this grid mirrors visually so it matches what the user saw while scanning.
 */
export function FaceColorGrid({
  colors,
  cellClassName,
  variant = 'overlay',
}: FaceColorGridProps) {
  const resolvedCellClass =
    cellClassName ?? (variant === 'mini' ? 'face-grid-mini-cell' : 'cell-grid-item');

  return (
    <div className={`face-color-grid face-color-grid--${variant}`}>
      {colors.map((color, i) => (
        <span
          key={i}
          className={resolvedCellClass}
          style={{ background: COLOR_HEX[color] }}
        />
      ))}
    </div>
  );
}
