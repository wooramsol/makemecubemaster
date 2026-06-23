import type { Move, StickerColor } from '../types';
import { FaceColorGrid } from './FaceColorGrid';
import {
  buildRotationGuide,
  rotationSymbolLabel,
} from '../lib/ui/staticFaceArrow';

const GRID_SIZE = 200;
const GRID_PAD = 36;
const VIEW_SIZE = GRID_SIZE + GRID_PAD * 2;

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

  const guide = buildRotationGuide(VIEW_SIZE, GRID_PAD, GRID_SIZE, move, true);
  const wrong = Boolean(wrongMove);
  const symbol = rotationSymbolLabel(guide.symbol);

  return (
    <div className="solving-guide-overlay" aria-hidden="true">
      {onSkip && (
        <button type="button" className="solving-skip" onClick={onSkip}>
          Skip
        </button>
      )}

      <div className={`solving-guide-card${wrong ? ' solving-guide-card--wrong' : ''}`}>
        <p className="solving-guide-dir-label">
          {guide.symbol === 'double' ? '180° turn' : guide.symbol === 'cw' ? 'Clockwise' : 'Counter-clockwise'}
        </p>
        <div className="solving-guide-stage">
          <FaceColorGrid colors={faceColors} variant="solving" orientation="mirror" />
          <svg
            className="solving-guide-arrow"
            viewBox={`0 0 ${VIEW_SIZE} ${VIEW_SIZE}`}
            aria-hidden="true"
          >
            <g className="solving-guide-arrow-mirror">
              <path
                d={guide.trackPath}
                className="solving-guide-outer-track"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d={guide.trackPath}
                className={`solving-guide-outer-active${wrong ? ' solving-guide-outer-active--wrong' : ''}`}
                fill="none"
                strokeLinecap="round"
              />
              <polygon
                className={`solving-guide-outer-head${wrong ? ' solving-guide-outer-head--wrong' : ''}`}
                points="0,-14 24,0 0,14"
                transform={`translate(${guide.headX} ${guide.headY}) rotate(${(guide.headAngle * 180) / Math.PI})`}
              />
            </g>
            <text
              x={VIEW_SIZE / 2}
              y={VIEW_SIZE / 2 + 6}
              className="solving-guide-symbol"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {symbol}
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}
