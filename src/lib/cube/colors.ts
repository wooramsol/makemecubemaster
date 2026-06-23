import type { FaceId, StickerColor } from '../../types';

/** 스캔 순서: 면1(U) → 면2(F) → 면3(R) → 면4(B) → 면5(L) → 면6(D) */
export const CALIBRATION_ORDER: FaceId[] = ['U', 'F', 'R', 'B', 'L', 'D'];

export const ALL_FACES: FaceId[] = ['U', 'F', 'R', 'B', 'L', 'D'];

/** 표준 큐브: 가운데 스티커 색으로 물리 면 식별 */
const CENTER_COLOR_TO_FACE: Record<StickerColor, FaceId> = {
  W: 'U',
  Y: 'D',
  R: 'R',
  O: 'L',
  G: 'F',
  B: 'B',
};

const FACE_CENTER_COLOR: Record<FaceId, StickerColor> = {
  U: 'W',
  D: 'Y',
  F: 'G',
  R: 'R',
  L: 'O',
  B: 'B',
};

export function identifyFaceFromCenter(center: StickerColor): FaceId | null {
  return CENTER_COLOR_TO_FACE[center] ?? null;
}

export function getFaceCenterColor(faceId: FaceId): StickerColor {
  return FACE_CENTER_COLOR[faceId];
}

const FACE_NUMBER: Record<FaceId, number> = {
  U: 1,
  F: 2,
  R: 3,
  B: 4,
  L: 5,
  D: 6,
};

export function getFaceNumber(faceId: FaceId): number {
  return FACE_NUMBER[faceId];
}

export function getFaceLabel(faceId: FaceId): string {
  return `Face ${FACE_NUMBER[faceId]}`;
}

export function getFaceScanHint(faceId: FaceId): string {
  const n = FACE_NUMBER[faceId];
  if (n === 1) {
    return 'Scrambled cube — align any face in the guide';
  }
  return `Face ${n} — show a different unscanned face`;
}

export const FACE_LABELS: Record<FaceId, string> = {
  U: 'Face 1',
  D: 'Face 6',
  F: 'Face 2',
  B: 'Face 4',
  R: 'Face 3',
  L: 'Face 5',
};
