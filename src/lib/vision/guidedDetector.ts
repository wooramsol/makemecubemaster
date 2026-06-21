import type { StickerColor } from '../../types';
import { getDominantSticker, sampleFaceColors } from './colorClassifier';

const WARP = 150;

export function sampleGuideRegionColors(
  sourceCanvas: HTMLCanvasElement,
  guide: { x: number; y: number; size: number },
): StickerColor[] {
  const temp = document.createElement('canvas');
  temp.width = WARP;
  temp.height = WARP;
  const ctx = temp.getContext('2d', { willReadFrequently: true });
  if (!ctx) return [];

  ctx.drawImage(
    sourceCanvas,
    guide.x,
    guide.y,
    guide.size,
    guide.size,
    0,
    0,
    WARP,
    WARP,
  );

  return sampleFaceColors(ctx, WARP, WARP);
}

export function isRegionCubeLike(colors: StickerColor[]): boolean {
  if (colors.length !== 9) return false;

  const unique = new Set(colors);
  const { count } = getDominantSticker(colors);

  if (count >= 4) return true;

  if (unique.size >= 2) {
    const saturated = colors.filter((c) => c !== 'W').length;
    if (saturated >= 3) return true;
  }

  return false;
}

export function measureColorVariance(
  sourceCanvas: HTMLCanvasElement,
  guide: { x: number; y: number; size: number },
): number {
  const ctx = sourceCanvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return 0;

  const { x, y, size } = guide;
  const data = ctx.getImageData(Math.floor(x), Math.floor(y), Math.floor(size), Math.floor(size))
    .data;
  let sum = 0;
  let sumSq = 0;
  let n = 0;

  for (let i = 0; i < data.length; i += 32) {
    const v = (data[i]! + data[i + 1]! + data[i + 2]!) / 3;
    sum += v;
    sumSq += v * v;
    n++;
  }

  if (n === 0) return 0;
  const mean = sum / n;
  return sumSq / n - mean * mean;
}
