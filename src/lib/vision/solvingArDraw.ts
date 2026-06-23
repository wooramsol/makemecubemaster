import type { CubePose, FaceId, Move, StickerColor } from '../../types';
import { isDoubleMove, moveFace } from '../cube/moves';
import { drawFaceArrow, mapFramePointToScreen } from './faceArrow';
import { drawLiveFaceColors } from './liveArDraw';
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

function drawAlignedFace(
  ctx: CanvasRenderingContext2D,
  pose: CubePose,
  faceId: FaceId,
  colors: StickerColor[],
  moveFaceId: FaceId | null,
  frameWidth: number,
  frameHeight: number,
  viewportWidth: number,
  viewportHeight: number,
): void {
  const aligned = alignPoseToTrackedQuad(pose, frameWidth, frameHeight);
  const corners = projectFaceCorners(faceId, aligned, frameWidth, frameHeight);
  if (!corners || colors.length !== 9) return;

  drawLiveFaceColors(
    ctx,
    corners,
    colors,
    frameWidth,
    frameHeight,
    viewportWidth,
    viewportHeight,
  );

  if (faceId !== moveFaceId) return;

  const [tl, tr, br, bl] = mapQuad(corners, frameWidth, frameHeight, viewportWidth, viewportHeight);
  ctx.save();
  ctx.strokeStyle = 'rgba(255, 238, 68, 0.95)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(tl.x, tl.y);
  ctx.lineTo(tr.x, tr.y);
  ctx.lineTo(br.x, br.y);
  ctx.lineTo(bl.x, bl.y);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

export function drawSolvingAR(
  ctx: CanvasRenderingContext2D,
  pose: CubePose,
  move: Move | null,
  rotationProgress: number,
  visibleFaceColors: Partial<Record<FaceId, StickerColor[]>>,
  scannedFaceColors: Partial<Record<FaceId, StickerColor[]>>,
  moveFaceId: FaceId | null,
  frameWidth: number,
  frameHeight: number,
  viewportWidth: number,
  viewportHeight: number,
): void {
  if (!frameWidth || !frameHeight || !viewportWidth || !viewportHeight) return;

  const merged: Partial<Record<FaceId, StickerColor[]>> = { ...scannedFaceColors };
  for (const [id, colors] of Object.entries(visibleFaceColors) as [FaceId, StickerColor[]][]) {
    if (colors.length === 9) merged[id] = colors;
  }

  const trackedFace = pose.visibleFace;
  const frontColors = trackedFace ? merged[trackedFace] : null;

  if (frontColors?.length === 9) {
    drawLiveFaceColors(
      ctx,
      pose.corners,
      frontColors,
      frameWidth,
      frameHeight,
      viewportWidth,
      viewportHeight,
    );
  }

  const aligned = alignPoseToTrackedQuad(pose, frameWidth, frameHeight);
  for (const faceId of getVisibleFaces(aligned)) {
    if (faceId === trackedFace) continue;
    const colors = merged[faceId];
    if (!colors) continue;
    drawAlignedFace(
      ctx,
      pose,
      faceId,
      colors,
      moveFaceId,
      frameWidth,
      frameHeight,
      viewportWidth,
      viewportHeight,
    );
  }

  if (!move) return;

  const arrowCorners = pickArrowCorners(pose, moveFace(move), frameWidth, frameHeight);
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
