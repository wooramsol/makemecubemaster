import type { DetectedFace, Point2D, StickerColor } from '../../types';
import { sampleFaceColors } from './colorClassifier';
import { estimatePoseFromCorners, orderCorners } from './poseTracker';

const WARP_SIZE = 150;

export function detectCubeFace(
  sourceCanvas: HTMLCanvasElement,
  frameWidth: number,
  frameHeight: number,
): DetectedFace | null {
  const cv = window.cv;
  const src = cv.imread(sourceCanvas);
  const rgb = new cv.Mat();
  const blurred = new cv.Mat();
  const edges = new cv.Mat();
  const contours = new cv.MatVector();
  const hierarchy = new cv.Mat();

  cv.cvtColor(src, rgb, cv.COLOR_RGBA2RGB);
  cv.GaussianBlur(rgb, blurred, new cv.Size(5, 5), 0);
  cv.Canny(blurred, edges, 40, 120);
  cv.findContours(edges, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE);

  let bestCorners: [Point2D, Point2D, Point2D, Point2D] | null = null;
  let bestArea = 0;

  for (let i = 0; i < contours.size(); i++) {
    const contour = contours.get(i);
    const area = cv.contourArea(contour);
    if (area < frameWidth * frameHeight * 0.015) {
      contour.delete();
      continue;
    }

    const peri = cv.arcLength(contour, true);
    const approx = new cv.Mat();
    cv.approxPolyDP(contour, approx, 0.03 * peri, true);

    if (approx.rows === 4) {
      const points: Point2D[] = [];
      for (let j = 0; j < 4; j++) {
        points.push({
          x: approx.data32S[j * 2]!,
          y: approx.data32S[j * 2 + 1]!,
        });
      }

      const ordered = orderCorners(points);
      if (ordered && area > bestArea) {
        bestArea = area;
        bestCorners = ordered;
      }
    }

    approx.delete();
    contour.delete();
  }

  src.delete();
  rgb.delete();
  blurred.delete();
  edges.delete();
  contours.delete();
  hierarchy.delete();

  if (!bestCorners) return null;

  const colors = warpAndSampleColors(sourceCanvas, bestCorners);
  const pose = estimatePoseFromCorners(bestCorners, frameWidth, frameHeight);

  return { colors, pose };
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
