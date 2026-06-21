import type { CubePose, DetectedFace, FrameResult, StickerColor } from '../../types';
import { detectCubeFace } from './cubeDetector';
import { RotationDetector } from './rotationDetector';

export class FrameProcessor {
  private rotationDetector = new RotationDetector();
  private trackingEnabled = false;
  private processCanvas: HTMLCanvasElement;
  private processCtx: CanvasRenderingContext2D;

  constructor() {
    this.processCanvas = document.createElement('canvas');
    const ctx = this.processCanvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) throw new Error('Canvas 2D context unavailable');
    this.processCtx = ctx;
  }

  enableTracking(): void {
    this.trackingEnabled = true;
    this.rotationDetector.reset();
  }

  disableTracking(): void {
    this.trackingEnabled = false;
    this.rotationDetector.reset();
  }

  syncPose(pose: CubePose): void {
    this.rotationDetector.sync(pose.rotationMatrix);
  }

  process(video: HTMLVideoElement): FrameResult {
    const width = video.videoWidth;
    const height = video.videoHeight;

    if (!width || !height) {
      return { pose: null, detectedFace: null, rotationMove: null };
    }

    this.processCanvas.width = width;
    this.processCanvas.height = height;
    this.processCtx.drawImage(video, 0, 0, width, height);

    let detectedFace: DetectedFace | null = null;
    try {
      detectedFace = detectCubeFace(this.processCanvas, width, height);
    } catch {
      return { pose: null, detectedFace: null, rotationMove: null };
    }

    if (!detectedFace) {
      return { pose: null, detectedFace: null, rotationMove: null };
    }

    let rotationMove = null;
    if (this.trackingEnabled) {
      rotationMove = this.rotationDetector.update(detectedFace.pose.rotationMatrix);
    }

    return {
      pose: detectedFace.pose,
      detectedFace,
      rotationMove,
    };
  }

  readStableFace(
    video: HTMLVideoElement,
    samples = 5,
  ): { colors: StickerColor[]; pose: CubePose } | null {
    const readings: StickerColor[][] = [];
    let lastPose: CubePose | null = null;

    for (let i = 0; i < samples; i++) {
      const result = this.process(video);
      if (!result.detectedFace) return null;
      readings.push(result.detectedFace.colors);
      lastPose = result.detectedFace.pose;
    }

    if (!lastPose) return null;

    const colors = majorityVote(readings);
    return { colors, pose: lastPose };
  }
}

function majorityVote(readings: StickerColor[][]): StickerColor[] {
  const result: StickerColor[] = [];
  for (let i = 0; i < 9; i++) {
    const counts = new Map<StickerColor, number>();
    for (const reading of readings) {
      const c = reading[i]!;
      counts.set(c, (counts.get(c) ?? 0) + 1);
    }
    let best: StickerColor = 'W';
    let bestCount = 0;
    for (const [color, count] of counts) {
      if (count > bestCount) {
        bestCount = count;
        best = color;
      }
    }
    result.push(best);
  }
  return result;
}
