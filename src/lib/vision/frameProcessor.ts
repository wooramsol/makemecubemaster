import type { CubePose, DetectedFace, FrameResult, Move, StickerColor } from '../../types';
import { identifyFaceFromCenter } from '../cube/colors';
import { createGrayMat, detectCubeCorners, detectCubeFace } from './cubeDetector';
import { OpticalFlowTracker } from './opticalFlowTracker';
import { estimatePoseFromCorners } from './poseTracker';
import { PoseSmoother } from './poseSmoother';
import { RotationDetector } from './rotationDetector';
import { measureColorLearnSpot } from './colorReference';
import { sampleVisibleFaceColors } from './multiFaceSampler';
import { alignPoseToTrackedQuad } from './poseAlign';
import { drawCameraFrame } from './selfieView';
import { GUIDE_SIZE_RATIO, SOLVING_GUIDE_SIZE_RATIO } from './roi';

const LOST_TRACKING_THRESHOLD = 30;

const EMPTY_RESULT: FrameResult = {
  pose: null,
  detectedFace: null,
  rotationMove: null,
  rotationProgress: 0,
  wrongMove: null,
  visibleFaceColors: {},
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
  private solvingScanMode = false;
  private lastSolvingPose: CubePose | null = null;
  private solvingLostFrames = 0;

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

  setSolvingScanMode(on: boolean): void {
    this.solvingScanMode = on;
    if (!on) {
      this.lastSolvingPose = null;
      this.solvingLostFrames = 0;
    }
  }

  /** Seed pose when entering solve — keeps AR alive from last scan. */
  seedSolvingPose(pose: CubePose): void {
    this.lastSolvingPose = pose;
    this.solvingLostFrames = 0;
    this.lastColors = null;
    this.poseSmoother.reset();
    this.poseSmoother.update(pose);
    this.rotationDetector.sync(pose.rotationMatrix);
  }

  private guideRatio(): number | undefined {
    return this.solvingScanMode ? SOLVING_GUIDE_SIZE_RATIO : undefined;
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
      if (this.solvingScanMode) {
        return this.processSolving(width, height);
      }
      if (this.trackingEnabled) {
        const tracked = this.processWithTracking(width, height);
        return tracked;
      }
      return this.processDetectionOnly(width, height);
    } catch {
      return { ...EMPTY_RESULT };
    }
  }

  private processSolving(width: number, height: number): FrameResult {
    const ratios = [SOLVING_GUIDE_SIZE_RATIO, 0.42, GUIDE_SIZE_RATIO];
    for (const ratio of ratios) {
      const detectedFace = detectCubeFace(this.processCanvas, width, height, ratio, true);
      if (!detectedFace) continue;

      this.lastColors = detectedFace.colors;
      let pose = this.poseSmoother.update(detectedFace.pose);
      this.lastSolvingPose = pose;
      this.solvingLostFrames = 0;

      const aligned = alignPoseToTrackedQuad(pose, width, height);
      const visibleFaceColors = sampleVisibleFaceColors(
        this.processCanvas,
        aligned,
        width,
        height,
      );
      const rotation = this.rotationDetector.update(pose.rotationMatrix);

      return {
        pose,
        detectedFace: { colors: detectedFace.colors, pose },
        rotationMove: rotation.completedMove,
        rotationProgress: rotation.progress,
        wrongMove: rotation.wrongMove,
        visibleFaceColors,
      };
    }

    if (this.lastSolvingPose) {
      this.solvingLostFrames++;
      if (this.solvingLostFrames <= 90) {
        const rotation = this.rotationDetector.update(this.lastSolvingPose.rotationMatrix);
        return {
          pose: this.lastSolvingPose,
          detectedFace: null,
          rotationMove: rotation.completedMove,
          rotationProgress: rotation.progress,
          wrongMove: rotation.wrongMove,
          visibleFaceColors: {},
        };
      }
      this.lastSolvingPose = null;
    }

    return { ...EMPTY_RESULT };
  }

  private processDetectionOnly(width: number, height: number): FrameResult {
    const ratio = this.guideRatio();
    const relaxed = this.solvingScanMode;
    const detectedFace = detectCubeFace(this.processCanvas, width, height, ratio, relaxed);
    if (!detectedFace) {
      return { ...EMPTY_RESULT };
    }
    this.lastColors = detectedFace.colors;
    const visibleFaceColors = sampleVisibleFaceColors(
      this.processCanvas,
      detectedFace.pose,
      width,
      height,
    );
    return {
      pose: detectedFace.pose,
      detectedFace,
      rotationMove: null,
      rotationProgress: 0,
      wrongMove: null,
      visibleFaceColors,
    };
  }

  private processWithTracking(width: number, height: number): FrameResult {
    const detectedCorners = detectCubeCorners(
      this.processCanvas,
      width,
      height,
      this.guideRatio(),
    );
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
    if (hintFace) pose = { ...pose, visibleFace: hintFace };
    const lostFrames = this.flowTracker.getLostFrames();
    pose.confidence = detectedCorners
      ? 0.85
      : Math.max(0.35, 0.85 - lostFrames * 0.01);
    pose = this.poseSmoother.update(pose);

    const detectedFace: DetectedFace | null = colors ? { colors, pose } : null;

    const rotation = this.rotationDetector.update(pose.rotationMatrix);
    const visibleFaceColors = sampleVisibleFaceColors(
      this.processCanvas,
      pose,
      width,
      height,
    );

    return {
      pose,
      detectedFace,
      rotationMove: rotation.completedMove,
      rotationProgress: rotation.progress,
      wrongMove: rotation.wrongMove,
      visibleFaceColors,
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
