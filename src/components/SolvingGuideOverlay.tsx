import type { Move, StickerColor } from '../types';
import { FaceColorGrid } from './FaceColorGrid';
import { buildOuterRotationArrows } from '../lib/ui/staticFaceArrow';

const GRID_SIZE = 260;
const ARROW_PAD = 52;
const VIEW_SIZE = GRID_SIZE + ARROW_PAD * 2;

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

  const arrows = buildOuterRotationArrows(GRID_SIZE, ARROW_PAD, move, true);
  const wrong = Boolean(wrongMove);

  return (
    <div className="solving-guide-overlay" aria-hidden="true">
      {onSkip && (
        <button type="button" className="solving-skip" onClick={onSkip}>
          Skip
        </button>
      )}

      <div className={`solving-guide-card${wrong ? ' solving-guide-card--wrong' : ''}`}>
        <div className="solving-guide-stage">
          <FaceColorGrid colors={faceColors} variant="solving" orientation="mirror" />
          <svg
            className="solving-guide-arrow"
            viewBox={`0 0 ${VIEW_SIZE} ${VIEW_SIZE}`}
            aria-hidden="true"
          >
            <g className="solving-guide-arrow-mirror">
              {arrows.arrows.map((arrow, i) => (
                <g key={i}>
                  <path
                    d={arrow.d}
                    className="solving-guide-outer-track"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d={arrow.d}
                    className={`solving-guide-outer-active${wrong ? ' solving-guide-outer-active--wrong' : ''}`}
                    fill="none"
                    strokeLinecap="round"
                  />
                  <polygon
                    className={`solving-guide-outer-head${wrong ? ' solving-guide-outer-head--wrong' : ''}`}
                    points="0,-16 28,0 0,16"
                    transform={`translate(${arrow.headX} ${arrow.headY}) rotate(${(arrow.headAngle * 180) / Math.PI})`}
                  />
                </g>
              ))}
            </g>
            {arrows.doubleLabel && (
              <text
                x={VIEW_SIZE / 2}
                y={VIEW_SIZE / 2}
                className="solving-guide-double"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {arrows.doubleLabel}
              </text>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}
