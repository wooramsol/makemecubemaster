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
}

function pathFromPoints(points: Point2[]): string {
  const [first, ...rest] = points;
  return `M ${first!.x.toFixed(1)} ${first!.y.toFixed(1)} ${rest.map((p) => `L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ')} Z`;
}

function arrowHead(tip: Point2, angle: number, size: number): string {
  const ux = Math.cos(angle);
  const uy = Math.sin(angle);
  const px = -uy;
  const py = ux;
  return `M ${tip.x.toFixed(1)} ${tip.y.toFixed(1)} L ${(tip.x - ux * size + px * size * 0.55).toFixed(1)} ${(tip.y - uy * size + py * size * 0.55).toFixed(1)} L ${(tip.x - ux * size - px * size * 0.55).toFixed(1)} ${(tip.y - uy * size - py * size * 0.55).toFixed(1)} Z`;
}

export function IsometricCubeGuide({ move, facelet }: IsometricCubeGuideProps) {
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

  return (
    <svg
      className="iso-cube-guide-svg"
      viewBox={`0 0 ${model.size} ${model.size}`}
      width={model.size}
      height={model.size}
      role="img"
      aria-label={`Turn ${guidance.turnLayer} layer ${guidance.direction.toLowerCase()}`}
    >
      {model.faceOutlines.map((face) => (
        <path
          key={`bg-${face.faceId}`}
          d={pathFromPoints(face.points)}
          className="iso-cube-guide-face-bg"
        />
      ))}

      {model.cells.map((cell) => {
        const color = stickerColorForCell(faceColors, cell.faceId, cell.index);
        return (
          <path
            key={`${cell.faceId}-${cell.index}`}
            d={pathFromPoints(cell.points)}
            className={cell.isTurning ? 'iso-cube-guide-cell iso-cube-guide-cell--turn' : 'iso-cube-guide-cell'}
            fill={color ? COLOR_HEX[color] : '#475569'}
          />
        );
      })}

      {model.faceOutlines.map((face) => (
        <g key={`outline-${face.faceId}`}>
          <path
            d={pathFromPoints(face.points)}
            className="iso-cube-guide-face-outline"
            fill="none"
          />
          <text x={face.label.x} y={face.label.y} className="iso-cube-guide-face-label">
            {face.faceId}
          </text>
        </g>
      ))}

      {model.arrow && (
        <g className="iso-cube-guide-arrow">
          <path d={model.arrow.path} className="iso-cube-guide-arrow-path" fill="none" />
          <path d={arrowHead(model.arrow.head, model.arrow.headAngle, 11)} className="iso-cube-guide-arrow-head" />
        </g>
      )}
    </svg>
  );
}
