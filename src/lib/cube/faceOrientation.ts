import type { FaceId, StickerColor } from '../../types';
import { buildFaceletFromMap } from './state';

const FACE_ORDER: FaceId[] = ['U', 'R', 'F', 'D', 'L', 'B'];

const FACE_CENTER: Record<FaceId, StickerColor> = {
  U: 'W',
  D: 'Y',
  F: 'G',
  B: 'B',
  R: 'R',
  L: 'O',
};

/** Rotate a 3×3 face 90° clockwise in the camera/guide frame. */
export function rotateFaceClockwise(colors: StickerColor[]): StickerColor[] {
  const rotated: StickerColor[] = new Array(9);
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      rotated[col * 3 + (2 - row)] = colors[row * 3 + col]!;
    }
  }
  return rotated;
}

/** Mirror a 3×3 face left-right (selfie camera vs raw sensor frame). */
export function mirrorFaceHorizontally(colors: StickerColor[]): StickerColor[] {
  if (colors.length !== 9) return colors;

  const mirrored: StickerColor[] = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 2; col >= 0; col--) {
      mirrored.push(colors[row * 3 + col]!);
    }
  }
  return mirrored;
}

export function allFaceRotations(colors: StickerColor[]): StickerColor[][] {
  const rotations = [colors];
  let current = colors;
  for (let i = 0; i < 3; i++) {
    current = rotateFaceClockwise(current);
    rotations.push(current);
  }
  return rotations;
}

/** Four rotations plus horizontal mirror × four rotations (up to 8 orientations). */
export function allFaceOrientations(colors: StickerColor[]): StickerColor[][] {
  const orientations: StickerColor[][] = [];
  const seen = new Set<string>();

  for (const base of [colors, mirrorFaceHorizontally(colors)]) {
    for (const rotated of allFaceRotations(base)) {
      const key = rotated.join('');
      if (seen.has(key)) continue;
      seen.add(key);
      orientations.push(rotated);
    }
  }

  return orientations;
}

/**
 * Each scanned face may be rotated or mirrored in the user's hand. Try all 8^6
 * orientations and return the first facelet string that passes the solvability check.
 */
export function findSolvableFacelet(
  faces: Map<FaceId, StickerColor[]>,
  isSolvableFacelet: (facelet: string) => boolean,
): string | null {
  const orientationsByFace = FACE_ORDER.map((faceId) => {
    const colors = faces.get(faceId);
    if (!colors || colors.length !== 9) {
      throw new Error(`Missing face data for ${faceId}`);
    }
    return allFaceOrientations(colors);
  });

  const indices = [0, 0, 0, 0, 0, 0];

  for (;;) {
    const trial = new Map<FaceId, StickerColor[]>();
    for (let i = 0; i < FACE_ORDER.length; i++) {
      trial.set(FACE_ORDER[i]!, orientationsByFace[i]![indices[i]!]!);
    }

    const facelet = buildFaceletFromMap(trial);
    if (isSolvableFacelet(facelet)) {
      return facelet;
    }

    let digit = 0;
    while (digit < FACE_ORDER.length) {
      indices[digit]! += 1;
      if (indices[digit]! < orientationsByFace[digit]!.length) break;
      indices[digit] = 0;
      digit += 1;
    }
    if (digit >= FACE_ORDER.length) break;
  }

  return null;
}

function permutations(items: FaceId[]): FaceId[][] {
  const result: FaceId[][] = [];
  const arr = [...items];

  function permute(left: number): void {
    if (left >= arr.length) {
      result.push([...arr]);
      return;
    }
    for (let i = left; i < arr.length; i++) {
      [arr[left], arr[i]] = [arr[i]!, arr[left]!];
      permute(left + 1);
      [arr[left], arr[i]] = [arr[i]!, arr[left]!];
    }
  }

  permute(0);
  return result;
}

function assignmentCost(captures: StickerColor[][], faceOrder: FaceId[]): number {
  let cost = 0;
  for (let i = 0; i < captures.length; i++) {
    const center = captures[i]![4]!;
    if (center !== FACE_CENTER[faceOrder[i]!]) {
      cost += 5;
    }
  }
  return cost;
}

/**
 * Try every way to map 6 captured patterns onto face slots (handles wrong face IDs
 * during scan), then every rotation per face.
 */
export function findSolvableCubeFromCaptures(
  captures: StickerColor[][],
  isSolvableFacelet: (facelet: string) => boolean,
): string | null {
  if (captures.length !== 6 || captures.some((c) => c.length !== 9)) {
    return null;
  }

  const faceOrders = permutations(FACE_ORDER).sort(
    (a, b) => assignmentCost(captures, a) - assignmentCost(captures, b),
  );

  for (const faceOrder of faceOrders) {
    const trial = new Map<FaceId, StickerColor[]>();
    for (let i = 0; i < 6; i++) {
      trial.set(faceOrder[i]!, captures[i]!);
    }

    const facelet = findSolvableFacelet(trial, isSolvableFacelet);
    if (facelet) {
      return facelet;
    }
  }

  return null;
}
