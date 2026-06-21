import type { DetectedFace, Point2D, StickerColor } from '../../types';
import type { OpenCVMat } from '../../types/opencv';
import { sampleFaceColors } from './colorClassifier';
import {
  isRegionCubeLike,
  measureColorVariance,
  sampleGuideRegionColors,
} from './guidedDetector';
import { estimatePoseFromCorners, orderCorners } from './poseTracker';
import { getGuideSquare, guideToCorners, translateCorners } from './roi';

const WARP_SIZE = 150;

function isSquareLike(corners: [Point2D, Point2D, Point2D, Point2D]): boolean {
  const d = (a: Point2D, b: Point2D) => Math.hypot(a.x - b.x, a.y - b.y);
  const sides = [
    d(corners[0], corners[1]),
    d(corners[1], corners[2]),
    d(corners[2], corners[3]),
    d(corners[3], corners[0]),
  ];
  const avg = sides.reduce((a, b) => a + b, 0) / 4;
  if (avg < 1) return false;
  return sides.every((s) => Math.abs(s - avg) / avg < 0.55);
}

function findBestQuad(
  contours: { size(): number; get(i: number): OpenCVMat; delete(): void },
  cv: typeof window.cv,
  frameWidth: number,
  frameHeight: number,
): [Point2D, Point2D, Point2D, Point2D] | null {
  const frameArea = frameWidth * frameHeight;
  let bestCorners: [Point2D, Point2D, Point2D, Point2D] | null = null;
  let bestScore = 0;

  for (let i = 0; i < contours.size(); i++) {
    const contour = contours.get(i);
    const area = cv.contourArea(contour);
    if (area < frameArea * 0.02) {
      contour.delete();
      continue;
    }

    const peri = cv.arcLength(contour, true);
    for (const eps of [0.02, 0.035, 0.05, 0.08]) {
      const approx = new cv.Mat();
      cv.approxPolyDP(contour, approx, eps * peri, true);

      if (approx.rows === 4) {
        const points: Point2D[] = [];
        for (let j = 0; j < 4; j++) {
          points.push({ x: approx.data32S[j * 2]!, y: approx.data32S[j * 2 + 1]! });
        }
        const ordered = orderCorners(points);
        if (ordered && isSquareLike(ordered) && area > bestScore) {
          bestScore = area;
          bestCorners = ordered;
        }
      }
      approx.delete();
    }
    contour.delete();
  }

  return bestCorners;
}

function tryOpenCVDetect(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
): [Point2D, Point2D, Point2D, Point2D] | null {
  if (!window.cv?.Mat) return null;

  try {
    const cv = window.cv;
    const src = cv.imread(canvas);
    const rgb = new cv.Mat();
    const gray = new cv.Mat();
    const blurred = new cv.Mat();
    const edges = new cv.Mat();
    const contours = new cv.MatVector();
    const hierarchy = new cv.Mat();

    cv.cvtColor(src, rgb, cv.COLOR_RGBA2RGB);
    cv.cvtColor(rgb, gray, cv.COLOR_RGB2GRAY);
    cv.GaussianBlur(gray, blurred, new cv.Size(5, 5), 0);
    cv.Canny(blurred, edges, 20, 80);
    cv.findContours(edges, contours, hierarchy, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE);

    const result = findBestQuad(contours, cv, width, height);

    src.delete();
    rgb.delete();
    gray.delete();
    blurred.delete();
    edges.delete();
    contours.delete();
    hierarchy.delete();

    return result;
  } catch {
    return null;
  }
}

/** 가이드 사각형 기반 검출 — OpenCV 실패 시 항상 시도 */
function tryGuidedDetect(
  sourceCanvas: HTMLCanvasElement,
  frameWidth: number,
  frameHeight: number,
): { corners: [Point2D, Point2D, Point2D, Point2D]; colors: StickerColor[] } | null {
  const guide = getGuideSquare(frameWidth, frameHeight);
  const colors = sampleGuideRegionColors(sourceCanvas, guide);
  const variance = measureColorVariance(sourceCanvas, guide);

  if (!isRegionCubeLike(colors, variance)) {
    return null;
  }

  return { corners: guideToCorners(guide), colors };
}

