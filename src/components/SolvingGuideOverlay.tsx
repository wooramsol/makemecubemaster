import type { Move, StickerColor } from '../types';
import { FaceColorGrid } from './FaceColorGrid';
import {
  buildFaceArcPaths,
  doubleMoveLabel,
} from '../lib/ui/staticFaceArrow';

const GUIDE_SIZE = 280;

interface SolvingGuideOverlayProps {
  visible: boolean;
  move: Move;
  faceColors: StickerColor[];
  wrongMove: Move | null;
  onSkip?: () => void;
}

export function SolvingGuideOverlay({
  visible,
  move,
  faceColors,
  wrongMove,
  onSkip,
}: SolvingGuideOverlayProps) {
  if (!visible) return null;

  const arc = buildFaceArcPaths(GUIDE_SIZE, move, 1, true);
  const doubleLabel = doubleMoveLabel(move);
  const wrong = Boolean(wrongMove);

  return (
    <div className="solving-guide-overlay" aria-hidden="true">
      {onSkip && (
        <button type="button" className="solving-skip" onClick={onSkip}>
          Skip
        </button>
      )}

      <div className={`solving-guide-card${wrong ? ' solving-guide-card--wrong' : ''}`}>
        <FaceColorGrid colors={faceColors} variant="solving" orientation="mirror" />
        <svg
          className="solving-guide-arrow"
          viewBox={`0 0 ${GUIDE_SIZE} ${GUIDE_SIZE}`}
          aria-hidden="true"
        >
          <g className="solving-guide-arrow-mirror">
            <path
              d={arc.track}
              className="solving-guide-track"
              fill="none"
              strokeWidth={10}
              strokeLinecap="round"
            />
            <path
              d={arc.active}
              className={`solving-guide-active${wrong ? ' solving-guide-active--wrong' : ''}`}
              fill="none"
              strokeWidth={14}
              strokeLinecap="round"
            />
            <polygon
              className={`solving-guide-head${wrong ? ' solving-guide-head--wrong' : ''}`}
              points="0,-12 20,0 0,12"
              transform={`translate(${arc.headX} ${arc.headY}) rotate(${(arc.headAngle * 180) / Math.PI})`}
            />
          </g>
          {doubleLabel && (
            <text
              x={GUIDE_SIZE / 2}
              y={GUIDE_SIZE / 2}
              className="solving-guide-double"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {doubleLabel}
            </text>
          )}
        </svg>
      </div>
    </div>
  );
}
