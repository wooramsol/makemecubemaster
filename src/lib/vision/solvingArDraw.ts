import type { CubePose, FaceId, Move, Point2D, StickerColor } from '../../types';
import { CUBE_EDGES, CUBE_VERTICES } from './faceModels';
import {
  FACE_NORMALS,
  getMoveAxis,
  isDoubleMove,
  isPrimeMove,
  moveAngle,
  moveFace,
} from '../cube/moves';
import { COLOR_HEX } from './colorReference';
import { mapFramePointToScreen } from './faceArrow';
import { projectCubePoint, projectFaceCorners } from './projectFace';
import { getVisibleFaces } from './visibleFaces';

function mapToScreen(
  point: Point2D,
  frameWidth: number,
  frameHeight: number,
  viewportWidth: number,
  viewportHeight: number,
): Point2D {
  return mapFramePointToScreen(
    point,
    frameWidth,
    frameHeight,
    viewportWidth,
    viewportHeight,
  );
}

function mapQuadToScreen(
  corners: [Point2D, Point2D, Point2D, Point2D],
  frameWidth: number,
  frameHeight: number,
  viewportWidth: number,
  viewportHeight: number,
): [Point2D, Point2D, Point2D, Point2D] {
  return corners.map((p) =>
    mapToScreen(p, frameWidth, frameHeight, viewportWidth, viewportHeight),
  ) as [Point2D, Point2D, Point2D, Point2D];
}

function lerpPoint(a: Point2D, b: Point2D, t: number): Point2D {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

function bilinearOnQuad(
  tl: Point2D,
  tr: Point2D,
  br: Point2D,
  bl: Point2D,
  u: number,
  v: number,
): Point2D {
  const top = lerpPoint(tl, tr, u);
  const bottom = lerpPoint(bl, br, u);
  return lerpPoint(top, bottom, v);
}

function strokeLine(
  ctx: CanvasRenderingContext2D,
  a: Point2D,
  b: Point2D,
  color: string,
  width: number,
): void {
  ctx.beginPath();
  ctx.moveTo(a.x, a.y);
  ctx.lineTo(b.x, b.y);
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.stroke();
}

function drawProjectedWireframe(
  ctx: CanvasRenderingContext2D,
  pose: CubePose,
  frameWidth: number,
  frameHeight: number,
  viewportWidth: number,
  viewportHeight: number,
): void {
  const projected = CUBE_VERTICES.map((v) =>
    projectCubePoint(v, pose, frameWidth, frameHeight),
  );

  ctx.save();
  ctx.lineCap = 'round';
  for (const [a, b] of CUBE_EDGES) {
    const p0 = projected[a];
    const p1 = projected[b];
    if (!p0 || !p1) continue;
    const s0 = mapToScreen(p0, frameWidth, frameHeight, viewportWidth, viewportHeight);
    const s1 = mapToScreen(p1, frameWidth, frameHeight, viewportWidth, viewportHeight);
    strokeLine(ctx, s0, s1, 'rgba(255, 255, 255, 0.92)', 2.5);
  }
  ctx.restore();
}

function drawFaceGrid(
  ctx: CanvasRenderingContext2D,
  corners: [Point2D, Point2D, Point2D, Point2D],
  colors: StickerColor[],
  frameWidth: number,
  frameHeight: number,
  viewportWidth: number,
  viewportHeight: number,
  highlight = false,
): void {
  const [tl, tr, br, bl] = mapQuadToScreen(
    corners,
    frameWidth,
    frameHeight,
    viewportWidth,
    viewportHeight,
  );
  const edge = Math.min(
    Math.hypot(tr.x - tl.x, tr.y - tl.y),
    Math.hypot(bl.x - tl.x, bl.y - tl.y),
  );
  const lineW = Math.max(1.5, edge * 0.016);

  ctx.save();
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const u0 = col / 3;
      const u1 = (col + 1) / 3;
      const v0 = row / 3;
      const v1 = (row + 1) / 3;
      const a = bilinearOnQuad(tl, tr, br, bl, u0, v0);
      const b = bilinearOnQuad(tl, tr, br, bl, u1, v0);
      const c = bilinearOnQuad(tl, tr, br, bl, u1, v1);
      const d = bilinearOnQuad(tl, tr, br, bl, u0, v1);
      const color = colors[row * 3 + col] ?? 'W';
      const alpha = highlight ? 'bb' : '88';
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.lineTo(c.x, c.y);
      ctx.lineTo(d.x, d.y);
      ctx.closePath();
      ctx.fillStyle = `${COLOR_HEX[color]}${alpha}`;
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.lineWidth = lineW;
      ctx.stroke();
    }
  }
  ctx.strokeStyle = highlight ? 'rgba(255, 238, 68, 0.95)' : 'rgba(255, 255, 255, 0.75)';
  ctx.lineWidth = highlight ? Math.max(3, lineW * 2) : Math.max(2, lineW * 1.3);
  ctx.beginPath();
  ctx.moveTo(tl.x, tl.y);
  ctx.lineTo(tr.x, tr.y);
  ctx.lineTo(br.x, br.y);
  ctx.lineTo(bl.x, bl.y);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function arcBasis3D(axis: [number, number, number]): {
  ref: [number, number, number];
  perp: [number, number, number];
} {
  let ref: [number, number, number] = [0, 1, 0];
  const dot = Math.abs(axis[0] * ref[0] + axis[1] * ref[1] + axis[2] * ref[2]);
  if (dot > 0.9) ref = [0, 0, 1];
  const perp: [number, number, number] = [
    axis[1] * ref[2] - axis[2] * ref[1],
    axis[2] * ref[0] - axis[0] * ref[2],
    axis[0] * ref[1] - axis[1] * ref[0],
  ];
  const pLen = Math.hypot(perp[0], perp[1], perp[2]) || 1;
  perp[0] /= pLen;
  perp[1] /= pLen;
  perp[2] /= pLen;
  ref = [
    perp[1] * axis[2] - perp[2] * axis[1],
    perp[2] * axis[0] - perp[0] * axis[2],
    perp[0] * axis[1] - perp[1] * axis[0],
  ];
  const rLen = Math.hypot(ref[0], ref[1], ref[2]) || 1;
  return {
    ref: [ref[0] / rLen, ref[1] / rLen, ref[2] / rLen],
    perp: [perp[0], perp[1], perp[2]],
  };
}

