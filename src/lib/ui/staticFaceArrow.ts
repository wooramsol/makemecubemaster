import type { Move } from '../../types';
import { isDoubleMove, isPrimeMove, moveAngle, moveFace } from '../cube/moves';

export interface FaceArcPaths {
  track: string;
  active: string;
  headX: number;
  headY: number;
  headAngle: number;
}

function pointOnArc(
  cx: number,
  cy: number,
  radius: number,
  angle: number,
): { x: number; y: number } {
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  };
}

function arcPath(
  cx: number,
  cy: number,
  radius: number,
  start: number,
  end: number,
  steps = 32,
): string {
  const parts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = start + ((end - start) * i) / steps;
    const p = pointOnArc(cx, cy, radius, t);
    parts.push(`${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`);
  }
  return parts.join(' ');
}

function mirrorMoveForSelfie(move: Move): Move {
  if (isDoubleMove(move)) return move;
  const face = moveFace(move);
  return isPrimeMove(move) ? (face as Move) : (`${face}'` as Move);
}

export function buildFaceArcPaths(
  size: number,
  move: Move,
  progress: number,
  mirror = false,
): FaceArcPaths {
  const effectiveMove = mirror ? mirrorMoveForSelfie(move) : move;
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.31;
  const total = Math.abs(moveAngle(effectiveMove));
  const start = isPrimeMove(effectiveMove) ? total : 0;
  const end = isPrimeMove(effectiveMove) ? 0 : total;
  const clamped = Math.max(0.06, Math.min(1, progress));
  const current = start + (end - start) * clamped;

  const track = arcPath(cx, cy, radius, start, end);
  const active = arcPath(cx, cy, radius, start, current);
  const head = pointOnArc(cx, cy, radius, current);
  const prev = pointOnArc(cx, cy, radius, current - 0.18);
  const headAngle = Math.atan2(head.y - prev.y, head.x - prev.x);

  return {
    track,
    active,
    headX: head.x,
    headY: head.y,
    headAngle,
  };
}

export function isWrongMoveActive(wrongMove: Move | null): boolean {
  return Boolean(wrongMove);
}

export function doubleMoveLabel(move: Move): string | null {
  return isDoubleMove(move) ? '180°' : null;
}
