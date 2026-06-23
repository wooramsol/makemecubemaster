import type { CubePose, DetectedFace, FrameResult, Move, StickerColor } from '../../types';
import { identifyFaceFromCenter } from '../cube/colors';
import { createGrayMat, detectCubeCorners, detectCubeFace } from './cubeDetector';
import { OpticalFlowTracker } from './opticalFlowTracker';
import { estimatePoseFromCorners } from './poseTracker';
import { PoseSmoother } from './poseSmoother';
import { RotationDetector } from './rotationDetector';
import { measureColorLearnSpot } from './colorReference';
import { drawCameraFrame } from './selfieView';

const LOST_TRACKING_THRESHOLD = 30;

const EMPTY_RESULT: FrameResult = {
  pose: null,
  detectedFace: null,
  rotationMove: null,
  rotationProgress: 0,
  wrongMove: null,
};

export class FrameProcessor {
  private rotationDetector = new RotationDetector();
  private flowTracker = new OpticalFlowTracker();
  private poseSmoother = new PoseSmoother();
  private trackingEnabled = false;
  private processCanvas: HTMLCanvasElement;
  private processCtx: CanvasRenderingContext2D;
  private lastColors: StickerColor[] | null = null;
  private expectedMove: Move | null = null;

  constructor() {
    this.processCanvas = document.createElement('canvas');
    const ctx = this.processCanvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) throw new Error('Canvas 2D context unavailable');
    this.processCtx = ctx;
  }

  enableTracking(): void {
    this.trackingEnabled = true;
    this.rotationDetector.reset();
    this.flowTracker.reset();
    this.poseSmoother.reset();
  }

  disableTracking(): void {
    this.trackingEnabled = false;
    this.rotationDetector.reset();
    this.flowTracker.reset();
    this.poseSmoother.reset();
    this.lastColors = null;
  }

  setExpectedMove(move: Move | null): void {
    if (move === this.expectedMove) return;
    this.expectedMove = move;
    this.rotationDetector.setExpectedMove(move);
  }

  syncPose(pose: CubePose): void {
    this.rotationDetector.sync(pose.rotationMatrix);
  }

  getFrameCanvas(): HTMLCanvasElement {
    return this.processCanvas;
  }

  captureFrame(video: HTMLVideoElement): boolean {
    const width = video.videoWidth;
    const height = video.videoHeight;
    if (!width || !height) return false;
    this.processCanvas.width = width;
    this.processCanvas.height = height;
    drawCameraFrame(this.processCtx, video, width, height);
    return true;
  }

  getColorLearnSample(
    frameWidth: number,
    frameHeight: number,
    expected: import('../../types').StickerColor,
  ) {
    return measureColorLearnSpot(this.processCanvas, frameWidth, frameHeight, expected);
  }

  process(video: HTMLVideoElement): FrameResult {
    const width = video.videoWidth;
    const height = video.videoHeight;

    if (!width || !height) {
      return { ...EMPTY_RESULT };
    }

    this.processCanvas.width = width;
    this.processCanvas.height = height;
    drawCameraFrame(this.processCtx, video, width, height);

    try {
      if (this.trackingEnabled) {
        return this.processWithTracking(width, height);
      }
      return this.processDetectionOnly(width, height);
    } catch {
      return { ...EMPTY_RESULT };
    }
  }

  private processDetectionOnly(width: number, height: number): FrameResult {
    const detectedFace = detectCubeFace(this.processCanvas, width, height);
    if (!detectedFace) {
      return { ...EMPTY_RESULT };
    }
    this.lastColors = detectedFace.colors;
    return {
      pose: detectedFace.pose,
      detectedFace,
      rotationMove: null,
      rotationProgress: 0,
      wrongMove: null,
    };
  }

  private processWithTracking(width: number, height: number): FrameResult {
    const detectedCorners = detectCubeCorners(this.processCanvas, width, height);
    const gray = createGrayMat(this.processCanvas);
    const corners = this.flowTracker.update(gray, detectedCorners);
    gray.delete();

    if (!corners) {
      return { ...EMPTY_RESULT };
    }

    let colors = this.lastColors;
    if (detectedCorners) {
      const face = detectCubeFace(this.processCanvas, width, height);
      if (face) {
        colors = face.colors;
        this.lastColors = colors;
      }
    }

    const hintFace = colors?.[4] ? identifyFaceFromCenter(colors[4]) : null;
    let pose = estimatePoseFromCorners(corners, width, height, hintFace);
    const lostFrames = this.flowTracker.getLostFrames();
    pose.confidence = detectedCorners
      ? 0.85
      : Math.max(0.35, 0.85 - lostFrames * 0.01);
    pose = this.poseSmoother.update(pose);

    const detectedFace: DetectedFace | null = colors ? { colors, pose } : null;

    const rotation = this.rotationDetector.update(pose.rotationMatrix);

    return {
      pose,
      detectedFace,
      rotationMove: rotation.completedMove,
      rotationProgress: rotation.progress,
      wrongMove: rotation.wrongMove,
    };
  }

  isTrackingLost(): boolean {
    return this.flowTracker.getLostFrames() > LOST_TRACKING_THRESHOLD;
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
