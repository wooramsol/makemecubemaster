import type { Point2D } from '../../types';

/** 화면 중앙 정사각형 가이드 비율 (카메라 프레임 대비) */
export const GUIDE_SIZE_RATIO = 0.62;

/** 흰색 기준용 중앙 스팟 (가이드 대비 한 변 비율) — 옆 색 번짐 회피 */
export const WB_SPOT_RATIO = 0.22;

/** 화면 중앙 정사각형 가이드 (카메라 프레임 좌표) */
export function getGuideSquare(frameWidth: number, frameHeight: number) {
  const size = Math.min(frameWidth, frameHeight) * GUIDE_SIZE_RATIO;
  return {
    x: (frameWidth - size) / 2,
    y: (frameHeight - size) / 2,
    size,
  };
}

/** Center spot for single-sticker color sampling */
export function getColorSampleSpot(guide: { x: number; y: number; size: number }) {
  const spotSize = guide.size * WB_SPOT_RATIO;
  return {
    x: guide.x + (guide.size - spotSize) / 2,
    y: guide.y + (guide.size - spotSize) / 2,
    size: spotSize,
  };
}

export function guideToCorners(guide: {
  x: number;
  y: number;
  size: number;
}): [Point2D, Point2D, Point2D, Point2D] {
  const { x, y, size } = guide;
  return [
    { x, y },
    { x: x + size, y },
    { x: x + size, y: y + size },
    { x, y: y + size },
  ];
}

export function isQuadInsideGuide(
  corners: [Point2D, Point2D, Point2D, Point2D],
  frameWidth: number,
  frameHeight: number,
  margin = 0.15,
): boolean {
  const guide = getGuideSquare(frameWidth, frameHeight);
  const cx = corners.reduce((s, p) => s + p.x, 0) / 4;
  const cy = corners.reduce((s, p) => s + p.y, 0) / 4;
  const m = guide.size * margin;
  return (
    cx >= guide.x + m &&
    cx <= guide.x + guide.size - m &&
    cy >= guide.y + m &&
    cy <= guide.y + guide.size - m
  );
}

export function translateCorners(
  corners: [Point2D, Point2D, Point2D, Point2D],
  dx: number,
  dy: number,
): [Point2D, Point2D, Point2D, Point2D] {
  return corners.map((p) => ({ x: p.x + dx, y: p.y + dy })) as [
    Point2D,
    Point2D,
    Point2D,
    Point2D,
  ];
}

/** 미러된 비디오 표시에 맞춰 X 좌표 반전 */
export function mirrorCornersX(
  corners: [Point2D, Point2D, Point2D, Point2D],
  frameWidth: number,
): [Point2D, Point2D, Point2D, Point2D] {
  return corners.map((p) => ({ x: frameWidth - p.x, y: p.y })) as [
    Point2D,
    Point2D,
    Point2D,
    Point2D,
  ];
}