export function detectCubeCorners(
  sourceCanvas: HTMLCanvasElement,
  frameWidth: number,
  frameHeight: number,
): [Point2D, Point2D, Point2D, Point2D] | null {
  const guide = getGuideSquare(frameWidth, frameHeight);

  const roiCanvas = document.createElement('canvas');
  roiCanvas.width = guide.size;
  roiCanvas.height = guide.size;
  const roiCtx = roiCanvas.getContext('2d');
  if (roiCtx) {
    roiCtx.drawImage(
      sourceCanvas,
      guide.x,
      guide.y,
      guide.size,
      guide.size,
      0,
      0,
      guide.size,
      guide.size,
    );
    const roiCorners = tryOpenCVDetect(roiCanvas, guide.size, guide.size);
    if (roiCorners) {
      return translateCorners(roiCorners, guide.x, guide.y);
    }
  }

  const fullCorners = tryOpenCVDetect(sourceCanvas, frameWidth, frameHeight);
  if (fullCorners) return fullCorners;

  const guided = tryGuidedDetect(sourceCanvas, frameWidth, frameHeight);
  return guided?.corners ?? null;
}

export function detectCubeFace(
  sourceCanvas: HTMLCanvasElement,
  frameWidth: number,
  frameHeight: number,
): DetectedFace | null {
  const corners = detectCubeCorners(sourceCanvas, frameWidth, frameHeight);

  if (corners) {
    const colors = warpAndSampleColors(sourceCanvas, corners);
    const pose = estimatePoseFromCorners(corners, frameWidth, frameHeight);
    return { colors, pose };
  }

  const guided = tryGuidedDetect(sourceCanvas, frameWidth, frameHeight);
  if (guided) {
    const pose = estimatePoseFromCorners(guided.corners, frameWidth, frameHeight);
    pose.confidence = 0.7;
    return { colors: guided.colors, pose };
  }

  return null;
}

export function createGrayMat(sourceCanvas: HTMLCanvasElement): import('../../types/opencv').OpenCVMat {
  const cv = window.cv;
  const src = cv.imread(sourceCanvas);
  const gray = new cv.Mat();
  cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);
  src.delete();
  return gray;
}

function warpAndSampleColors(
  sourceCanvas: HTMLCanvasElement,
  corners: [Point2D, Point2D, Point2D, Point2D],
): StickerColor[] {
  if (!window.cv?.Mat) {
    const guide = getGuideSquare(sourceCanvas.width, sourceCanvas.height);
    return sampleGuideRegionColors(sourceCanvas, guide);
  }

  try {
    const cv = window.cv;
    const src = cv.imread(sourceCanvas);
    const rgb = new cv.Mat();
    cv.cvtColor(src, rgb, cv.COLOR_RGBA2RGB);

    const srcTri = cv.matFromArray(4, 1, cv.CV_32FC1, [
      corners[0].x, corners[0].y,
      corners[1].x, corners[1].y,
      corners[2].x, corners[2].y,
      corners[3].x, corners[3].y,
    ]);
    const dstTri = cv.matFromArray(4, 1, cv.CV_32FC1, [
      0, 0, WARP_SIZE, 0, WARP_SIZE, WARP_SIZE, 0, WARP_SIZE,
    ]);
    const M = cv.getPerspectiveTransform(srcTri, dstTri);
    const dst = new cv.Mat();
    cv.warpPerspective(rgb, dst, M, new cv.Size(WARP_SIZE, WARP_SIZE));

    const warpCanvas = document.createElement('canvas');
    warpCanvas.width = WARP_SIZE;
    warpCanvas.height = WARP_SIZE;
    cv.imshow(warpCanvas, dst);
    const ctx = warpCanvas.getContext('2d', { willReadFrequently: true });
    const colors = ctx ? sampleFaceColors(ctx, WARP_SIZE, WARP_SIZE) : [];

    src.delete();
    rgb.delete();
    srcTri.delete();
    dstTri.delete();
    M.delete();
    dst.delete();

    return colors.length === 9 ? colors : sampleGuideRegionColors(sourceCanvas, getGuideSquare(sourceCanvas.width, sourceCanvas.height));
  } catch {
    return sampleGuideRegionColors(sourceCanvas, getGuideSquare(sourceCanvas.width, sourceCanvas.height));
  }
}
