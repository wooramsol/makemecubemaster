import type { DetectedFace, Point2D, StickerColor } from '../../types';
import type { OpenCVMat } from '../../types/opencv';
import { sampleFaceColors } from './colorClassifier';
import { estimatePoseFromCorners, orderCorners } from './poseTracker';

const WARP_SIZE = 150;

function isSquareLike(corners: [Point2D, Point2D, Point2D, Point2D]): boolean {
  const d = (a: Point2D, b: Point2D) => Math.hypot(a.x - b.x, a.y - b.y);
  const top = d(corners[0], corners[1]);
  const right = d(corners[1], corners[2]);
  const bottom = d(corners[2], corners[3]);
  const left = d(corners[3], corners[0]);
  const avg = (top + right + bottom + left) / 4;
  if (avg < 1) return false;
  const sides = [top, right, bottom, left];
  return sides.every((s) => Math.abs(s - avg) / avg < 0.45);
}

function scoreQuad(
  corners: [Point2D, Point2D, Point2D, Point2D],
  area: number,
  frameWidth: number,
  frameHeight: number,
): number {
  const frameArea = frameWidth * frameHeight;
  const ratio = area / frameArea;
  if (ratio < 0.006 || ratio > 0.65) return 0;
  if (!isSquareLike(corners)) return area * 0.3;

  const quadCx = corners.reduce((s, p) => s + p.x, 0) / 4;
  const quadCy = corners.reduce((s, p) => s + p.y, 0) / 4;
  const centerDist = Math.hypot(quadCx - frameWidth / 2, quadCy - frameHeight / 2);
  const maxDist = Math.hypot(frameWidth / 2, frameHeight / 2);
  const centrality = 1 - Math.min(1, centerDist / maxDist);

  return area * (0.6 + centrality * 0.4);
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
    if (area < frameArea * 0.006) {
      contour.delete();
      continue;
    }

    const peri = cv.arcLength(contour, true);
    for (const eps of [0.02, 0.035, 0.05]) {
      const approx = new cv.Mat();
      cv.approxPolyDP(contour, approx, eps * peri, true);

      if (approx.rows >= 4 && approx.rows <= 6) {
        const points: Point2D[] = [];
        const count = Math.min(approx.rows, 4);
        for (let j = 0; j < count; j++) {
          points.push({
            x: approx.data32S[j * 2]!,
            y: approx.data32S[j * 2 + 1]!,
          });
        }

        if (points.length === 4) {
          const ordered = orderCorners(points);
          if (ordered) {
            const score = scoreQuad(ordered, area, frameWidth, frameHeight);
            if (score > bestScore) {
              bestScore = score;
              bestCorners = ordered;
            }
          }
        }
      }

      approx.delete();
    }

    contour.delete();
  }

  return bestCorners;
}

export function detectCubeCorners(
  sourceCanvas: HTMLCanvasElement,
  frameWidth: number,
  frameHeight: number,
): [Point2D, Point2D, Point2D, Point2D] | null {
  const cv = window.cv;
  const src = cv.imread(sourceCanvas);
  const rgb = new cv.Mat();
  const gray = new cv.Mat();
  const blurred = new cv.Mat();
  const edges = new cv.Mat();
  const thresh = new cv.Mat();
  const combined = new cv.Mat();
  const contours = new cv.MatVector();
  const hierarchy = new cv.Mat();

  cv.cvtColor(src, rgb, cv.COLOR_RGBA2RGB);
  cv.cvtColor(rgb, gray, cv.COLOR_RGB2GRAY);
  cv.GaussianBlur(gray, blurred, new cv.Size(5, 5), 0);
  cv.Canny(blurred, edges, 30, 100);
  cv.threshold(blurred, thresh, 0, 255, cv.THRESH_BINARY + cv.THRESH_OTSU);
  cv.bitwise_or(edges, thresh, combined);
  cv.findContours(combined, contours, hierarchy, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE);

  let best = findBestQuad(contours, cv, frameWidth, frameHeight);

  if (!best) {
    contours.delete();
    hierarchy.delete();
    cv.Canny(blurred, edges, 20, 80);
    contours.delete();
    const contours2 = new cv.MatVector();
    cv.findContours(edges, contours2, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);
    best = findBestQuad(contours2, cv, frameWidth, frameHeight);
    contours2.delete();
  } else {
    contours.delete();
  }

  src.delete();
  rgb.delete();
  gray.delete();
  blurred.delete();
  edges.delete();
  thresh.delete();
  combined.delete();
  hierarchy.delete();

  return best;
}

export function detectCubeFace(
  sourceCanvas: HTMLCanvasElement,
  frameWidth: number,
  frameHeight: number,
): DetectedFace | null {
  const corners = detectCubeCorners(sourceCanvas, frameWidth, frameHeight);
  if (!corners) return null;

  const colors = warpAndSampleColors(sourceCanvas, corners);
  const pose = estimatePoseFromCorners(corners, frameWidth, frameHeight);

  return { colors, pose };
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
  const cv = window.cv;
  const src = cv.imread(sourceCanvas);
  const rgb = new cv.Mat();
  cv.cvtColor(src, rgb, cv.COLOR_RGBA2RGB);

  const srcTri = cv.matFromArray(4, 1, cv.CV_32FC1, [
    corners[0].x,
    corners[0].y,
    corners[1].x,
    corners[1].y,
    corners[2].x,
    corners[2].y,
    corners[3].x,
    corners[3].y,
  ]);
  const dstTri = cv.matFromArray(4, 1, cv.CV_32FC1, [
    0,
    0,
    WARP_SIZE,
    0,
    WARP_SIZE,
    WARP_SIZE,
    0,
    WARP_SIZE,
  ]);
  const M = cv.getPerspectiveTransform(srcTri, dstTri);
  const dst = new cv.Mat();
  cv.warpPerspective(rgb, dst, M, new cv.Size(WARP_SIZE, WARP_SIZE));

  const warpCanvas = document.createElement('canvas');
  warpCanvas.width = WARP_SIZE;
  warpCanvas.height = WARP_SIZE;
  cv.imshow(warpCanvas, dst);
  const ctx = warpCanvas.getContext('2d', { willReadFrequently: true });
  const colors = ctx ? sampleFaceColors(ctx, WARP_SIZE, WARP_SIZE) : Array(9).fill('W');

  src.delete();
  rgb.delete();
  srcTri.delete();
  dstTri.delete();
  M.delete();
  dst.delete();

  return colors;
}
