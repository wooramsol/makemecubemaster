import type { StickerColor } from '../../types';
import {
  isCalibratedWhitePixel,
  isLikelyYellowPixel,
  warmLightYellowPenalty,
} from './colorCalibration';
import { applyWhiteBalance, isWhiteBalanceCalibrated } from './whiteBalance';

const ALL_COLORS: StickerColor[] = ['R', 'O', 'Y', 'G', 'B', 'W'];

/** cubejs / 표준 큐브 기준 LAB 참조색 */
const LAB_REFS: Record<StickerColor, [number, number, number]> = {
  W: [95, 0, 0],
  Y: [88, -4, 82],
  R: [48, 62, 38],
  O: [62, 42, 62],
  G: [55, -48, 32],
  B: [32, 28, -52],
};

function rgbToXyz(r: number, g: number, b: number): [number, number, number] {
  const sr = pivot(r / 255);
  const sg = pivot(g / 255);
  const sb = pivot(b / 255);
  return [
    sr * 0.4124564 + sg * 0.3575761 + sb * 0.1804375,
    sr * 0.2126729 + sg * 0.7151522 + sb * 0.072175,
    sr * 0.0193339 + sg * 0.119192 + sb * 0.9503041,
  ];
}

function pivot(v: number): number {
  return v > 0.04045 ? ((v + 0.055) / 1.055) ** 2.4 : v / 12.92;
}

function xyzToLab(x: number, y: number, z: number): [number, number, number] {
  const xn = 0.95047;
  const yn = 1;
  const zn = 1.08883;
  const fx = labPivot(x / xn);
  const fy = labPivot(y / yn);
  const fz = labPivot(z / zn);
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

function labPivot(t: number): number {
  return t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116;
}

function rgbToLab(r: number, g: number, b: number): [number, number, number] {
  const [x, y, z] = rgbToXyz(r, g, b);
  return xyzToLab(x, y, z);
}

function labDistance(a: [number, number, number], b: [number, number, number]): number {
  const dl = a[0] - b[0];
  const da = a[1] - b[1];
  const db = a[2] - b[2];
  return Math.sqrt(dl * dl + da * da + db * db);
}

function rgbToHsv(r: number, g: number, b: number): [number, number, number] {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const d = max - min;

  let hue = 0;
  if (d > 0) {
    if (max === rn) hue = ((gn - bn) / d) % 6;
    else if (max === gn) hue = (bn - rn) / d + 2;
    else hue = (rn - gn) / d + 4;
    hue *= 60;
    if (hue < 0) hue += 360;
  }

  const sat = max === 0 ? 0 : (d / max) * 255;
  const val = max * 255;
  return [hue, sat, val];
}

function classifyByLab(r: number, g: number, b: number): StickerColor {
  const lab = rgbToLab(r, g, b);
  let best: StickerColor = 'W';
  let bestDist = Infinity;
  for (const color of ALL_COLORS) {
    const dist = labDistance(lab, LAB_REFS[color]);
    if (dist < bestDist) {
      bestDist = dist;
      best = color;
    }
  }
  return best;
}

function isGapPixel(r: number, g: number, b: number): boolean {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max < 38) return true;
  if (max < 70 && max - min < 22) return true;
  return false;
}

function isWhitePixel(r: number, g: number, b: number): boolean {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const chroma = max - min;
  const avg = (r + g + b) / 3;

  if (max < 125 || chroma > 42) return false;
  if (b > r + 22 && b > g + 12) return false;
  if (r > g + 22 && r > b + 22) return false;
  if (g > r + 18 && g > b + 18) return false;

  return avg > 145 && chroma < 38;
}

function scoreColor(r: number, g: number, b: number, color: StickerColor): number {
  const lab = rgbToLab(r, g, b);
  const dist = labDistance(lab, LAB_REFS[color]);
  return 1 / (1 + dist);
}

export function classifySticker(r: number, g: number, b: number): StickerColor {
  [r, g, b] = applyWhiteBalance(r, g, b);
  if (isGapPixel(r, g, b)) return classifyByLab(r, g, b);

  if (isCalibratedWhitePixel(r, g, b)) return 'W';

  const [h, s] = rgbToHsv(r, g, b);
  const sn = s / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const chroma = max - min;
  const brightness = (r + g + b) / 3;

  if (isWhiteBalanceCalibrated()) {
    if (brightness > 175 && chroma < 45) return 'W';
    if (brightness > 155 && chroma < 28) return 'W';
  }

  if (isWhitePixel(r, g, b)) return 'W';

  const scores = new Map<StickerColor, number>();
  for (const color of ALL_COLORS) {
    scores.set(color, scoreColor(r, g, b, color));
  }

  if (b >= r + 14 && b >= g + 10 && b > 75) {
    scores.set('B', (scores.get('B') ?? 0) + 0.55);
  }
  if (r >= g + 12 && r >= b + 12 && r > 85) {
    scores.set('R', (scores.get('R') ?? 0) + 0.45);
  }
  if (g >= r + 10 && g >= b + 10 && g > 70) {
    scores.set('G', (scores.get('G') ?? 0) + 0.45);
  }
  if (isLikelyYellowPixel(r, g, b) || (r > 95 && g > 85 && b < Math.min(r, g) - 18)) {
    scores.set('Y', (scores.get('Y') ?? 0) + 0.55);
  }
  if (r > g + 8 && g > b + 5 && r > 110 && h >= 8 && h < 42) {
    scores.set('O', (scores.get('O') ?? 0) + 0.45);
  }

  if (sn > 0.18) {
    if (h >= 38 && h <= 72) scores.set('Y', (scores.get('Y') ?? 0) + 0.25);
    if (h >= 10 && h < 38) scores.set('O', (scores.get('O') ?? 0) + 0.2);
    if (h <= 12 || h >= 345) scores.set('R', (scores.get('R') ?? 0) + 0.2);
    if (h >= 78 && h <= 155) scores.set('G', (scores.get('G') ?? 0) + 0.2);
    if (h >= 165 && h <= 255) scores.set('B', (scores.get('B') ?? 0) + 0.3);
  }

  if (max > 175 && sn < 0.22 && !isWhitePixel(r, g, b)) {
    scores.set('W', (scores.get('W') ?? 0) - 0.35);
  }

  scores.set('Y', (scores.get('Y') ?? 0) - warmLightYellowPenalty(r, g, b));

  let best: StickerColor = 'W';
  let bestScore = -Infinity;
  for (const [color, score] of scores) {
    if (score > bestScore) {
      bestScore = score;
      best = color;
    }
  }
  return best;
}

