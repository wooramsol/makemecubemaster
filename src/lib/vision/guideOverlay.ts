import { getGuideSquare, getColorSampleSpot } from './roi';
import { SELFIE_CAMERA_MODE } from './selfieView';

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

/** Map a frame-space rectangle to viewport pixels (object-fit: cover + selfie mirror). */
export function mapFrameRectToViewport(
  frameX: number,
  frameY: number,
  frameW: number,
  frameH: number,
  frameWidth: number,
  frameHeight: number,
  containerWidth: number,
  containerHeight: number,
): GuideOverlayRect {
  const { scale, offsetX, offsetY } = getCoverTransform(
    frameWidth,
    frameHeight,
    containerWidth,
    containerHeight,
  );
  const left = offsetX + frameX * scale;
  const top = offsetY + frameY * scale;
  const width = frameW * scale;
  const height = frameH * scale;

  if (SELFIE_CAMERA_MODE) {
    return {
      left: containerWidth - left - width,
      top,
      width,
      height,
    };
  }

  return { left, top, width, height };
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
  return mapFrameRectToViewport(
    guide.x,
    guide.y,
    guide.size,
    guide.size,
    frameWidth,
    frameHeight,
    containerWidth,
    containerHeight,
  );
}

/** 풀이 단계 — 면 스캔과 동일한 가이드 영역 사용 */
export function getSolvingScanOverlayRect(
  frameWidth: number,
  frameHeight: number,
  containerWidth: number,
  containerHeight: number,
): GuideOverlayRect | null {
  return getGuideOverlayRect(frameWidth, frameHeight, containerWidth, containerHeight);
}

/** Place a side panel to the right of the guide frame, vertically centered in viewport. */
export function getPanelBesideGuideStyle(
  guideRect: GuideOverlayRect,
  viewportWidth: number,
  viewportHeight: number,
  panelMaxWidth = 168,
  gap = 10,
): { left: string; top: string; transform: string; maxWidth: string } {
  const width = Math.min(panelMaxWidth, Math.max(148, viewportWidth * 0.36));
  const left = Math.min(guideRect.left + guideRect.width + gap, viewportWidth - width - 8);
  const panelHeight = 200;
  const idealTop = guideRect.top + guideRect.height / 2;
  const minTop = panelHeight / 2 + 56;
  const maxTop = Math.max(minTop, viewportHeight - panelHeight / 2 - 72);
  const top = Math.max(minTop, Math.min(idealTop, maxTop));
  return {
    left: `${left}px`,
    top: `${top}px`,
    transform: 'translateY(-50%)',
    maxWidth: `${width}px`,
  };
}

/** White-balance spot (viewport coordinates) */
export function getWhiteSpotOverlayRect(
  frameWidth: number,
  frameHeight: number,
  containerWidth: number,
  containerHeight: number,
): GuideOverlayRect | null {
  if (!frameWidth || !frameHeight || !containerWidth || !containerHeight) {
    return null;
  }

  const guide = getGuideSquare(frameWidth, frameHeight);
  const spot = getColorSampleSpot(guide);
  return mapFrameRectToViewport(
    spot.x,
    spot.y,
    spot.size,
    spot.size,
    frameWidth,
    frameHeight,
    containerWidth,
    containerHeight,
  );
}
