import type { FaceId, StickerColor } from '../../types';
import { emptyColorCounts } from './colorClassifier';

const FACE_CENTER: Record<FaceId, StickerColor> = {
  U: 'W',
  D: 'Y',
  F: 'G',
  B: 'B',
  R: 'R',
  L: 'O',
};

const STICKER_COLORS: StickerColor[] = ['W', 'Y', 'R', 'O', 'G', 'B'];
const TARGET_PER_COLOR = 9;

/** 흔한 오인식 쌍 (노란 조명: W↔Y, R↔O) */
const SWAP_PAIRS: [StickerColor, StickerColor][] = [
  ['W', 'Y'],
  ['Y', 'W'],
  ['R', 'O'],
  ['O', 'R'],
  ['W', 'O'],
  ['O', 'W'],
  ['G', 'B'],
  ['B', 'G'],
  ['Y', 'O'],
  ['O', 'Y'],
];

interface MutableCell {
  faceId: FaceId;
  index: number;
  color: StickerColor;
}

function countAllStickers(faces: Map<FaceId, StickerColor[]>): Record<StickerColor, number> {
  const counts = emptyColorCounts();
  for (const colors of faces.values()) {
    for (const c of colors) {
      counts[c]++;
    }
  }
  return counts;
}

/** 가운데 스티커 고정 + 전역 9개 제약 맞추기 */
export function reconcileCubeFaces(
  faces: Map<FaceId, StickerColor[]>,
): Map<FaceId, StickerColor[]> {
  const result = new Map<FaceId, StickerColor[]>();
  for (const [faceId, colors] of faces) {
    const copy = [...colors];
    copy[4] = FACE_CENTER[faceId];
    result.set(faceId, copy);
  }

  const cells: MutableCell[] = [];
  for (const [faceId, colors] of result) {
    for (let i = 0; i < 9; i++) {
      if (i === 4) continue;
      cells.push({ faceId, index: i, color: colors[i]! });
    }
  }

  for (let iter = 0; iter < 96; iter++) {
    const counts = countAllStickers(result);
    let over: StickerColor | null = null;
    let under: StickerColor | null = null;
    let overAmount = 0;
    let underAmount = 0;

    for (const color of STICKER_COLORS) {
      const diff = counts[color] - TARGET_PER_COLOR;
      if (diff > 0 && diff > overAmount) {
        over = color;
        overAmount = diff;
      }
      if (diff < 0 && -diff > underAmount) {
        under = color;
        underAmount = -diff;
      }
    }

    if (!over || !under) break;

    const canSwap = SWAP_PAIRS.some(([a, b]) => a === over && b === under);
    if (!canSwap) break;

    const cell = cells.find((c) => c.color === over);
    if (!cell) break;

    cell.color = under;
    result.get(cell.faceId)![cell.index] = under;
  }

  return result;
}

export function getStickerImbalance(
  faces: Map<FaceId, StickerColor[]>,
): Record<StickerColor, number> {
  const counts = countAllStickers(faces);
  const imbalance = emptyColorCounts();
  for (const color of STICKER_COLORS) {
    imbalance[color] = counts[color] - TARGET_PER_COLOR;
  }
  return imbalance;
}

export function formatImbalanceHint(faces: Map<FaceId, StickerColor[]>): string {
  const imbalance = getStickerImbalance(faces);
  const labels: Record<StickerColor, string> = {
    W: '흰',
    Y: '노',
    R: '빨',
    O: '주',
    G: '초',
    B: '파',
  };
  const parts = STICKER_COLORS.filter((c) => imbalance[c] !== 0).map((c) => {
    const n = imbalance[c];
    return `${labels[c]}${n > 0 ? `+${n}` : n}`;
  });
  return parts.length > 0 ? `색 개수 오차: ${parts.join(', ')}` : '';
}
