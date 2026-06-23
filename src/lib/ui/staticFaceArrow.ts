import type { Move } from '../../types';
import { isDoubleMove, isPrimeMove, moveFace } from '../cube/moves';

export interface OuterArrowPath {
  d: string;
  headX: number;
  headY: number;
  headAngle: number;
}

export interface OuterRotationArrows {
  arrows: OuterArrowPath[];
  doubleLabel: string | null;
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
  steps = 36,
): string {
  const parts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = start + ((end - start) * i) / steps;
    const p = pointOnArc(cx, cy, radius, t);
    parts.push(`${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`);
  }
  return parts.join(' ');
}

function arrowAtEnd(
  cx: number,
  cy: number,
  radius: number,
  angle: number,
): { headX: number; headY: number; headAngle: number } {
  const head = pointOnArc(cx, cy, radius, angle);
  const prev = pointOnArc(cx, cy, radius, angle - 0.22);
  return {
    headX: head.x,
    headY: head.y,
    headAngle: Math.atan2(head.y - prev.y, head.x - prev.x),
  };
}

function mirrorMoveForSelfie(move: Move): Move {
  if (isDoubleMove(move)) return move;
  const face = moveFace(move);
  return isPrimeMove(move) ? (face as Move) : (`${face}'` as Move);
}

/**
 * Two large corner arcs outside the face grid — matches user-drawn rotation cues.
 */
export function buildOuterRotationArrows(
  gridSize: number,
  padding: number,
  move: Move,
  mirror = false,
): OuterRotationArrows {
  const effectiveMove = mirror ? mirrorMoveForSelfie(move) : move;
  const clockwise = !isPrimeMove(effectiveMove);
  const sweep = (Math.PI / 2) * (clockwise ? 1 : -1);

  const left = padding;
  const top = padding;
  const right = padding + gridSize;
  const bottom = padding + gridSize;
  const radius = padding * 0.82;

  const corners: Array<{ cx: number; cy: number; start: number }> = clockwise
    ? [
        { cx: right, cy: top, start: Math.PI },
        { cx: left, cy: bottom, start: 0 },
      ]
    : [
        { cx: left, cy: top, start: Math.PI / 2 },
        { cx: right, cy: bottom, start: -Math.PI / 2 },
      ];

  const arrows: OuterArrowPath[] = corners.map(({ cx, cy, start }) => {
    const end = start + sweep;
    const head = arrowAtEnd(cx, cy, radius, end);
    return { d: arcPath(cx, cy, radius, start, end), ...head };
  });

  return {
    arrows,
    doubleLabel: isDoubleMove(move) ? '180°' : null,
  };
}

export function doubleMoveLabel(move: Move): string | null {
  return isDoubleMove(move) ? '180°' : null;
}

// Kept for compatibility if referenced elsewhere
export function buildFaceArcPaths(
  size: number,
  move: Move,
  _progress: number,
  mirror = false,
) {
  const outer = buildOuterRotationArrows(size * 0.72, size * 0.14, move, mirror);
  const first = outer.arrows[0]!;
  return {
    track: first.d,
    active: first.d,
    headX: first.headX,
    headY: first.headY,
    headAngle: first.headAngle,
  };
}
