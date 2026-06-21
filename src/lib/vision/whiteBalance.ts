import { getGuideSquare } from './roi';

export interface WhiteBalanceGains {
  r: number;
  g: number;
  b: number;
}

const DEFAULT_GAINS: WhiteBalanceGains = { r: 1, g: 1, b: 1 };
const MIN_GAIN = 0.45;
const MAX_GAIN = 2.2;

let activeGains: WhiteBalanceGains = { ...DEFAULT_GAINS };

export function getWhiteBalance(): WhiteBalanceGains {
  return activeGains;
}

export function setWhiteBalance(gains: WhiteBalanceGains): void {
  activeGains = {
    r: clampGain(gains.r),
    g: clampGain(gains.g),
    b: clampGain(gains.b),
  };
}

export function resetWhiteBalance(): void {
  activeGains = { ...DEFAULT_GAINS };
}

export function isWhiteBalanceCalibrated(): boolean {
  const { r, g, b } = activeGains;
  return Math.abs(r - 1) > 0.03 || Math.abs(g - 1) > 0.03 || Math.abs(b - 1) > 0.03;
}

function clampGain(value: number): number {
  return Math.min(MAX_GAIN, Math.max(MIN_GAIN, value));
}

function clampByte(value: number): number {
  return Math.min(255, Math.max(0, Math.round(value)));
}

export function applyWhiteBalance(r: number, g: number, b: number): [number, number, number] {
  return [
    clampByte(r * activeGains.r),
    clampByte(g * activeGains.g),
    clampByte(b * activeGains.b),
  ];
}

export interface WhiteBalanceSample {
  r: number;
  g: number;
  b: number;
  brightness: number;
  warmth: number;
  ready: boolean;
}

export function measureWhiteBalanceSample(
  sourceCanvas: HTMLCanvasElement,
  frameWidth: number,
  frameHeight: number,
): WhiteBalanceSample | null {
  const ctx = sourceCanvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;

  const guide = getGuideSquare(frameWidth, frameHeight);
  const margin = guide.size * 0.22;
  const x0 = Math.floor(guide.x + margin);
  const y0 = Math.floor(guide.y + margin);
  const w = Math.floor(guide.size - margin * 2);
  const h = Math.floor(guide.size - margin * 2);
  if (w <= 0 || h <= 0) return null;

  const data = ctx.getImageData(x0, y0, w, h).data;
  const rs: number[] = [];
  const gs: number[] = [];
  const bs: number[] = [];

  for (let i = 0; i < data.length; i += 16) {
    const r = data[i]!;
    const g = data[i + 1]!;
    const b = data[i + 2]!;
    const brightness = (r + g + b) / 3;
    if (brightness < 95) continue;
    const chroma = Math.max(r, g, b) - Math.min(r, g, b);
    if (chroma > 95) continue;
    rs.push(r);
    gs.push(g);
    bs.push(b);
  }

  if (rs.length < 12) return null;

  const r = median(rs);
  const g = median(gs);
  const b = median(bs);
  const brightness = (r + g + b) / 3;
  const warmth = (r + g) / 2 - b;

  return {
    r,
    g,
    b,
    brightness,
    warmth,
    ready: brightness > 130 && rs.length >= 20,
  };
}

export function calibrateWhiteBalanceFromCanvas(
  sourceCanvas: HTMLCanvasElement,
  frameWidth: number,
  frameHeight: number,
): { gains: WhiteBalanceGains; sample: WhiteBalanceSample } | null {
  const sample = measureWhiteBalanceSample(sourceCanvas, frameWidth, frameHeight);
  if (!sample || !sample.ready) return null;

  const target = (sample.r + sample.g + sample.b) / 3;
  const gains: WhiteBalanceGains = {
    r: target / Math.max(sample.r, 1),
    g: target / Math.max(sample.g, 1),
    b: target / Math.max(sample.b, 1),
  };

  return { gains, sample };
}

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 1
    ? sorted[mid]!
    : Math.round((sorted[mid - 1]! + sorted[mid]!) / 2);
}
