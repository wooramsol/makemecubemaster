import type { FaceId, StickerColor } from '../../types';
import { buildFaceletFromMap } from './state';

const FACE_ORDER: FaceId[] = ['U', 'R', 'F', 'D', 'L', 'B'];

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

export function allFaceRotations(colors: StickerColor[]): StickerColor[][] {
  const rotations = [colors];
  let current = colors;
  for (let i = 0; i < 3; i++) {
    current = rotateFaceClockwise(current);
    rotations.push(current);
  }
  return rotations;
}

/**
 * Each scanned face may be rotated in the user's hand. Try all 4^6 orientations
 * and return the first facelet string that passes the solvability check.
 */
export function findSolvableFacelet(
  faces: Map<FaceId, StickerColor[]>,
  isSolvableFacelet: (facelet: string) => boolean,
): string | null {
  const rotationsByFace = FACE_ORDER.map((faceId) => {
    const colors = faces.get(faceId);
    if (!colors || colors.length !== 9) {
      throw new Error(`Missing face data for ${faceId}`);
    }
    return allFaceRotations(colors);
  });

  const indices = [0, 0, 0, 0, 0, 0];

  for (;;) {
    const trial = new Map<FaceId, StickerColor[]>();
    for (let i = 0; i < FACE_ORDER.length; i++) {
      trial.set(FACE_ORDER[i]!, rotationsByFace[i]![indices[i]!]!);
    }

    const facelet = buildFaceletFromMap(trial);
    if (isSolvableFacelet(facelet)) {
      return facelet;
    }

    let digit = 0;
    while (digit < FACE_ORDER.length) {
      indices[digit]! += 1;
      if (indices[digit]! < 4) break;
      indices[digit] = 0;
      digit += 1;
    }
    if (digit >= FACE_ORDER.length) break;
  }

  return null;
}
