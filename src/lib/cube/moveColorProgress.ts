import Cube from 'cubejs';
import type { FaceId, Move, StickerColor } from '../../types';
import { ALL_FACES } from './colors';
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
  comparisonFace: FaceId | null;
}

export interface MoveColorTrackerState {
  orientationLock: number | null;
  lockMissFrames: number;
}

export function createMoveColorTrackerState(): MoveColorTrackerState {
  return { orientationLock: null, lockMissFrames: 0 };
}

export function resetMoveColorTracker(tracker: MoveColorTrackerState): void {
  tracker.orientationLock = null;
  tracker.lockMissFrames = 0;
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

export function majorityVoteFaceColors(readings: StickerColor[][]): StickerColor[] | null {
  if (readings.length === 0) return null;
  const result: StickerColor[] = [];
  for (let i = 0; i < 9; i++) {
    const counts = new Map<StickerColor, number>();
    for (const reading of readings) {
      const c = reading[i]!;
      counts.set(c, (counts.get(c) ?? 0) + 1);
    }
    let best: StickerColor = readings[0]![i]!;
    let bestCount = 0;
    for (const [color, count] of counts) {
      if (count > bestCount) {
        bestCount = count;
        best = color;
      }
    }
    result.push(best);
  }
  return result;
}

function changedIndices(before: StickerColor[], after: StickerColor[]): number[] {
  const idx: number[] = [];
  for (let i = 0; i < 9; i++) {
    if (before[i] !== after[i]) idx.push(i);
  }
  return idx;
}

function faceChangesFromMove(facelet: string, move: Move, faceId: FaceId): number {
  return changedIndices(
    faceletFaceColors(facelet, faceId),
    faceletFaceColors(applyMoveToFacelet(facelet, move), faceId),
  ).length;
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
  return enumerateOrientations(colors)[index] ?? colors;
}

function countMatchingAtIndices(a: StickerColor[], b: StickerColor[], indices: readonly number[]): number {
  let matches = 0;
  for (const i of indices) {
    if (a[i] === b[i]) matches++;
  }
  return matches;
}

function bestOrientationForReference(
  detected: StickerColor[],
  reference: StickerColor[],
  indices: readonly number[],
): { index: number; matches: number; oriented: StickerColor[] } {
  let best = { index: 0, matches: 0, oriented: detected };
  enumerateOrientations(detected).forEach((oriented, index) => {
    const matches = countMatchingAtIndices(oriented, reference, indices);
    if (matches > best.matches) {
      best = { index, matches, oriented };
    }
  });
  return best;
}

interface FaceEvalResult {
  progress: number;
  completed: boolean;
}

function evaluateOneFace(
  facelet: string,
  move: Move,
  faceId: FaceId,
  detected: StickerColor[],
  tracker: MoveColorTrackerState,
): FaceEvalResult {
  const before = faceletFaceColors(facelet, faceId);
  const after = faceletFaceColors(applyMoveToFacelet(facelet, move), faceId);
  const changed = changedIndices(before, after);
  if (changed.length === 0) return { progress: 0, completed: false };

  const refs = [
    { before, after },
    { before: mirrorFaceCellsHorizontally(before), after: mirrorFaceCellsHorizontally(after) },
  ];

  let best: FaceEvalResult = { progress: 0, completed: false };

  for (const ref of refs) {
    let oriented: StickerColor[];
    if (tracker.orientationLock !== null) {
      oriented = orientByIndex(detected, tracker.orientationLock);
    } else {
      const pick = bestOrientationForReference(detected, ref.before, PERIPHERY);
      oriented = pick.oriented;
      if (pick.matches >= 5) {
        tracker.orientationLock = pick.index;
        tracker.lockMissFrames = 0;
      }
    }

    const beforePeriph = countMatchingAtIndices(oriented, ref.before, PERIPHERY);
    const afterPeriph = countMatchingAtIndices(oriented, ref.after, PERIPHERY);
    const changedMatch = countMatchingAtIndices(oriented, ref.after, changed);
    const progress = changedMatch / changed.length;

    const completed =
      changedMatch >= Math.ceil(changed.length * 0.58) &&
      afterPeriph >= 5 &&
      afterPeriph > beforePeriph;

    if (completed || progress > best.progress) {
      best = { progress: completed ? 1 : progress, completed };
    }

    if (tracker.orientationLock !== null) {
      if (beforePeriph < 4) {
        tracker.lockMissFrames++;
        if (tracker.lockMissFrames > 8) {
          tracker.orientationLock = null;
          tracker.lockMissFrames = 0;
        }
      } else {
        tracker.lockMissFrames = 0;
      }
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
      comparisonFace: null,
    };
  }

  const affected = ALL_FACES.filter((f) => faceChangesFromMove(facelet, move, f) > 0);
  const moveFaceId = moveFace(move);
  const facesToTry =
    detectedFace && affected.includes(detectedFace)
      ? [detectedFace, moveFaceId]
      : [moveFaceId, ...affected.filter((f) => f !== moveFaceId)];

  let best: MoveColorEvaluation = {
    progress: 0,
    completed: false,
    visibleFace: detectedFace,
    comparisonFace: null,
  };

  for (const faceId of facesToTry) {
    if (!affected.includes(faceId)) continue;
    const result = evaluateOneFace(facelet, move, faceId, detectedColors, tracker);
    if (result.completed || result.progress > best.progress) {
      best = {
        progress: result.progress,
        completed: result.completed,
        visibleFace: detectedFace,
        comparisonFace: faceId,
      };
      if (result.completed) break;
    }
  }

  return best;
}
