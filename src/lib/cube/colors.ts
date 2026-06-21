import type { FaceId } from '../../types';

/** 스캔 순서: 면1(U) → 면2(F) → 면3(R) → 면4(B) → 면5(L) → 면6(D) */
export const CALIBRATION_ORDER: FaceId[] = ['U', 'F', 'R', 'B', 'L', 'D'];

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
  return `면 ${FACE_NUMBER[faceId]}`;
}

export function getFaceScanHint(faceId: FaceId): string {
  const n = FACE_NUMBER[faceId];
  if (n === 1) {
    return '섞인 큐브 그대로 — 아무 면부터 가이드 안에 맞추세요';
  }
  return `면 ${n} — 아직 스캔 안 한 다른 면을 보여주세요`;
}

export const FACE_LABELS: Record<FaceId, string> = {
  U: '면 1',
  D: '면 6',
  F: '면 2',
  B: '면 4',
  R: '면 3',
  L: '면 5',
};
