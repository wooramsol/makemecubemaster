import type { StickerColor } from '../../types';
import { getLearnedLabRefs, isColorsCalibrated } from './colorReference';

const ALL_COLORS: StickerColor[] = ['R', 'O', 'Y', 'G', 'B', 'W'];

const FALLBACK_LAB: Record<StickerColor, [number, number, number]> = {
  W: [95, 0, 0],
  Y: [88, -4, 82],
  R: [48, 62, 38],
  O: [62, 42, 62],
  G: [55, -48, 32],
  B: [32, 28, -52],
};

function labRefs(): Record<StickerColor, [number, number, number]> {
  return isColorsCalibrated() ? getLearnedLabRefs() : FALLBACK_LAB;
}

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

function classifyByLab(r: number, g: number, b: number): StickerColor {
  const lab = rgbToLab(r, g, b);
  const refs = labRefs();
  let best: StickerColor = 'W';
  let bestDist = Infinity;
  for (const color of ALL_COLORS) {
    const dist = labDistance(lab, refs[color]);
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

function classifyRelativeSticker(r: number, g: number, b: number): StickerColor {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max < 42) return 'W';

  const chroma = max - min;
  const sum = r + g + b;
  const avg = sum / 3;

  if (chroma < 38 || chroma / max < 0.13) {
    if (avg > 85) return 'W';
  }

  const rn = r / sum;
  const gn = g / sum;
  const bn = b / sum;

  if (bn > rn + 0.05 && bn > gn + 0.04 && bn > 0.29) return 'B';
  if (gn > rn + 0.04 && gn > bn + 0.05 && gn > 0.31) return 'G';

  if (rn > 0.28 && gn > 0.28 && bn < 0.30) {
    if (rn > gn + 0.07) return 'O';
    return 'Y';
  }

  if (rn > gn && rn > bn) {
    if (gn > bn + 0.06 && gn > 0.26) return 'O';
    return 'R';
  }

  return classifyByLab(r, g, b);
}

/** Classify 9 cell medians using per-cell relative chromaticity (lighting-robust). */
export function classifyFaceRelative(
  rgbs: ReadonlyArray<readonly [number, number, number]>,
): StickerColor[] {
  return rgbs.map(([r, g, b]) => classifyRelativeSticker(r, g, b));
}

export function classifySticker(r: number, g: number, b: number): StickerColor {
  if (isGapPixel(r, g, b)) return classifyRelativeSticker(r, g, b);

  if (isColorsCalibrated()) {
    return classifyByLab(r, g, b);
  }

  return classifyRelativeSticker(r, g, b);
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

function sampleCellMedianRgb(
  data: Uint8ClampedArray,
  width: number,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
): [number, number, number] {
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
    }
  }

  if (rs.length === 0) {
    const cx = Math.floor((x0 + x1) / 2);
    const cy = Math.floor((y0 + y1) / 2);
    const i = (cy * width + cx) * 4;
    return [data[i]!, data[i + 1]!, data[i + 2]!];
  }

  return [median(rs), median(gs), median(bs)];
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
  const cellW = width / 3;
  const cellH = height / 3;
  const medians: [number, number, number][] = [];

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const margin = cellSampleMargin(row, col);
      const x0 = col * cellW + cellW * margin;
      const x1 = col * cellW + cellW * (1 - margin);
      const y0 = row * cellH + cellH * margin;
      const y1 = row * cellH + cellH * (1 - margin);
      medians.push(sampleCellMedianRgb(data, width, x0, y0, x1, y1));
    }
  }

  if (!isColorsCalibrated()) {
    return classifyFaceRelative(medians);
  }

  const colors: StickerColor[] = [];
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
