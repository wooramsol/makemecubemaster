import type { CubePose, FaceId, Move } from '../../types';
import { drawCubeRotationArrow, mapFramePointToScreen } from './faceArrow';
import { pickArrowCorners } from './poseAlign';

function strokeFaceOutline(
  ctx: CanvasRenderingContext2D,
  corners: [import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D, import('../../types').Point2D],
  frameWidth: number,
  frameHeight: number,
  viewportWidth: number,
  viewportHeight: number,
): void {
  const [tl, tr, br, bl] = corners.map((p) =>
    mapFramePointToScreen(p, frameWidth, frameHeight, viewportWidth, viewportHeight),
  ) as typeof corners;

  const edge = Math.min(
    Math.hypot(tr.x - tl.x, tr.y - tl.y),
    Math.hypot(bl.x - tl.x, bl.y - tl.y),
  );

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(tl.x, tl.y);
  ctx.lineTo(tr.x, tr.y);
  ctx.lineTo(br.x, br.y);
  ctx.lineTo(bl.x, bl.y);
  ctx.closePath();
  ctx.strokeStyle = 'rgba(255, 45, 45, 0.85)';
  ctx.lineWidth = Math.max(3, edge * 0.04);
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 6;
  ctx.stroke();
  ctx.restore();
}

/** AR guide: tracked red rotation arrow on the move face. */
export function drawSolvingAR(
  ctx: CanvasRenderingContext2D,
  pose: CubePose,
  move: Move | null,
  rotationProgress: number,
  moveFaceId: FaceId | null,
  frameWidth: number,
  frameHeight: number,
  viewportWidth: number,
  viewportHeight: number,
): void {
  if (!frameWidth || !frameHeight || !viewportWidth || !viewportHeight) return;
  if (!move || !moveFaceId) return;

  const arrowCorners = pickArrowCorners(pose, moveFaceId, frameWidth, frameHeight);
  strokeFaceOutline(
    ctx,
    arrowCorners,
    frameWidth,
    frameHeight,
    viewportWidth,
    viewportHeight,
  );

  drawCubeRotationArrow(
    ctx,
    arrowCorners,
    move,
    Math.max(0.05, rotationProgress),
    frameWidth,
    frameHeight,
    viewportWidth,
    viewportHeight,
  );
}
