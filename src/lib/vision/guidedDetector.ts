import type { StickerColor } from '../../types';
import { sampleFaceColors } from './colorClassifier';

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

/** 가이드 영역에 큐브가 있는지 — 색 다양성/분산으로 판단 (섞인 상태 OK) */
export function isRegionCubeLike(colors: StickerColor[]): boolean {
  if (colors.length !== 9) return false;
  const unique = new Set(colors);
  // 단색 면이든, 모서리에서 여러 색이 보이든 큐브 영역이면 OK
  return unique.size >= 1;
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
