import type { FaceId, Move, StickerColor } from '../../types';
import { ALL_FACE_IDS, FACE_MODEL_CORNERS } from '../vision/faceModels';
import { FACE_NORMALS } from './moves';
import { getSelfieDisplayMove } from './moveRotationDisplay';
import { isPrimeMove, moveAngle, moveFace } from './moves';

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
}

export interface IsoFaceOutline {
  faceId: FaceId;
  points: Point2[];
  label: Point2;
}

export interface IsoScanCell extends IsoCell {
  depth: number;
}

export interface IsoScanCubeModel {
  cells: IsoScanCell[];
  faceOutlines: IsoFaceOutline[];
  size: number;
  visibleFaceIds: FaceId[];
}

export interface IsoScanViewAngle {
  yaw: number;
  pitch: number;
}

const SCAN_PITCH = -0.38;
const SCAN_YAW_DEFAULT = Math.PI / 4;

/** Isometric viewpoint that best shows each face after capture (B spins ~180°). */
export const SCAN_VIEW_FOR_FACE: Record<FaceId, IsoScanViewAngle> = {
  F: { yaw: SCAN_YAW_DEFAULT, pitch: SCAN_PITCH },
  R: { yaw: -Math.PI / 4, pitch: SCAN_PITCH },
  L: { yaw: (3 * Math.PI) / 4, pitch: SCAN_PITCH },
  B: { yaw: SCAN_YAW_DEFAULT + Math.PI, pitch: SCAN_PITCH },
  U: { yaw: SCAN_YAW_DEFAULT, pitch: -0.52 },
  D: { yaw: SCAN_YAW_DEFAULT, pitch: -0.22 },
};

function transformPointYawPitch(p: Point3, yaw: number, pitch: number): Point3 {
  return rotateX(rotateY(p, yaw), pitch);
}

function transformNormal(faceId: FaceId, yaw: number, pitch: number): Point3 {
  const n = FACE_NORMALS[faceId];
  return transformPointYawPitch({ x: n[0], y: n[1], z: n[2] }, yaw, pitch);
}

/** Full-cube isometric model for live scan — unscanned faces stay white. */
export function buildIsoScanCubeModel(
  options: {
    yaw?: number;
    pitch?: number;
    size?: number;
  } = {},
): IsoScanCubeModel {
  const yaw = options.yaw ?? SCAN_YAW_DEFAULT;
  const pitch = options.pitch ?? SCAN_PITCH;
  const size = options.size ?? 200;
  const cx = size / 2;
  const cy = size * 0.54;
  const scale = size * 0.36;

  const visibleFaceIds: FaceId[] = [];
  const cells: IsoScanCell[] = [];
  const faceOutlines: IsoFaceOutline[] = [];

  for (const faceId of ALL_FACE_IDS) {
    const normal = transformNormal(faceId, yaw, pitch);
    if (normal.z > -0.12) continue;

    visibleFaceIds.push(faceId);

    const corners = FACE_MODEL_CORNERS[faceId]!.map(([x, y, z]) =>
      isoProject(transformPointYawPitch({ x, y, z }, yaw, pitch), scale, cx, cy),
    );

    faceOutlines.push({
      faceId,
      points: corners,
      label: {
        x: corners[0]!.x + (corners[1]!.x - corners[0]!.x) * 0.08,
        y: corners[0]!.y + (corners[1]!.y - corners[0]!.y) * 0.08 - 4,
      },
    });

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const index = row * 3 + col;
        const cornerPts = [0, 1, 2, 3].map((c) => {
          const p3 = transformPointYawPitch(
            cellCorner(faceId, row, col, c as 0 | 1 | 2 | 3),
            yaw,
            pitch,
          );
          return { p2: isoProject(p3, scale, cx, cy), z: p3.z };
        });
        const points = cornerPts.map((p) => p.p2);
        const depth = cornerPts.reduce((s, p) => s + p.z, 0) / cornerPts.length;
        cells.push({
          faceId,
          index,
          points,
          center: polygonCenter(points),
          isTurning: false,
          depth,
        });
      }
    }
  }

  cells.sort((a, b) => b.depth - a.depth);

  return { cells, faceOutlines, size, visibleFaceIds };
}

