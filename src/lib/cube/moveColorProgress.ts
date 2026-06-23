import Cube from 'cubejs';
import type { FaceId, Move, StickerColor } from '../../types';
import { moveFace } from './moves';
import { allFaceRotations } from './faceOrientation';
import { mirrorFaceCellsHorizontally } from '../vision/selfieView';

const FACE_ORDER: FaceId[] = ['U', 'R', 'F', 'D', 'L', 'B'];

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

function faceletAfterMove(facelet: string, move: Move): string {
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

function bestOrientedMatch(
  detected: StickerColor[],
  reference: StickerColor[],
): { oriented: StickerColor[]; matches: number } {
  let best = { oriented: detected, matches: 0 };

  for (const base of [detected, mirrorFaceCellsHorizontally(detected)]) {
    for (const rotated of allFaceRotations(base)) {
      const matches = countMatchingCells(rotated, reference);
      if (matches > best.matches) {
        best = { oriented: rotated, matches };
      }
    }
  }

  return best;
}

function faceChangesFromMove(facelet: string, move: Move, faceId: FaceId): number {
  const before = faceletFaceColors(facelet, faceId);
  const after = faceletFaceColors(faceletAfterMove(facelet, move), faceId);
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
  const changesOnDetected = faceChangesFromMove(facelet, move, detectedFace);
  if (changesOnDetected > 0) return detectedFace;

  const changesOnMoveFace = faceChangesFromMove(facelet, move, moveFaceId);
  if (changesOnMoveFace > 0) return moveFaceId;

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
  const after = faceletFaceColors(faceletAfterMove(facelet, move), comparisonFace);
  const { oriented, matches: beforeMatches } = bestOrientedMatch(detectedColors, before);

  if (beforeMatches < 6) {
    return { progress: 0, completed: false, visibleFace: detectedFace, orientedColors: null };
  }

  let changedCells = 0;
  let matchedTowardTarget = 0;
  for (let i = 0; i < 9; i++) {
    if (before[i] !== after[i]) {
      changedCells++;
      if (oriented[i] === after[i]) matchedTowardTarget++;
    }
  }

  const afterMatches = countMatchingCells(oriented, after);
  const progress =
    changedCells > 0
      ? Math.min(1, matchedTowardTarget / changedCells)
      : afterMatches >= 9
        ? 1
        : Math.min(1, afterMatches / 9);

  const completed = afterMatches >= 8 && oriented[4] === after[4];

  return {
    progress,
    completed,
    visibleFace: detectedFace,
    orientedColors: oriented,
  };
}
