import type { Move } from '../../types';
import { MOVE_AXES, moveAngle, moveFace } from '../cube/moves';
import { identityMatrix, multiplyMatrices, rotationMatrixFromAxisAngle } from '../cube/state';

const ROTATION_THRESHOLD = 0.65;
const STABLE_FRAMES = 4;

interface TrackerState {
  lastMatrix: number[];
  stableCount: number;
  pendingMove: Move | null;
}

export class RotationDetector {
  private state: TrackerState = {
    lastMatrix: identityMatrix(),
    stableCount: 0,
    pendingMove: null,
  };

  private initialized = false;

  reset(): void {
    this.state = {
      lastMatrix: identityMatrix(),
      stableCount: 0,
      pendingMove: null,
    };
    this.initialized = false;
  }

  update(rotationMatrix: number[]): Move | null {
    if (!this.initialized) {
      this.state.lastMatrix = [...rotationMatrix];
      this.initialized = true;
      return null;
    }

    const delta = multiplyMatrices(transpose3x3(rotationMatrix), this.state.lastMatrix);
    const move = matrixToMove(delta);

    if (move) {
      if (this.state.pendingMove === move) {
        this.state.stableCount++;
        if (this.state.stableCount >= STABLE_FRAMES) {
          this.state.lastMatrix = [...rotationMatrix];
          this.state.pendingMove = null;
          this.state.stableCount = 0;
          return move;
        }
      } else {
        this.state.pendingMove = move;
        this.state.stableCount = 1;
      }
    } else {
      this.state.pendingMove = null;
      this.state.stableCount = 0;
      this.state.lastMatrix = lerpMatrix(this.state.lastMatrix, rotationMatrix, 0.15);
    }

    return null;
  }

  sync(rotationMatrix: number[]): void {
    this.state.lastMatrix = [...rotationMatrix];
    this.state.pendingMove = null;
    this.state.stableCount = 0;
    this.initialized = true;
  }
}

function transpose3x3(m: number[]): number[] {
  return [m[0]!, m[3]!, m[6]!, m[1]!, m[4]!, m[7]!, m[2]!, m[5]!, m[8]!];
}

function lerpMatrix(a: number[], b: number[], t: number): number[] {
  return a.map((v, i) => v * (1 - t) + b[i]! * t);
}

function matrixToMove(delta: number[]): Move | null {
  const candidates: Move[] = [
    'R',
    "R'",
    'R2',
    'L',
    "L'",
    'L2',
    'U',
    "U'",
    'U2',
    'D',
    "D'",
    'D2',
    'F',
    "F'",
    'F2',
    'B',
    "B'",
    'B2',
  ];

  let best: Move | null = null;
  let bestScore = ROTATION_THRESHOLD;

  for (const move of candidates) {
    const face = moveFace(move);
    let axis = MOVE_AXES[face];
    if (face === 'L' || face === 'D' || face === 'B') {
      axis = [-axis[0], -axis[1], -axis[2]] as [number, number, number];
    }
    const expected = rotationMatrixFromAxisAngle(axis, moveAngle(move));
    const score = matrixSimilarity(delta, expected);
    if (score > bestScore) {
      bestScore = score;
      best = move;
    }
  }

  return best;
}

function matrixSimilarity(a: number[], b: number[]): number {
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += 1 - Math.abs(a[i]! - b[i]!) / 2;
  }
  return sum / 9;
}