function median(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 1
    ? sorted[mid]!
    : Math.round((sorted[mid - 1]! + sorted[mid]!) / 2);
}

function cellSampleMargin(row: number, col: number): number {
  if (row === 1 && col === 1) return 0.12;
  const isCorner =
    (row === 0 || row === 2) && (col === 0 || col === 2);
  if (isCorner) return 0.32;
  return 0.26;
}

function pixelStickerWeight(r: number, g: number, b: number): number {
  const chroma = Math.max(r, g, b) - Math.min(r, g, b);
  if (chroma > 52) return 0.15;
  if (chroma > 36) return 0.55;
  return 1;
}

function classifyCellPixels(
  data: Uint8ClampedArray,
  width: number,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
): StickerColor {
  const votes = new Map<StickerColor, number>();
  const rs: number[] = [];
  const gs: number[] = [];
  const bs: number[] = [];
  const cellW = x1 - x0;
  const step = cellW > 40 ? 1 : 2;

  for (let y = Math.floor(y0); y < Math.floor(y1); y += step) {
    for (let x = Math.floor(x0); x < Math.floor(x1); x += step) {
      const i = (y * width + x) * 4;
      const r = data[i]!;
      const g = data[i + 1]!;
      const b = data[i + 2]!;
      if (isGapPixel(r, g, b)) continue;

      rs.push(r);
      gs.push(g);
      bs.push(b);

      const color = classifySticker(r, g, b);
      const weight = pixelStickerWeight(r, g, b);
      votes.set(color, (votes.get(color) ?? 0) + weight);
    }
  }

  if (rs.length === 0) {
    const cx = Math.floor((x0 + x1) / 2);
    const cy = Math.floor((y0 + y1) / 2);
    const i = (cy * width + cx) * 4;
    return classifySticker(data[i]!, data[i + 1]!, data[i + 2]!);
  }

  const medianColor = classifySticker(median(rs), median(gs), median(bs));
  votes.set(medianColor, (votes.get(medianColor) ?? 0) + 3);

  let best: StickerColor = medianColor;
  let bestVotes = 0;
  for (const [color, count] of votes) {
    if (count > bestVotes) {
      bestVotes = count;
      best = color;
    }
  }
  return best;
}

export function sampleFaceColors(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
): StickerColor[] {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  const colors: StickerColor[] = [];
  const cellW = width / 3;
  const cellH = height / 3;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const margin = cellSampleMargin(row, col);
      const x0 = col * cellW + cellW * margin;
      const x1 = col * cellW + cellW * (1 - margin);
      const y0 = row * cellH + cellH * margin;
      const y1 = row * cellH + cellH * (1 - margin);
      colors.push(classifyCellPixels(data, width, x0, y0, x1, y1));
    }
  }

  return colors;
}

export function emptyColorCounts(): Record<StickerColor, number> {
  return { R: 0, O: 0, Y: 0, G: 0, B: 0, W: 0 };
}

export function countStickerColors(colors: StickerColor[]): Record<StickerColor, number> {
  const counts = emptyColorCounts();
  for (const c of colors) {
    counts[c]++;
  }
  return counts;
}

export function getDominantSticker(colors: StickerColor[]): {
  dominant: StickerColor;
  count: number;
} {
  const counts = countStickerColors(colors);
  let dominant: StickerColor = 'W';
  let count = 0;
  for (const color of ALL_COLORS) {
    if (counts[color] > count) {
      count = counts[color];
      dominant = color;
    }
  }
  return { dominant, count };
}

export function isColorsReadable(colors: StickerColor[] | null): boolean {
  return Boolean(colors && colors.length === 9);
}

export function getCalibrationFeedback(colors: StickerColor[] | null): {
  valid: boolean;
  colorCounts: Record<StickerColor, number>;
  detectedCenter: StickerColor | null;
  uniqueColors: number;
} {
  if (!isColorsReadable(colors)) {
    return {
      valid: false,
      colorCounts: emptyColorCounts(),
      detectedCenter: null,
      uniqueColors: 0,
    };
  }

  const colorCounts = countStickerColors(colors!);
  const uniqueColors = Object.values(colorCounts).filter((n) => n > 0).length;

  return {
    valid: true,
    colorCounts,
    detectedCenter: colors![4] ?? null,
    uniqueColors,
  };
}
