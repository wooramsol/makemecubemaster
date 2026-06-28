import type { ReactNode } from 'react';
import type { FaceId, StickerColor } from '../types';
import { COLOR_HEX } from '../lib/vision/colorReference';
import type { CornerCubeModel, IsoCell } from '../lib/cube/isometricGuide';
import { pathFromPoints } from '../lib/cube/isoCubeSvg';

const WHITE_FACE = '#f8fafc';
const FRAME_BLACK = '#0a0a0a';

export interface PerspectiveCellStyle {
  fill: string;
  className: string;
}

export type CellStyleFn = (faceId: FaceId, index: number, cell: IsoCell) => PerspectiveCellStyle;

interface PerspectiveCubeSvgProps {
  model: CornerCubeModel;
  cellStyle: CellStyleFn;
  className?: string;
  ariaLabel?: string;
  arrow?: ReactNode;
}

export function PerspectiveCubeSvg({
  model,
  cellStyle,
  className = 'iso-cube-guide-svg',
  ariaLabel,
  arrow,
}: PerspectiveCubeSvgProps) {
  return (
    <svg
      className={className}
      viewBox={`0 0 ${model.size} ${model.size}`}
      width={model.size}
      height={model.size}
      role="img"
      aria-label={ariaLabel}
    >
      {model.faceGroups.map((group) => (
        <g key={`face-${group.faceId}`}>
          <path
            d={pathFromPoints(group.outline.points)}
            className="iso-cube-guide-face-bg"
          />
          {group.cells.map((cell) => {
            const style = cellStyle(group.faceId, cell.index, cell);
            return (
              <path
                key={`${group.faceId}-${cell.index}`}
                d={pathFromPoints(cell.points)}
                className={style.className}
                fill={style.fill}
                stroke={FRAME_BLACK}
                strokeWidth={1.4}
                strokeLinejoin="miter"
              />
            );
          })}
          <path
            d={pathFromPoints(group.outline.points)}
            className="iso-cube-guide-face-outline"
            fill="none"
          />
        </g>
      ))}
      {arrow}
    </svg>
  );
}

export function scanCellStyle(
  faceId: FaceId,
  index: number,
  scanned: Partial<Record<FaceId, StickerColor[]>>,
  previewFace: FaceId | null,
  previewColors: StickerColor[] | null,
): PerspectiveCellStyle {
  const saved = scanned[faceId];
  if (saved && saved.length === 9) {
    return {
      fill: COLOR_HEX[saved[index]!] ?? WHITE_FACE,
      className: 'iso-cube-guide-cell iso-cube-guide-cell--scanned',
    };
  }
  if (previewFace === faceId && previewColors && previewColors.length === 9) {
    return {
      fill: COLOR_HEX[previewColors[index]!] ?? WHITE_FACE,
      className: 'iso-cube-guide-cell iso-cube-guide-cell--preview',
    };
  }
  return {
    fill: WHITE_FACE,
    className: 'iso-cube-guide-cell iso-cube-guide-cell--empty',
  };
}

export function solveCellStyle(
  faceId: FaceId,
  index: number,
  cell: IsoCell,
  faceColors: Partial<Record<FaceId, StickerColor[]>>,
): PerspectiveCellStyle {
  const colors = faceColors[faceId];
  const color = colors?.[index];
  return {
    fill: color ? COLOR_HEX[color] : '#475569',
    className: cell.isTurning
      ? 'iso-cube-guide-cell iso-cube-guide-cell--turn'
      : 'iso-cube-guide-cell',
  };
}