function arcPoint3D(
  surface: [number, number, number],
  ref: [number, number, number],
  perp: [number, number, number],
  radius: number,
  angle: number,
): [number, number, number] {
  return [
    surface[0] + radius * (Math.cos(angle) * ref[0] + Math.sin(angle) * perp[0]),
    surface[1] + radius * (Math.cos(angle) * ref[1] + Math.sin(angle) * perp[1]),
    surface[2] + radius * (Math.cos(angle) * ref[2] + Math.sin(angle) * perp[2]),
  ];
}

function buildMoveArc3D(move: Move, segments = 36): [number, number, number][] {
  const face = moveFace(move);
  const axis = getMoveAxis(move);
  const { ref, perp } = arcBasis3D(axis);
  const normal = FACE_NORMALS[face];
  const surface: [number, number, number] = [
    normal[0] * 0.54,
    normal[1] * 0.54,
    normal[2] * 0.54,
  ];
  const radius = 0.36;
  const target = moveAngle(move);
  const start = target < 0 ? target : 0;
  const end = target < 0 ? 0 : target;
  const points: [number, number, number][] = [];
  for (let i = 0; i <= segments; i++) {
    const t = start + ((end - start) * i) / segments;
    points.push(arcPoint3D(surface, ref, perp, radius, t));
  }
  return points;
}

