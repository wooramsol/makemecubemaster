import type { Point2D } from '../../types';

/** 화면 중앙 정사각형 가이드 (카메라 프레임 좌표) */
export function getGuideSquare(frameWidth: number, frameHeight: number) {
  const size = Math.min(frameWidth, frameHeight) * 0.55;
  return {
    x: (frameWidth - size) / 2,
    y: (frameHeight - size) / 2,
    size,
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
