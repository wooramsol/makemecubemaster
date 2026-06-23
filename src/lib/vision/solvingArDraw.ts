import type { CubePose, FaceId, Move, StickerColor } from '../../types';
import { isDoubleMove } from '../cube/moves';
import { drawFaceArrow, mapFramePointToScreen } from './faceArrow';
import { COLOR_HEX } from './colorReference';
import { alignPoseToTrackedQuad, pickArrowCorners } from './poseAlign';
import { projectFaceCorners } from './projectFace';
import { getVisibleFaces } from './visibleFaces';

function mapQuad(
  corners: [import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D],
  frameWidth: number,
  frameHeight: number,
  viewportWidth: number,
  viewportHeight: number,
) {
  return corners.map((p) =>
    mapFramePointToScreen(p, frameWidth, frameHeight, viewportWidth, viewportHeight),
  ) as typeof corners;
}

function lerpPoint(
  a: import('../../types').Point2D,
  b: import('../../types').Point2D,
  t: number,
): import('../../types').Point2D {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

function bilinearOnQuad(
  tl: import('../../types').Point2D,
  tr: import('../../types').Point2D,
  br: import('../../types').Point2D,
  bl: import('../../types').Point2D,
  u: number,
  v: number,
): import('../../types').Point2D {
  const top = lerpPoint(tl, tr, u);
  const bottom = lerpPoint(bl, br, u);
  return lerpPoint(top, bottom, v);
}

function cellQuad(
  tl: import('../../types').Point2D,
  tr: import('../../types').Point2D,
  br: import('../../types').Point2D,
  bl: import('../../types').Point2D,
  row: number,
  col: number,
): [import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D] {
  const u0 = col / 3;
  const u1 = (col + 1) / 3;
  const v0 = row / 3;
  const v1 = (row + 1) / 3;
  return [
    bilinearOnQuad(tl, tr, br, bl, u0, v0),
    bilinearOnQuad(tl, tr, br, bl, u1, v0),
    bilinearOnQuad(tl, tr, br, bl, u1, v1),
    bilinearOnQuad(tl, tr, br, bl, u0, v1),
  ];
}

function fillQuad(
  ctx: CanvasRenderingContext2D,
  quad: [import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D],
  fill: string,
): void {
  const [a, b, c, d] = quad;
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.lineTo(c.x, c.y);
  ctx.lineTo(d.x, d.y);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
}

function strokeQuad(
  ctx: CanvasRenderingContext2D,
  quad: [import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D],
  stroke: string,
  width: number,
): void {
  const [a, b, c, d] = quad;
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.lineTo(c.x, c.y);
  ctx.lineTo(d.x, d.y);
  ctx.closePath();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = width;
  ctx.stroke();
}

/** Semi-transparent virtual face from solver state — locked to cube pose. */
function drawVirtualFace(
  ctx: CanvasRenderingContext2D,
  corners: [import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D],
  colors: StickerColor[],
  frameWidth: number,
  frameHeight: number,
  viewportWidth: number,
  viewportHeight: number,
  options: { highlight?: boolean; faceLabel?: FaceId } = {},
): void {
  if (colors.length !== 9) return;

  const [tl, tr, br, bl] = mapQuad(corners, frameWidth, frameHeight, viewportWidth, viewportHeight);
  const edge = Math.min(
    Math.hypot(tr.x - tl.x, tr.y - tl.y),
    Math.hypot(bl.x - tl.x, bl.y - tl.y),
  );
  const lineW = Math.max(1.5, edge * 0.02);
  const alpha = options.highlight ? 'bb' : '88';

  ctx.save();
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const quad = cellQuad(tl, tr, br, bl, row, col);
      const color = colors[row * 3 + col]!;
      fillQuad(ctx, quad, `${COLOR_HEX[color]}${alpha}`);
      strokeQuad(ctx, quad, 'rgba(0, 0, 0, 0.4)', lineW);
    }
  }

  const borderColor = options.highlight
    ? 'rgba(255, 238, 68, 0.95)'
    : 'rgba(255, 255, 255, 0.7)';
  const borderW = options.highlight ? Math.max(3, lineW * 2) : Math.max(2, lineW * 1.4);
  strokeQuad(ctx, [tl, tr, br, bl], borderColor, borderW);

  if (options.faceLabel) {
    const cx = (tl.x + tr.x + br.x + bl.x) / 4;
    const cy = (tl.y + tr.y + br.y + bl.y) / 4;
    ctx.font = `bold ${Math.max(12, edge * 0.14)}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
    ctx.fillText(options.faceLabel, cx + 1, cy + 1);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(options.faceLabel, cx, cy);
  }

  ctx.restore();
}

function faceCornersForDraw(
  pose: CubePose,
  faceId: FaceId,
  aligned: CubePose,
  frameWidth: number,
  frameHeight: number,
): [import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D] | null {
  if (faceId === pose.visibleFace) return pose.corners;
  return projectFaceCorners(faceId, aligned, frameWidth, frameHeight);
}

/** AR guide: virtual 3-face colors from solver + live rotation arrow on move face. */
export function drawSolvingAR(
  ctx: CanvasRenderingContext2D,
  pose: CubePose,
  move: Move | null,
  rotationProgress: number,
  virtualFaceColors: Partial<Record<FaceId, StickerColor[]>>,
  moveFaceId: FaceId | null,
  frameWidth: number,
  frameHeight: number,
  viewportWidth: number,
  viewportHeight: number,
): void {
  if (!frameWidth || !frameHeight || !viewportWidth || !viewportHeight) return;

  const aligned = alignPoseToTrackedQuad(pose, frameWidth, frameHeight);
  const visible = getVisibleFaces(aligned);

  for (const faceId of visible) {
    const colors = virtualFaceColors[faceId];
    if (!colors || colors.length !== 9) continue;
    const corners = faceCornersForDraw(pose, faceId, aligned, frameWidth, frameHeight);
    if (!corners) continue;
    drawVirtualFace(
      ctx,
      corners,
      colors,
      frameWidth,
      frameHeight,
      viewportWidth,
      viewportHeight,
      {
        highlight: faceId === moveFaceId,
        faceLabel: faceId,
      },
    );
  }

  if (!move || !moveFaceId) return;

  const arrowCorners = pickArrowCorners(pose, moveFaceId, frameWidth, frameHeight);
  drawFaceArrow(
    ctx,
    arrowCorners,
    move,
    Math.max(0.08, rotationProgress),
    frameWidth,
    frameHeight,
    viewportWidth,
    viewportHeight,
  );

  if (isDoubleMove(move)) {
    const [tl, tr, br, bl] = mapQuad(
      arrowCorners,
      frameWidth,
      frameHeight,
      viewportWidth,
      viewportHeight,
    );
    const cx = (tl.x + tr.x + br.x + bl.x) / 4;
    const cy = (tl.y + tr.y + br.y + bl.y) / 4;
    const edge = Math.min(
      Math.hypot(tr.x - tl.x, tr.y - tl.y),
      Math.hypot(bl.x - tl.x, bl.y - tl.y),
    );
    ctx.save();
    ctx.fillStyle = '#ffee44';
    ctx.font = `bold ${Math.max(20, edge * 0.2)}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('180°', cx, cy);
    ctx.restore();
  }
}
