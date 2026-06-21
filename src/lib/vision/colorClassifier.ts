import type { StickerColor } from '../../types';

const ALL_COLORS: StickerColor[] = ['R', 'O', 'Y', 'G', 'B', 'W'];

interface ColorRef {
  h: number;
  s: number;
  v: number;
  label: StickerColor;
}

const REFERENCES: ColorRef[] = [
  { h: 0, s: 0, v: 230, label: 'W' },
  { h: 48, s: 210, v: 230, label: 'Y' },
  { h: 0, s: 230, v: 210, label: 'R' },
  { h: 22, s: 230, v: 230, label: 'O' },
  { h: 120, s: 200, v: 170, label: 'G' },
  { h: 215, s: 210, v: 180, label: 'B' },
];

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

function median(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 1
    ? sorted[mid]!
    : Math.round((sorted[mid - 1]! + sorted[mid]!) / 2);
}

function colorDistance(hsv: [number, number, number], ref: ColorRef): number {
  const dh = Math.min(Math.abs(hsv[0] - ref.h), 360 - Math.abs(hsv[0] - ref.h));
  const ds = hsv[1] - ref.s;
  const dv = hsv[2] - ref.v;
  return dh * 0.7 + Math.abs(ds) * 0.9 + Math.abs(dv) * 0.5;
}

function classifyByNearestRef(hsv: [number, number, number]): StickerColor {
  let best: StickerColor = 'W';
  let bestDist = Infinity;
  for (const ref of REFERENCES) {
    const dist = colorDistance(hsv, ref);
    if (dist < bestDist) {
      bestDist = dist;
      best = ref.label;
    }
  }
  return best;
}

export function classifySticker(r: number, g: number, b: number): StickerColor {
  const [h, s, v] = rgbToHsv(r, g, b);
  const sn = s / 255;
  const vn = v / 255;

  if (vn > 0.52 && sn < 0.3) return 'W';
  if (vn < 0.15) return classifyByNearestRef([h, s, v]);

  if (sn > 0.28) {
    if (h >= 40 && h <= 75) return 'Y';
    if (h >= 12 && h < 40) return 'O';
    if (h <= 12 || h >= 345) return 'R';
    if (h >= 78 && h <= 160) return 'G';
    if (h >= 165 && h <= 255) return 'B';
  }

  return classifyByNearestRef([h, s, v]);
}

function sampleCellRgb(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  width: number,
  height: number,
): [number, number, number] | null {
  const rs: number[] = [];
  const gs: number[] = [];
  const bs: number[] = [];
  const allRs: number[] = [];
  const allGs: number[] = [];
  const allBs: number[] = [];

  for (let dy = -radius; dy <= radius; dy += 2) {
    for (let dx = -radius; dx <= radius; dx += 2) {
      if (dx * dx + dy * dy > radius * radius) continue;
      const px = Math.floor(cx + dx);
      const py = Math.floor(cy + dy);
      if (px < 0 || py < 0 || px >= width || py >= height) continue;

      const data = ctx.getImageData(px, py, 1, 1).data;
      const r = data[0]!;
      const g = data[1]!;
      const b = data[2]!;
      allRs.push(r);
      allGs.push(g);
      allBs.push(b);

      const [, , v] = rgbToHsv(r, g, b);
      if (v < 45) continue;

      rs.push(r);
      gs.push(g);
      bs.push(b);
    }
  }

  const useR = rs.length >= 4 ? rs : allRs;
  const useG = rs.length >= 4 ? gs : allGs;
  const useB = rs.length >= 4 ? bs : allBs;

  if (useR.length === 0) return null;

  return [median(useR), median(useG), median(useB)];
}

export function sampleFaceColors(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
): StickerColor[] {
  const colors: StickerColor[] = [];
  const cellW = width / 3;
  const cellH = height / 3;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const cx = col * cellW + cellW / 2;
      const cy = row * cellH + cellH / 2;
      const radius = Math.min(cellW, cellH) * 0.32;
      const rgb = sampleCellRgb(ctx, cx, cy, radius, width, height);

      if (!rgb) {
        colors.push('W');
        continue;
      }

      colors.push(classifySticker(rgb[0], rgb[1], rgb[2]));
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
