import type { FaceId, StickerColor } from '../../types';

/** Western color scheme: sticker color → cubejs face letter */
export const STICKER_TO_FACE: Record<StickerColor, FaceId> = {
  W: 'U',
  Y: 'D',
  R: 'R',
  O: 'L',
  G: 'F',
  B: 'B',
};

export const FACE_TO_STICKER: Record<FaceId, StickerColor> = {
  U: 'W',
  D: 'Y',
  R: 'R',
  L: 'O',
  F: 'G',
  B: 'B',
};

export const FACE_LABELS: Record<FaceId, string> = {
  U: '흰색 (위)',
  D: '노란색 (아래)',
  F: '초록색 (앞)',
  B: '파란색 (뒤)',
  R: '빨간색 (오른쪽)',
  L: '주황색 (왼쪽)',
};

export const CALIBRATION_ORDER: FaceId[] = ['U', 'F', 'R', 'B', 'L', 'D'];

export const FACE_CENTER_COLORS: Record<FaceId, StickerColor> = {
  U: 'W',
  D: 'Y',
  F: 'G',
  B: 'B',
  R: 'R',
  L: 'O',
};
