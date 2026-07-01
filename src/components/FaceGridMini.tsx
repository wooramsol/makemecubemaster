import type { FaceId, ReadColor } from '../types';
import { FaceColorGrid } from './FaceColorGrid';

interface FaceGridMiniProps {
  faceId: FaceId;
  colors: ReadColor[] | null;
  label: string;
  empty?: boolean;
  onClick?: (faceId: FaceId) => void;
  selected?: boolean;
  clickable?: boolean;
}

export function FaceGridMini({
  faceId,
  colors,
  label,
  empty = false,
  onClick,
  selected = false,
  clickable = false,
}: FaceGridMiniProps) {
  const hasColors = colors && colors.length === 9;
  const isInteractive = clickable && hasColors && Boolean(onClick);

  const className = [
    'face-grid-mini',
    empty ? 'face-grid-mini--empty' : '',
    isInteractive ? 'face-grid-mini--clickable' : '',
    selected ? 'face-grid-mini--selected' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
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
    </>
  );

  if (isInteractive) {
    return (
      <button
        type="button"
        className={className}
        data-face={faceId}
        onClick={() => onClick?.(faceId)}
        aria-label={`Re-scan ${label} face`}
        aria-pressed={selected}
      >
        {content}
      </button>
    );
  }

  return (
    <div className={className} data-face={faceId}>
      {content}
    </div>
  );
}
