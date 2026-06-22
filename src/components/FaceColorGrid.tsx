import type { StickerColor } from '../types';
import { COLOR_HEX } from '../lib/vision/colorReference';
import { isSelfieDisplayMirrored, mirrorFaceCellsHorizontally } from '../lib/vision/selfieView';

interface FaceColorGridProps {
  colors: StickerColor[];
  cellClassName?: string;
  variant?: 'mini' | 'overlay';
  displayMirror?: boolean;
}

/**
 * Pipeline stores raw camera-order colors. Mirror at render when enabled so
 * live overlay and scanned result bar stay in sync.
 */
export function FaceColorGrid({
  colors,
  cellClassName,
  variant = 'overlay',
  displayMirror = isSelfieDisplayMirrored(),
}: FaceColorGridProps) {
  const resolvedCellClass =
    cellClassName ?? (variant === 'mini' ? 'face-grid-mini-cell' : 'cell-grid-item');
  const displayColors = displayMirror ? mirrorFaceCellsHorizontally(colors) : colors;

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
