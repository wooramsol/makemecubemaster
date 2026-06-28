import type { FaceId, ReadColor, StickerColor } from '../../types';
import { emptyColorCounts } from './colorClassifier';
import { isKnownColor } from './readColorUtils';

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

/** 색상 간 혼동 비용 (낮을수록 바꾸기 쉬움) */
const SWAP_COST: Record<StickerColor, Record<StickerColor, number>> = {
  W: { W: 0, Y: 1, O: 2, R: 4, G: 5, B: 5 },
  Y: { W: 1, Y: 0, O: 2, R: 5, G: 5, B: 5 },
  R: { R: 0, O: 1, W: 4, Y: 5, G: 5, B: 5 },
  O: { O: 0, R: 1, Y: 2, W: 2, G: 5, B: 5 },
  G: { G: 0, B: 2, W: 5, Y: 5, R: 5, O: 5 },
  B: { B: 0, G: 2, W: 5, Y: 5, R: 5, O: 5 },
};

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

/** Fill uncertain cells using global 9-per-color constraint before reconcile. */
export function fillUncertainCells(
  faces: Map<FaceId, ReadColor[]>,
): Map<FaceId, StickerColor[]> {
  const result = new Map<FaceId, StickerColor[]>();
  const unknowns: { faceId: FaceId; index: number }[] = [];

  for (const [faceId, colors] of faces) {
    const copy: StickerColor[] = [];
    for (let i = 0; i < 9; i++) {
      const c = colors[i]!;
      if (i === 4) {
        copy.push(FACE_CENTER[faceId]);
      } else if (isKnownColor(c)) {
        copy.push(c);
      } else {
        copy.push('W');
        unknowns.push({ faceId, index: i });
      }
    }
    result.set(faceId, copy);
  }

  const counts = countAllStickers(result);

  for (const cell of unknowns) {
    const deficit = findWorstDeficit(counts);
    if (!deficit) break;
    result.get(cell.faceId)![cell.index] = deficit;
    counts[deficit]++;
  }

  return result;
}

export function hasUncertainCells(faces: Map<FaceId, ReadColor[]>): boolean {
  for (const colors of faces.values()) {
    if (colors.some((c) => c === '?')) return true;
  }
  return false;
}

/** Fill ? cells when cube color counts force a unique assignment. */
export function inferUncertainCells(
  faces: Map<FaceId, ReadColor[]>,
): Map<FaceId, ReadColor[]> {
  const result = new Map<FaceId, ReadColor[]>();
  for (const [faceId, colors] of faces) {
    result.set(faceId, [...colors]);
  }

  let changed = true;
  while (changed) {
    changed = false;
    const counts = emptyColorCounts();
    const unknowns: { faceId: FaceId; index: number }[] = [];

    for (const [faceId, colors] of result) {
      for (let i = 0; i < 9; i++) {
        const c = colors[i]!;
        if (i === 4) {
          counts[FACE_CENTER[faceId]]++;
        } else if (isKnownColor(c)) {
          counts[c]++;
        } else if (c === '?') {
          unknowns.push({ faceId, index: i });
        }
      }
    }

    if (unknowns.length === 1) {
      const deficits = STICKER_COLORS.filter((color) => counts[color] < TARGET_PER_COLOR);
      if (deficits.length === 1) {
        const fill = deficits[0]!;
        const cell = unknowns[0]!;
        result.get(cell.faceId)![cell.index] = fill;
        changed = true;
        continue;
      }
    }

    for (const cell of unknowns) {
      const possible = STICKER_COLORS.filter((color) => counts[color] < TARGET_PER_COLOR);
      if (possible.length === 1) {
        const fill = possible[0]!;
        result.get(cell.faceId)![cell.index] = fill;
        counts[fill]++;
        changed = true;
        continue;
      }

      const faceColors = result.get(cell.faceId)!;
      const knownOnFace = faceColors.filter(isKnownColor);
      if (knownOnFace.length >= 7) {
        const tallies = emptyColorCounts();
        for (const c of knownOnFace) tallies[c]++;
        let dominant: StickerColor = knownOnFace[0]!;
        let dominantCount = 0;
        for (const color of STICKER_COLORS) {
          if (tallies[color] > dominantCount) {
            dominantCount = tallies[color];
            dominant = color;
          }
        }
        if (dominantCount >= 7 && counts[dominant] < TARGET_PER_COLOR) {
          result.get(cell.faceId)![cell.index] = dominant;
          counts[dominant]++;
          changed = true;
        }
      }
    }
  }

  return result;
}

function getSwapCost(from: StickerColor, to: StickerColor): number {
  return SWAP_COST[from][to] ?? 6;
}

function findWorstSurplus(counts: Record<StickerColor, number>): StickerColor | null {
  let worst: StickerColor | null = null;
  let amount = 0;
  for (const color of STICKER_COLORS) {
    const diff = counts[color] - TARGET_PER_COLOR;
    if (diff > amount) {
      amount = diff;
      worst = color;
    }
  }
  return worst;
}

function findWorstDeficit(counts: Record<StickerColor, number>): StickerColor | null {
  let worst: StickerColor | null = null;
  let amount = 0;
  for (const color of STICKER_COLORS) {
    const diff = TARGET_PER_COLOR - counts[color];
    if (diff > amount) {
      amount = diff;
      worst = color;
    }
  }
  return worst;
}

function isBalanced(counts: Record<StickerColor, number>): boolean {
  return STICKER_COLORS.every((c) => counts[c] === TARGET_PER_COLOR);
}

/** 가운데 스티커 고정 + 전역 9개 제약 (최소 비용 스왑) */
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

  for (let iter = 0; iter < 256; iter++) {
    const counts = countAllStickers(result);
    if (isBalanced(counts)) break;

    const over = findWorstSurplus(counts);
    const under = findWorstDeficit(counts);
    if (!over || !under) break;

    let bestCell: MutableCell | null = null;
    let bestCost = Infinity;

    for (const cell of cells) {
      if (cell.color !== over) continue;
      const cost = getSwapCost(over, under);
      if (cost < bestCost) {
        bestCost = cost;
        bestCell = cell;
      }
    }

    if (!bestCell) {
      const fallback = cells.find((c) => c.color === over);
      if (!fallback) break;
      bestCell = fallback;
    }

    bestCell.color = under;
    result.get(bestCell.faceId)![bestCell.index] = under;
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

export function isCubeColorBalanced(faces: Map<FaceId, StickerColor[]>): boolean {
  return isBalanced(countAllStickers(faces));
}

export function formatImbalanceHint(faces: Map<FaceId, StickerColor[]>): string {
  const imbalance = getStickerImbalance(faces);
  const labels: Record<StickerColor, string> = {
    W: 'W',
    Y: 'Y',
    R: 'R',
    O: 'O',
    G: 'G',
    B: 'B',
  };
  const parts = STICKER_COLORS.filter((c) => imbalance[c] !== 0).map((c) => {
    const n = imbalance[c];
    return `${labels[c]}${n > 0 ? `+${n}` : n}`;
  });
  return parts.length > 0 ? parts.join(', ') : '';
}