function drawProjectedArc(
  ctx: CanvasRenderingContext2D,
  points3d: [number, number, number][],
  pose: CubePose,
  progress: number,
  frameWidth: number,
  frameHeight: number,
  viewportWidth: number,
  viewportHeight: number,
  dimmed: boolean,
): void {
  const projected: Point2D[] = [];
  for (const p of points3d) {
    const pt = projectCubePoint(p, pose, frameWidth, frameHeight);
    if (!pt) return;
    projected.push(mapToScreen(pt, frameWidth, frameHeight, viewportWidth, viewportHeight));
  }
  if (projected.length < 2) return;

  const endIdx = Math.max(1, Math.floor((projected.length - 1) * Math.max(0.05, progress)));
  const active = projected.slice(0, endIdx + 1);

  const edge = Math.hypot(
    projected[1]!.x - projected[0]!.x,
    projected[1]!.y - projected[0]!.y,
  );
  const trackW = Math.max(4, edge * 0.35);
  const activeW = Math.max(6, edge * 0.5);

  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 8;
  ctx.strokeStyle = dimmed ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.55)';
  ctx.lineWidth = trackW;
  ctx.beginPath();
  projected.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
  ctx.stroke();

  ctx.shadowBlur = 10;
  ctx.strokeStyle = dimmed ? 'rgba(255, 200, 60, 0.85)' : '#ffee44';
  ctx.lineWidth = activeW;
  ctx.beginPath();
  active.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
  ctx.stroke();

  const tip = active[active.length - 1]!;
  const prev = active[active.length - 2] ?? tip;
  const dx = tip.x - prev.x;
  const dy = tip.y - prev.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const wing = activeW * 1.1;
  ctx.fillStyle = dimmed ? 'rgba(255, 200, 60, 0.9)' : '#ffee44';
  ctx.beginPath();
  ctx.moveTo(tip.x, tip.y);
  ctx.lineTo(tip.x - ux * wing + -uy * wing * 0.55, tip.y - uy * wing + ux * wing * 0.55);
  ctx.lineTo(tip.x - ux * wing - -uy * wing * 0.55, tip.y - uy * wing - ux * wing * 0.55);
  ctx.closePath();
  ctx.fill();
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

  const visible = getVisibleFaces(pose);
  const merged: Partial<Record<FaceId, StickerColor[]>> = { ...scannedFaceColors };
  for (const [id, colors] of Object.entries(visibleFaceColors) as [FaceId, StickerColor[]][]) {
    if (colors.length === 9) merged[id] = colors;
  }

  for (const faceId of visible) {
    const corners = projectFaceCorners(faceId, pose, frameWidth, frameHeight);
    const colors = merged[faceId];
    if (!corners || !colors || colors.length !== 9) continue;
    drawFaceGrid(
      ctx,
      corners,
      colors,
      frameWidth,
      frameHeight,
      viewportWidth,
      viewportHeight,
      faceId === moveFaceId,
    );
  }

  drawProjectedWireframe(ctx, pose, frameWidth, frameHeight, viewportWidth, viewportHeight);

  if (!move) return;

  const targetFace = moveFace(move);
  const arc3d = buildMoveArc3D(move);
  drawProjectedArc(
    ctx,
    arc3d,
    pose,
    rotationProgress,
    frameWidth,
    frameHeight,
    viewportWidth,
    viewportHeight,
    false,
  );

  if (isDoubleMove(move)) {
    const faceCorners =
      projectFaceCorners(targetFace, pose, frameWidth, frameHeight) ??
      (pose.corners as [Point2D, Point2D, Point2D, Point2D]);
    const [tl, tr, br, bl] = mapQuadToScreen(
      faceCorners,
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
    ctx.font = `bold ${Math.max(18, edge * 0.22)}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('180°', cx, cy);
    ctx.restore();
  } else if (isPrimeMove(move)) {
    const faceCorners =
      projectFaceCorners(targetFace, pose, frameWidth, frameHeight) ??
      (pose.corners as [Point2D, Point2D, Point2D, Point2D]);
    const [tl, tr, br, bl] = mapQuadToScreen(
      faceCorners,
      frameWidth,
      frameHeight,
      viewportWidth,
      viewportHeight,
    );
    const cx = (tl.x + tr.x + br.x + bl.x) / 4;
    const cy = (tl.y + tr.y + br.y + bl.y) / 4;
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.font = `600 ${Math.max(11, Math.min(
      Math.hypot(tr.x - tl.x, tr.y - tl.y),
      Math.hypot(bl.x - tl.x, bl.y - tl.y),
    ) * 0.08)}px Inter, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('↺', cx, cy);
    ctx.restore();
  }
}
