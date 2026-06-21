import type { StickerColor } from '../../types';

interface ColorRef {
  h: number;
  s: number;
  v: number;
  label: StickerColor;
}

const REFERENCES: ColorRef[] = [
  { h: 0, s: 0, v: 220, label: 'W' },
  { h: 28, s: 200, v: 220, label: 'Y' },
  { h: 0, s: 220, v: 200, label: 'R' },
  { h: 12, s: 220, v: 220, label: 'O' },
  { h: 110, s: 200, v: 180, label: 'G' },
  { h: 210, s: 200, v: 180, label: 'B' },
];

function rgbToHsv(r: number, g: number, b: number): [number, number, number] {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const d = max - min;

  let h = 0;
  if (d > 0) {
    if (max === rn) h = ((gn - bn) / d) % 6;
    else if (max === gn) h = (bn - rn) / d + 2;
    else h = (rn - gn) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }

  const s = max === 0 ? 0 : (d / max) * 255;
  const v = max * 255;
  return [h, s, v];
}

function colorDistance(a: [number, number, number], b: ColorRef): number {
  const dh = Math.min(Math.abs(a[0] - b.h), 360 - Math.abs(a[0] - b.h));
  const ds = a[1] - b.s;
  const dv = a[2] - b.v;
  return dh * 0.6 + Math.abs(ds) * 0.8 + Math.abs(dv) * 0.4;
}

export function classifySticker(r: number, g: number, b: number): StickerColor {
  const hsv = rgbToHsv(r, g, b);

  if (hsv[2] > 180 && hsv[1] < 55) return 'W';
  if (hsv[1] < 40 && hsv[2] < 80) return 'B';

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
      const radius = Math.min(cellW, cellH) * 0.22;
      let rSum = 0;
      let gSum = 0;
      let bSum = 0;
      let count = 0;

      for (let dy = -radius; dy <= radius; dy += 2) {
        for (let dx = -radius; dx <= radius; dx += 2) {
          if (dx * dx + dy * dy > radius * radius) continue;
          const px = Math.floor(cx + dx);
          const py = Math.floor(cy + dy);
          if (px < 0 || py < 0 || px >= width || py >= height) continue;
          const data = ctx.getImageData(px, py, 1, 1).data;
          rSum += data[0]!;
          gSum += data[1]!;
          bSum += data[2]!;
          count++;
        }
      }

      if (count === 0) {
        colors.push('W');
        continue;
      }

      colors.push(
        classifySticker(
          Math.round(rSum / count),
          Math.round(gSum / count),
          Math.round(bSum / count),
        ),
      );
    }
  }

  return colors;
}

export function getDominantSticker(colors: StickerColor[]): {
  dominant: StickerColor;
  count: number;
} {
  const counts = new Map<StickerColor, number>();
  for (const c of colors) {
    counts.set(c, (counts.get(c) ?? 0) + 1);
  }
  let dominant: StickerColor = 'W';
  let count = 0;
  for (const [color, n] of counts) {
    if (n > count) {
      count = n;
      dominant = color;
    }
  }
  return { dominant, count };
}

/** 섞인 큐브: 한 면이면 9칸 중 같은 색이 대부분이어야 함 */
export function isFaceReadStable(colors: StickerColor[] | null): boolean {
  if (!colors || colors.length !== 9) return false;
  const { dominant, count } = getDominantSticker(colors);
  const center = colors[4];
  return count >= 5 && center === dominant;
}

export function getCalibrationFeedback(colors: StickerColor[] | null): {
  valid: boolean;
  matchCount: number;
  detectedCenter: StickerColor | null;
} {
  if (!colors || colors.length !== 9) {
    return { valid: false, matchCount: 0, detectedCenter: null };
  }
  const { dominant, count } = getDominantSticker(colors);
  const detectedCenter = colors[4] ?? null;
  const matchCount = count;
  const valid = count >= 5 && detectedCenter === dominant;
  return { valid, matchCount, detectedCenter };
}