export function scanCellColor(
  faceId: FaceId,
  index: number,
  scannedColors: Partial<Record<FaceId, StickerColor[]>>,
  previewFace: FaceId | null,
  previewColors: StickerColor[] | null,
): StickerColor | null {
  const scanned = scannedColors[faceId];
  if (scanned && scanned.length === 9) return scanned[index] ?? null;
  if (previewFace === faceId && previewColors && previewColors.length === 9) {
    return previewColors[index] ?? null;
  }
  return null;
}

export interface IsoCubeGuideModel {
  holdFace: FaceId;
  turnLayer: FaceId;
  visibleFaces: FaceId[];
  cells: IsoCell[];
  faceOutlines: IsoFaceOutline[];
  arrow: IsoArrow | null;
  size: number;
}

const ISO = 0.92;

const TURNING_CELLS: Record<FaceId, Partial<Record<FaceId, number[]>>> = {
  R: { R: [0, 1, 2, 3, 4, 5, 6, 7, 8], F: [2, 5, 8], B: [0, 3, 6], U: [2, 5, 8], D: [2, 5, 8] },
  L: { L: [0, 1, 2, 3, 4, 5, 6, 7, 8], F: [0, 3, 6], B: [2, 5, 8], U: [0, 3, 6], D: [0, 3, 6] },
  U: { U: [0, 1, 2, 3, 4, 5, 6, 7, 8], F: [0, 1, 2], B: [0, 1, 2], R: [0, 1, 2], L: [0, 1, 2] },
  D: { D: [0, 1, 2, 3, 4, 5, 6, 7, 8], F: [6, 7, 8], B: [6, 7, 8], R: [6, 7, 8], L: [6, 7, 8] },
  F: { F: [0, 1, 2, 3, 4, 5, 6, 7, 8], R: [0, 3, 6], L: [2, 5, 8], U: [6, 7, 8], D: [0, 1, 2] },
  B: { B: [0, 1, 2, 3, 4, 5, 6, 7, 8], R: [2, 5, 8], L: [0, 3, 6], U: [0, 1, 2], D: [6, 7, 8] },
};

/** Side face on the left or right of hold-F corner view. */
export function visibleFacesFor(holdFace: FaceId, turnLayer: FaceId): FaceId[] {
  if (holdFace === 'F') {
    const leftSide = turnLayer === 'L' || turnLayer === 'B';
    return leftSide ? ['U', 'L', 'F'] : ['U', 'R', 'F'];
  }
  if (holdFace === 'R') return ['U', 'F', 'R'];
  if (holdFace === 'L') return ['U', 'F', 'L'];
  return ['U', 'R', 'F'];
}

/** Selfie preview mirrors horizontally — swap L/R so the guide matches the camera. */
export function visibleFacesForSelfie(holdFace: FaceId, turnLayer: FaceId): FaceId[] {
  const base = visibleFacesFor(holdFace, turnLayer);
  if (holdFace !== 'F') return base;
  return base.map((faceId) =>
    faceId === 'R' ? 'L' : faceId === 'L' ? 'R' : faceId,
  ) as FaceId[];
}

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
  return rotateX(rotateY(p, yaw), -0.38);
}

function isoProject(p: Point3, scale: number, cx: number, cy: number): Point2 {
  return {
    x: cx + (p.x - p.z) * ISO * scale,
    y: cy - p.y * scale + (p.x + p.z) * ISO * 0.5 * scale,
  };
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
  return [left, right, rightNext, leftNext][corner]!;
}

function polygonCenter(points: Point2[]): Point2 {
  return {
    x: points.reduce((s, p) => s + p.x, 0) / points.length,
    y: points.reduce((s, p) => s + p.y, 0) / points.length,
  };
}

