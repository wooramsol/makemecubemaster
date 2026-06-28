import { useId, type ReactNode } from 'react';
import type { FaceId, StickerColor } from '../types';
import { COLOR_HEX } from '../lib/vision/colorReference';
import type { CornerCubeModel, IsoCell } from '../lib/cube/isometricGuide';
import { pathFromPoints, pointsToAttr } from '../lib/cube/isoCubeSvg';

const WHITE_FACE = '#f8fafc';
const FRAME_BLACK = '#0a0a0a';
const SVG_BG = '#111827';

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
  /** Solid fill under the 3×3 grid — prevents see-through gaps. */
  faceBaseFill?: string;
}

export function PerspectiveCubeSvg({
  model,
  cellStyle,
  className = 'iso-cube-guide-svg',
  ariaLabel,
  arrow,
  faceBaseFill = WHITE_FACE,
}: PerspectiveCubeSvgProps) {
  const uid = useId().replace(/:/g, '');

  return (
    <svg
      className={className}
      viewBox={`0 0 ${model.size} ${model.size}`}
      width={model.size}
      height={model.size}
      role="img"
      aria-label={ariaLabel}
      shapeRendering="geometricPrecision"
    >
      <defs>
        {model.faceGroups.map((group) => (
          <clipPath key={`clip-def-${group.faceId}`} id={`${uid}-clip-${group.faceId}`}>
            <polygon points={pointsToAttr(group.outline.points)} />
          </clipPath>
        ))}
      </defs>

      <rect x={0} y={0} width={model.size} height={model.size} fill={SVG_BG} />

      {model.faceGroups.map((group) => {
        const clipId = `${uid}-clip-${group.faceId}`;
        return (
          <g key={`face-${group.faceId}`} clipPath={`url(#${clipId})`}>
            <rect
              x={0}
              y={0}
              width={model.size}
              height={model.size}
              fill={faceBaseFill}
              style={{ fill: faceBaseFill, fillOpacity: 1 }}
            />
            {group.cells.map((cell) => {
              const style = cellStyle(group.faceId, cell.index, cell);
              return (
                <polygon
                  key={`${group.faceId}-${cell.index}`}
                  points={pointsToAttr(cell.points)}
                  className={style.className}
                  fill={style.fill}
                  style={{ fill: style.fill, fillOpacity: 1 }}
                  stroke={style.fill}
                  strokeWidth={0.5}
                  strokeLinejoin="miter"
                />
              );
            })}
          </g>
        );
      })}

      {model.faceGroups.map((group) => (
        <g key={`grid-${group.faceId}`} className="iso-cube-guide-grid" pointerEvents="none">
          {group.gridLines.map((line, index) => (
            <path
              key={`${group.faceId}-grid-${index}`}
              d={line}
              fill="none"
              stroke={FRAME_BLACK}
              strokeWidth={1.2}
              strokeLinecap="square"
            />
          ))}
        </g>
      ))}

      {model.faceGroups.map((group) => (
        <path
          key={`outline-${group.faceId}`}
          d={pathFromPoints(group.outline.points)}
          className="iso-cube-guide-face-outline"
          fill="none"
        />
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
