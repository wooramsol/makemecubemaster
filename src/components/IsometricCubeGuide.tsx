import { useMemo } from 'react';
import type { FaceId, Move, StickerColor } from '../types';
import { COLOR_HEX } from '../lib/vision/colorReference';
import { getFaceletFaceColors } from '../lib/cube/moveColorProgress';
import { getMoveGuidanceView } from '../lib/cube/moveGuidanceView';
import {
  buildIsoCubeGuideModel,
  stickerColorForCell,
  type Point2,
} from '../lib/cube/isometricGuide';
import { mirrorFaceCellsHorizontally } from '../lib/vision/selfieView';

interface IsometricCubeGuideProps {
  move: Move;
  facelet: string;
  rotationProgress?: number;
}

function pointsToPath(points: Point2[]): string {
  if (points.length === 0) return '';
  const [first, ...rest] = points;
  return `M ${first!.x.toFixed(2)} ${first!.y.toFixed(2)} ${rest.map((p) => `L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' ')} Z`;
}

function arrowHeadPath(tip: Point2, angle: number, size: number): string {
  const ux = Math.cos(angle);
  const uy = Math.sin(angle);
  const px = -uy;
  const py = ux;
  const wing = size;
  return `M ${tip.x.toFixed(2)} ${tip.y.toFixed(2)} L ${(tip.x - ux * wing + px * wing * 0.55).toFixed(2)} ${(tip.y - uy * wing + py * wing * 0.55).toFixed(2)} L ${(tip.x - ux * wing - px * wing * 0.55).toFixed(2)} ${(tip.y - uy * wing - py * wing * 0.55).toFixed(2)} Z`;
}

export function IsometricCubeGuide({ move, facelet, rotationProgress = 0.2 }: IsometricCubeGuideProps) {
  const guidance = useMemo(() => getMoveGuidanceView(move), [move]);
  const model = useMemo(
    () => buildIsoCubeGuideModel(move, guidance.holdFace),
    [move, guidance.holdFace],
  );

  const faceColors = useMemo(() => {
    const result: Partial<Record<FaceId, StickerColor[]>> = {};
    for (const faceId of model.visibleFaces) {
      const colors = getFaceletFaceColors(facelet, faceId);
      if (colors.length === 9) {
        result[faceId] = mirrorFaceCellsHorizontally(colors);
      }
    }
    return result;
  }, [facelet, model.visibleFaces]);

  const progress = Math.max(0.12, Math.min(1, rotationProgress));

  return (
    <div className="iso-cube-guide" aria-hidden>
      <svg
        className="iso-cube-guide-svg"
        viewBox={`0 0 ${model.size} ${model.size}`}
        width={model.size}
        height={model.size}
      >
        <defs>
          <filter id="iso-turn-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="#ffeb3b" floodOpacity="0.9" />
          </filter>
        </defs>

        {model.edges.map(([a, b], i) => (
          <line
            key={`edge-${i}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            className="iso-cube-guide-edge"
          />
        ))}

        {model.cells.map((cell) => {
          const color = stickerColorForCell(faceColors, cell.faceId, cell.index);
          return (
            <g key={`${cell.faceId}-${cell.index}`}>
              <path
                d={pointsToPath(cell.points)}
                className={cell.isTurning ? 'iso-cube-guide-cell iso-cube-guide-cell--turn' : 'iso-cube-guide-cell'}
                fill={color ? COLOR_HEX[color] : '#334155'}
                filter={cell.isTurning ? 'url(#iso-turn-glow)' : undefined}
              />
              {cell.isTurning && (
                <path
                  d={pointsToPath(cell.points)}
                  className="iso-cube-guide-cell-ring"
                  fill="none"
                />
              )}
            </g>
          );
        })}

        {model.arrow && (
          <g className="iso-cube-guide-arrow">
            <path d={model.arrow.path} className="iso-cube-guide-arrow-track" fill="none" />
            <path
              d={model.arrow.path}
              className="iso-cube-guide-arrow-progress"
              fill="none"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1 - progress}
            />
            <path d={arrowHeadPath(model.arrow.head, model.arrow.headAngle, 9)} className="iso-cube-guide-arrow-head" />
            {model.arrow.label && (
              <text
                x={model.arrow.head.x}
                y={model.arrow.head.y - 14}
                className="iso-cube-guide-arrow-label"
                textAnchor="middle"
              >
                {model.arrow.label}
              </text>
            )}
          </g>
        )}

        <text x={8} y={14} className="iso-cube-guide-legend">
          Turn {guidance.turnLayer}
        </text>
      </svg>
      <p className="iso-cube-guide-caption">
        Yellow = {guidance.turnLayerName} layer · {guidance.direction}
      </p>
    </div>
  );
}