function faceCorners2d(faceId: FaceId, holdFace: FaceId, scale: number, cx: number, cy: number): Point2[] {
  return FACE_MODEL_CORNERS[faceId]!.map(([x, y, z]) =>
    isoProject(transformPoint({ x, y, z }, holdFace), scale, cx, cy),
  );
}

function buildArrow(
  move: Move,
  arrowFace: FaceId,
  holdFace: FaceId,
  scale: number,
  cx: number,
  cy: number,
): IsoArrow | null {
  const effective = getSelfieDisplayMove(move);
  const corners = faceCorners2d(arrowFace, holdFace, scale, cx, cy);
  const center = polygonCenter(corners);
  const u = { x: corners[1]!.x - corners[0]!.x, y: corners[1]!.y - corners[0]!.y };
  const v = { x: corners[3]!.x - corners[0]!.x, y: corners[3]!.y - corners[0]!.y };
  const uLen = Math.hypot(u.x, u.y) || 1;
  const vLen = Math.hypot(v.x, v.y) || 1;
  const ru = { x: u.x / uLen, y: u.y / uLen };
  const rv = { x: v.x / vLen, y: v.y / vLen };
  const radius = Math.min(uLen, vLen) * 0.38;

  const total = Math.abs(moveAngle(effective));
  const start = isPrimeMove(effective) ? total : 0;
  const end = isPrimeMove(effective) ? 0 : total;

  const steps = 24;
  const parts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = start + ((end - start) * i) / steps;
    const px = center.x + radius * (Math.cos(t) * ru.x + Math.sin(t) * rv.x);
    const py = center.y + radius * (Math.cos(t) * ru.y + Math.sin(t) * rv.y);
    parts.push(`${i === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`);
  }

  const tipT = end;
  const prevT = tipT + (end >= start ? -0.28 : 0.28);
  const tip = {
    x: center.x + radius * (Math.cos(tipT) * ru.x + Math.sin(tipT) * rv.x),
    y: center.y + radius * (Math.cos(tipT) * ru.y + Math.sin(tipT) * rv.y),
  };
  const prev = {
    x: center.x + radius * (Math.cos(prevT) * ru.x + Math.sin(prevT) * rv.x),
    y: center.y + radius * (Math.cos(prevT) * ru.y + Math.sin(prevT) * rv.y),
  };

  return {
    path: parts.join(' '),
    head: tip,
    headAngle: Math.atan2(tip.y - prev.y, tip.x - prev.x),
  };
}

export function buildIsoCubeGuideModel(
  move: Move,
  holdFace: FaceId,
  size = 200,
  selfieMirror = false,
): IsoCubeGuideModel {
  const turnLayer = moveFace(move);
  const visibleFaces = selfieMirror
    ? visibleFacesForSelfie(holdFace, turnLayer)
    : visibleFacesFor(holdFace, turnLayer);
  const cx = size / 2;
  const cy = size * 0.54;
  const scale = size * 0.36;
  const turningByFace = TURNING_CELLS[turnLayer] ?? {};

  const cells: IsoCell[] = [];
  for (const faceId of visibleFaces) {
    const turningIndices = new Set(turningByFace[faceId] ?? []);
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const index = row * 3 + col;
        const points = [0, 1, 2, 3].map((c) => {
          const p3 = transformPoint(cellCorner(faceId, row, col, c as 0 | 1 | 2 | 3), holdFace);
          return isoProject(p3, scale, cx, cy);
        });
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

  const faceOutlines: IsoFaceOutline[] = visibleFaces.map((faceId) => {
    const points = faceCorners2d(faceId, holdFace, scale, cx, cy);
    const label = {
      x: points[0]!.x + (points[1]!.x - points[0]!.x) * 0.08,
      y: points[0]!.y + (points[1]!.y - points[0]!.y) * 0.08 - 4,
    };
    return { faceId, points, label };
  });

  const arrowFace = visibleFaces.includes(turnLayer) ? turnLayer : visibleFaces[1]!;

  return {
    holdFace,
    turnLayer,
    visibleFaces,
    cells,
    faceOutlines,
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
