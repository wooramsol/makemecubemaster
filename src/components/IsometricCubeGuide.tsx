import { useMemo } from 'react';
import type { FaceId, Move, StickerColor } from '../types';
import { COLOR_HEX } from '../lib/vision/colorReference';
import { getFaceletFaceColors } from '../lib/cube/moveColorProgress';
import { getMoveGuidanceView } from '../lib/cube/moveGuidanceView';
import { getSelfieHoldPose } from '../lib/cube/selfieHoldPose';
import {
  buildIsoCubeGuideModel,
  stickerColorForCell,
} from '../lib/cube/isometricGuide';
import { arrowHead, pathFromPoints } from '../lib/cube/isoCubeSvg';
import { mirrorFaceCellsHorizontally } from '../lib/vision/selfieView';

interface IsometricCubeGuideProps {
  move: Move;
  facelet: string;
}

export function IsometricCubeGuide({ move, facelet }: IsometricCubeGuideProps) {
  const guidance = useMemo(() => getMoveGuidanceView(move), [move]);
  const holdPose = useMemo(() => getSelfieHoldPose(move), [move]);
  const model = useMemo(
    () => buildIsoCubeGuideModel(move, holdPose.holdFace, 200, true),
    [move, holdPose.holdFace],
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
            className={
              cell.isTurning
                ? 'iso-cube-guide-cell iso-cube-guide-cell--turn'
                : 'iso-cube-guide-cell'
            }
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
        </g>
      ))}

      {model.arrow && (
        <g className="iso-cube-guide-arrow">
          <path d={model.arrow.path} className="iso-cube-guide-arrow-path" fill="none" />
          <path
            d={arrowHead(model.arrow.head, model.arrow.headAngle, 11)}
            className="iso-cube-guide-arrow-head"
          />
        </g>
      )}
    </svg>
  );
}
