import type { FaceId, Move, StickerColor } from '../../types';
import { FACE_MODEL_CORNERS } from '../vision/faceModels';
import { getSelfieDisplayMove } from './moveRotationDisplay';
import { isDoubleMove, isPrimeMove, moveAngle, moveFace } from './moves';

export interface Point2 {
  x: number;
  y: number;
}

export interface Point3 {
  x: number;
  y: number;
  z: number;
}

export interface IsoCell {
  faceId: FaceId;
  index: number;
  points: Point2[];
  center: Point2;
  isTurning: boolean;
}

export interface IsoArrow {
  path: string;
  head: Point2;
  headAngle: number;
  label?: string;
}

export interface IsoCubeGuideModel {
  holdFace: FaceId;
  turnLayer: FaceId;
  visibleFaces: FaceId[];
  cells: IsoCell[];
  edges: [Point2, Point2][];
  arrow: IsoArrow | null;
  size: number;
}

const H = 0.5;

/** Paint order: back faces first. */
const VISIBLE_BY_HOLD: Record<FaceId, FaceId[]> = {
  F: ['U', 'R', 'F'],
  R: ['U', 'F', 'R'],
  L: ['U', 'F', 'L'],
  U: ['F', 'R', 'U'],
  D: ['F', 'R', 'D'],
  B: ['U', 'L', 'B'],
};

/** Stickers on each face that belong to a given turning layer. */
const TURNING_CELLS: Record<FaceId, Partial<Record<FaceId, number[]>>> = {
  R: { R: [0, 1, 2, 3, 4, 5, 6, 7, 8], F: [2, 5, 8], B: [0, 3, 6], U: [2, 5, 8], D: [2, 5, 8] },
  L: { L: [0, 1, 2, 3, 4, 5, 6, 7, 8], F: [0, 3, 6], B: [2, 5, 8], U: [0, 3, 6], D: [0, 3, 6] },
  U: { U: [0, 1, 2, 3, 4, 5, 6, 7, 8], F: [0, 1, 2], B: [0, 1, 2], R: [0, 1, 2], L: [0, 1, 2] },
  D: { D: [0, 1, 2, 3, 4, 5, 6, 7, 8], F: [6, 7, 8], B: [6, 7, 8], R: [6, 7, 8], L: [6, 7, 8] },
  F: { F: [0, 1, 2, 3, 4, 5, 6, 7, 8], R: [0, 3, 6], L: [2, 5, 8], U: [6, 7, 8], D: [0, 1, 2] },
  B: { B: [0, 1, 2, 3, 4, 5, 6, 7, 8], R: [2, 5, 8], L: [0, 3, 6], U: [0, 1, 2], D: [6, 7, 8] },
};

const HOLD_YAW: Partial<Record<FaceId, number>> = {
  F: Math.PI / 4,
  R: -Math.PI / 4,
  L: (3 * Math.PI) / 4,
};

function rotateY(p: Point3, yaw: number): Point3 {
  const c = Math.cos(yaw);
  const s = Math.sin(yaw);
  return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
}

function rotateX(p: Point3, pitch: number): Point3 {
  const c = Math.cos(pitch);
  const s = Math.sin(pitch);
  return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
}

function transformPoint(p: Point3, holdFace: FaceId): Point3 {
  const yaw = HOLD_YAW[holdFace] ?? Math.PI / 4;
  return rotateX(rotateY(p, yaw), -0.42);
}

function isoProject(p: Point3, scale: number, cx: number, cy: number): Point2 {
  const isoX = (p.x - p.z) * scale;
  const isoY = (-p.y - (p.x + p.z) * 0.5) * scale;
  return { x: cx + isoX, y: cy + isoY };
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerp3(a: Point3, b: Point3, t: number): Point3 {
  return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t), z: lerp(a.z, b.z, t) };
}

function cellCorner(faceId: FaceId, row: number, col: number, corner: 0 | 1 | 2 | 3): Point3 {
  const [tl, tr, br, bl] = FACE_MODEL_CORNERS[faceId]!.map(
    ([x, y, z]) => ({ x, y, z }),
  ) as [Point3, Point3, Point3, Point3];
  const top = lerp3(tl, tr, col / 3);
  const bottom = lerp3(bl, br, col / 3);
  const topNext = lerp3(tl, tr, (col + 1) / 3);
  const bottomNext = lerp3(bl, br, (col + 1) / 3);
  const left = lerp3(top, bottom, row / 3);
  const right = lerp3(topNext, bottomNext, row / 3);
  const leftNext = lerp3(top, bottom, (row + 1) / 3);
  const rightNext = lerp3(topNext, bottomNext, (row + 1) / 3);
  const corners = [left, right, rightNext, leftNext] as const;
  return corners[corner];
}

function polygonCenter(points: Point2[]): Point2 {
  const n = points.length;
  return {
    x: points.reduce((s, p) => s + p.x, 0) / n,
    y: points.reduce((s, p) => s + p.y, 0) / n,
  };
}

function faceProjectedCorners(faceId: FaceId, holdFace: FaceId, scale: number, cx: number, cy: number): Point2[] {
  return FACE_MODEL_CORNERS[faceId]!.map(([x, y, z]) =>
    isoProject(transformPoint({ x, y, z }, holdFace), scale, cx, cy),
  );
}

