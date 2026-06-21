import type { StickerColor } from '../../types';
import { sampleFaceColors } from './colorClassifier';

const WARP = 256;

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

/** 큐브 스티커가 가이드 안에 있을 때만 true (얼굴/배경만 있으면 false) */
export function isRegionCubeLike(
  colors: StickerColor[],
  variance: number,
): boolean {
  if (colors.length !== 9) return false;
  const unique = new Set(colors);
  const nonWhite = colors.filter((c) => c !== 'W').length;

  // 스티커 색 다양성 + 픽셀 분산
  if (variance < 120) return false;
  if (unique.size >= 2 && nonWhite >= 2) return true;
  if (unique.size >= 1 && nonWhite >= 4 && variance > 200) return true;

  return false;
}
