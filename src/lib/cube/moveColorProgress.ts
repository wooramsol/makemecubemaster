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
  orientationLock: number | null;
}

export interface MoveColorTrackerState {
  orientationLock: number | null;
}

export function createMoveColorTrackerState(): MoveColorTrackerState {
  return { orientationLock: null };
}

function faceletFaceColors(facelet: string, faceId: FaceId): StickerColor[] {
  const idx = FACE_ORDER.indexOf(faceId);
  const slice = facelet.slice(idx * 9, idx * 9 + 9);
  return [...slice].map((ch) => FACELET_TO_STICKER[ch]!);
}

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

function enumerateOrientations(colors: StickerColor[]): StickerColor[][] {
  const seen = new Set<string>();
  const orientations: StickerColor[][] = [];
  for (const base of [colors, mirrorFaceCellsHorizontally(colors)]) {
    for (const rotated of allFaceRotations(base)) {
      const key = rotated.join('');
      if (seen.has(key)) continue;
      seen.add(key);
      orientations.push(rotated);
    }
  }
  return orientations;
}

function orientByIndex(colors: StickerColor[], index: number): StickerColor[] {
  const orientations = enumerateOrientations(colors);
  return orientations[index] ?? colors;
}

function bestOrientationIndex(
  detected: StickerColor[],
  reference: StickerColor[],
): { index: number; matches: number; oriented: StickerColor[] } {
  let best = { index: 0, matches: 0, oriented: detected };
  enumerateOrientations(detected).forEach((oriented, index) => {
    const matches = countMatchingCells(oriented, reference);
    if (matches > best.matches) {
      best = { index, matches, oriented };
    }
  });
  return best;
}

function scoreAgainstReferences(
  detected: StickerColor[],
  before: StickerColor[],
  after: StickerColor[],
  lockIndex: number | null,
): {
  oriented: StickerColor[];
  beforeMatches: number;
  afterMatches: number;
  peripheryAfter: number;
  orientationLock: number | null;
} {
  const references = [
    { before, after },
    {
      before: mirrorFaceCellsHorizontally(before),
      after: mirrorFaceCellsHorizontally(after),
    },
  ];

  let best = {
    oriented: detected,
    beforeMatches: 0,
    afterMatches: 0,
    peripheryAfter: 0,
    orientationLock: lockIndex,
  };

  if (lockIndex !== null) {
    const oriented = orientByIndex(detected, lockIndex);
    const beforeMatches = Math.max(
      countMatchingCells(oriented, references[0]!.before),
      countMatchingCells(oriented, references[1]!.before),
    );
    const afterMatches = Math.max(
      countMatchingCells(oriented, references[0]!.after),
      countMatchingCells(oriented, references[1]!.after),
    );
    const peripheryAfter = Math.max(
      countMatchingPeriphery(oriented, references[0]!.after),
      countMatchingPeriphery(oriented, references[1]!.after),
    );
    return {
      oriented,
      beforeMatches,
      afterMatches,
      peripheryAfter,
      orientationLock: lockIndex,
    };
  }

  for (const ref of references) {
    const pick = bestOrientationIndex(detected, ref.before);
    const oriented = pick.oriented;
    const beforeMatches = pick.matches;
    const afterMatches = countMatchingCells(oriented, ref.after);
    const peripheryAfter = countMatchingPeriphery(oriented, ref.after);
    const better =
      afterMatches > best.afterMatches ||
      (afterMatches === best.afterMatches && beforeMatches > best.beforeMatches);
    if (better) {
      let orientationLock: number | null = null;
      if (beforeMatches >= 5) orientationLock = pick.index;
      best = {
        oriented,
        beforeMatches,
        afterMatches,
        peripheryAfter,
        orientationLock,
      };
    }
  }

  return best;
}

export function evaluateMoveColorProgress(
  facelet: string,
  move: Move,
  detectedColors: StickerColor[] | null,
  detectedFace: FaceId | null,
  tracker: MoveColorTrackerState,
): MoveColorEvaluation {
  if (!facelet || facelet.length !== 54 || !detectedColors || detectedColors.length !== 9) {
    return {
      progress: 0,
      completed: false,
      visibleFace: detectedFace,
      orientedColors: null,
      orientationLock: tracker.orientationLock,
    };
  }

  const comparisonFace = moveFace(move);
  const before = faceletFaceColors(facelet, comparisonFace);
  const after = faceletFaceColors(applyMoveToFacelet(facelet, move), comparisonFace);
  const score = scoreAgainstReferences(
    detectedColors,
    before,
    after,
    tracker.orientationLock,
  );

  if (score.orientationLock !== null && tracker.orientationLock === null) {
    tracker.orientationLock = score.orientationLock;
  }

  const { oriented, beforeMatches, afterMatches, peripheryAfter } = score;

  const completed =
    peripheryAfter >= 5 &&
    afterMatches >= 5 &&
    (afterMatches > beforeMatches + 1 || (afterMatches >= 7 && beforeMatches <= 4));

  let progress = 0;
  if (completed) {
    progress = 1;
  } else if (beforeMatches >= 4) {
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
    orientationLock: tracker.orientationLock,
  };
}

export function resetMoveColorTracker(tracker: MoveColorTrackerState): void {
  tracker.orientationLock = null;
}