function cubeEdges(holdFace: FaceId, scale: number, cx: number, cy: number): [Point2, Point2][] {
  const verts = [
    [-H, H, H],
    [H, H, H],
    [H, H, -H],
    [-H, H, -H],
    [-H, -H, H],
    [H, -H, H],
    [H, -H, -H],
    [-H, -H, -H],
  ] as [number, number, number][];

  const pairs: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7],
  ];

  return pairs.map(([a, b]) => {
    const pa = verts[a]!;
    const pb = verts[b]!;
    return [
      isoProject(transformPoint({ x: pa[0], y: pa[1], z: pa[2] }, holdFace), scale, cx, cy),
      isoProject(transformPoint({ x: pb[0], y: pb[1], z: pb[2] }, holdFace), scale, cx, cy),
    ];
  });
}

function buildArrow(
  move: Move,
  turnLayer: FaceId,
  holdFace: FaceId,
  scale: number,
  cx: number,
  cy: number,
): IsoArrow | null {
  const effective = getSelfieDisplayMove(move);
  const corners = faceProjectedCorners(turnLayer, holdFace, scale, cx, cy);
  const center = polygonCenter(corners);
  const u = { x: corners[1]!.x - corners[0]!.x, y: corners[1]!.y - corners[0]!.y };
  const v = { x: corners[3]!.x - corners[0]!.x, y: corners[3]!.y - corners[0]!.y };
  const uLen = Math.hypot(u.x, u.y) || 1;
  const vLen = Math.hypot(v.x, v.y) || 1;
  const ru = { x: u.x / uLen, y: u.y / uLen };
  const rv = { x: v.x / vLen, y: v.y / vLen };
  const radius = Math.min(uLen, vLen) * 0.34;

  const total = Math.abs(moveAngle(effective));
  const start = isPrimeMove(effective) ? total : 0;
  const end = isPrimeMove(effective) ? 0 : total;

  const steps = 20;
  const parts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = start + ((end - start) * i) / steps;
    const px = center.x + radius * (Math.cos(t) * ru.x + Math.sin(t) * rv.x);
    const py = center.y + radius * (Math.cos(t) * ru.y + Math.sin(t) * rv.y);
    parts.push(`${i === 0 ? 'M' : 'L'} ${px.toFixed(2)} ${py.toFixed(2)}`);
  }

  const tipT = end;
  const prevT = end - (end >= start ? -0.25 : 0.25);
  const tip = {
    x: center.x + radius * (Math.cos(tipT) * ru.x + Math.sin(tipT) * rv.x),
    y: center.y + radius * (Math.cos(tipT) * ru.y + Math.sin(tipT) * rv.y),
  };
  const prev = {
    x: center.x + radius * (Math.cos(prevT) * ru.x + Math.sin(prevT) * rv.x),
    y: center.y + radius * (Math.cos(prevT) * ru.y + Math.sin(prevT) * rv.y),
  };
  const headAngle = Math.atan2(tip.y - prev.y, tip.x - prev.x);

  return {
    path: parts.join(' '),
    head: tip,
    headAngle,
    label: isDoubleMove(move) ? '180°' : undefined,
  };
}

function pickArrowFace(turnLayer: FaceId, visibleFaces: FaceId[]): FaceId {
  if (visibleFaces.includes(turnLayer)) return turnLayer;
  const turning = TURNING_CELLS[turnLayer] ?? {};
  let best: FaceId = visibleFaces[visibleFaces.length - 1]!;
  let bestCount = 0;
  for (const faceId of visibleFaces) {
    const count = turning[faceId]?.length ?? 0;
    if (count > bestCount) {
      bestCount = count;
      best = faceId;
    }
  }
  return best;
}

export function buildIsoCubeGuideModel(
  move: Move,
  holdFace: FaceId,
  size = 168,
): IsoCubeGuideModel {
  const turnLayer = moveFace(move);
  const visibleFaces = VISIBLE_BY_HOLD[holdFace] ?? ['U', 'R', 'F'];
  const arrowFace = pickArrowFace(turnLayer, visibleFaces);
  const cx = size / 2;
  const cy = size * 0.56;
  const scale = size * 0.42;
  const turningByFace = TURNING_CELLS[turnLayer] ?? {};
  const cells: IsoCell[] = [];

  for (const faceId of visibleFaces) {
    const turningIndices = new Set(turningByFace[faceId] ?? []);
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const index = row * 3 + col;
        const pts3 = [0, 1, 2, 3].map((c) =>
          transformPoint(cellCorner(faceId, row, col, c as 0 | 1 | 2 | 3), holdFace),
        );
        const points = pts3.map((p) => isoProject(p, scale, cx, cy));
        cells.push({
          faceId,
          index,
          points,
          center: polygonCenter(points),
          isTurning: turningIndices.has(index),
        });
      }
    }
  }

  return {
    holdFace,
    turnLayer,
    visibleFaces,
    cells,
    edges: cubeEdges(holdFace, scale, cx, cy),
    arrow: buildArrow(move, arrowFace, holdFace, scale, cx, cy),
    size,
  };
}

export function stickerColorForCell(
  faceColors: Partial<Record<FaceId, StickerColor[]>>,
  faceId: FaceId,
  index: number,
): StickerColor | null {
  const colors = faceColors[faceId];
  if (!colors || colors.length !== 9) return null;
  return colors[index] ?? null;
}
