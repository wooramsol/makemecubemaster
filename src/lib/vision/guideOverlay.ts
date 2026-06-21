import { getGuideSquare } from './roi';

export interface GuideOverlayRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

/** object-fit: cover 기준으로 프레임 좌표 → 화면 좌표 변환 */
export function getCoverTransform(
  frameWidth: number,
  frameHeight: number,
  containerWidth: number,
  containerHeight: number,
) {
  const scale = Math.max(containerWidth / frameWidth, containerHeight / frameHeight);
  const displayW = frameWidth * scale;
  const displayH = frameHeight * scale;
  return {
    scale,
    offsetX: (containerWidth - displayW) / 2,
    offsetY: (containerHeight - displayH) / 2,
  };
}

/** 실제 색상 샘플링 영역과 일치하는 점선 가이드 위치 */
export function getGuideOverlayRect(
  frameWidth: number,
  frameHeight: number,
  containerWidth: number,
  containerHeight: number,
): GuideOverlayRect | null {
  if (!frameWidth || !frameHeight || !containerWidth || !containerHeight) {
    return null;
  }

  const guide = getGuideSquare(frameWidth, frameHeight);
  const { scale, offsetX, offsetY } = getCoverTransform(
    frameWidth,
    frameHeight,
    containerWidth,
    containerHeight,
  );

  return {
    left: offsetX + guide.x * scale,
    top: offsetY + guide.y * scale,
    width: guide.size * scale,
    height: guide.size * scale,
  };
}
