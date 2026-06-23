import Cube from 'cubejs';
import type { FaceId, Move, StickerColor } from '../../types';
import { moveFace } from './moves';
import { allFaceRotations } from './faceOrientation';
import { mirrorFaceCellsHorizontally } from '../vision/selfieView';

const FACE_ORDER: FaceId[] = ['U', 'R', 'F', 'D', 'L', 'B'];
const PERIPHERY = [0, 1, 2, 3, 5, 6, 7, 8] as const;

const FACELET_TO_STICKER: Record<string, StickerColor> = {
  U: 'W',
  R: 'R',
  F: 'G',
  D: 'Y',
  L: 'O',
  B: 'B',
};

export interface MoveColorEvaluation {
  progress: number;
  completed: boolean;
  visibleFace: FaceId | null;
  orientedColors: StickerColor[] | null;
}

function faceletFaceColors(facelet: string, faceId: FaceId): StickerColor[] {
  const idx = FACE_ORDER.indexOf(faceId);
  const slice = facelet.slice(idx * 9, idx * 9 + 9);
  return [...slice].map((ch) => FACELET_TO_STICKER[ch]!);
}

/** Current sticker colors for the face being turned (from virtual cube state). */
export function colorsForMoveFromFacelet(move: Move, facelet: string): StickerColor[] {
  if (!facelet || facelet.length !== 54) return [];
  return faceletFaceColors(facelet, moveFace(move));
}

export function applyMoveToFacelet(facelet: string, move: Move): string {
  const cube = Cube.fromString(facelet);
  cube.move(move);
  return cube.asString();
}

function countMatchingCells(a: StickerColor[], b: StickerColor[]): number {
  let matches = 0;
  for (let i = 0; i < 9; i++) {
    if (a[i] === b[i]) matches++;
  }
  return matches;
}

function countMatchingPeriphery(a: StickerColor[], b: StickerColor[]): number {
  let matches = 0;
  for (const i of PERIPHERY) {
    if (a[i] === b[i]) matches++;
  }
  return matches;
}

interface OrientationScore {
  oriented: StickerColor[];
  beforeMatches: number;
  afterMatches: number;
  peripheryAfter: number;
}

function scoreAllOrientations(
  detected: StickerColor[],
  before: StickerColor[],
  after: StickerColor[],
): OrientationScore {
  let best: OrientationScore = {
    oriented: detected,
    beforeMatches: 0,
    afterMatches: 0,
    peripheryAfter: 0,
  };

  for (const base of [detected, mirrorFaceCellsHorizontally(detected)]) {
    for (const rotated of allFaceRotations(base)) {
      const beforeMatches = countMatchingCells(rotated, before);
      const afterMatches = countMatchingCells(rotated, after);
      const peripheryAfter = countMatchingPeriphery(rotated, after);
      const better =
        afterMatches > best.afterMatches ||
        (afterMatches === best.afterMatches && beforeMatches > best.beforeMatches);
      if (better) {
        best = { oriented: rotated, beforeMatches, afterMatches, peripheryAfter };
      }
    }
  }

  return best;
}

function faceChangesFromMove(facelet: string, move: Move, faceId: FaceId): number {
  const before = faceletFaceColors(facelet, faceId);
  const after = faceletFaceColors(applyMoveToFacelet(facelet, move), faceId);
  let changes = 0;
  for (let i = 0; i < 9; i++) {
    if (before[i] !== after[i]) changes++;
  }
  return changes;
}

function pickComparisonFace(
  facelet: string,
  move: Move,
  detectedFace: FaceId | null,
): FaceId | null {
  if (!detectedFace) return null;

  const moveFaceId = moveFace(move);
  if (faceChangesFromMove(facelet, move, detectedFace) > 0) return detectedFace;
  if (faceChangesFromMove(facelet, move, moveFaceId) > 0) return moveFaceId;

  return detectedFace;
}

export function evaluateMoveColorProgress(
  facelet: string,
  move: Move,
  detectedColors: StickerColor[] | null,
  detectedFace: FaceId | null,
): MoveColorEvaluation {
  if (!facelet || facelet.length !== 54 || !detectedColors || detectedColors.length !== 9) {
    return { progress: 0, completed: false, visibleFace: detectedFace, orientedColors: null };
  }

  const comparisonFace = pickComparisonFace(facelet, move, detectedFace);
  if (!comparisonFace) {
    return { progress: 0, completed: false, visibleFace: detectedFace, orientedColors: null };
  }

  const before = faceletFaceColors(facelet, comparisonFace);
  const after = faceletFaceColors(applyMoveToFacelet(facelet, move), comparisonFace);
  const score = scoreAllOrientations(detectedColors, before, after);
  const { oriented, beforeMatches, afterMatches, peripheryAfter } = score;

  const completed =
    peripheryAfter >= 6 &&
    afterMatches >= 6 &&
    afterMatches > beforeMatches;

  let progress = 0;
  if (completed) {
    progress = 1;
  } else if (beforeMatches >= 5) {
    let changedCells = 0;
    let matchedTowardTarget = 0;
    for (let i = 0; i < 9; i++) {
      if (before[i] !== after[i]) {
        changedCells++;
        if (oriented[i] === after[i]) matchedTowardTarget++;
      }
    }
    progress =
      changedCells > 0
        ? Math.min(1, matchedTowardTarget / changedCells)
        : Math.min(1, afterMatches / 9);
  } else if (afterMatches > beforeMatches) {
    progress = Math.min(1, afterMatches / 9);
  }

  return {
    progress,
    completed,
    visibleFace: detectedFace,
    orientedColors: oriented,
  };
}
