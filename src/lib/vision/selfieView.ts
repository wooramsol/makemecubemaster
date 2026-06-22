import type { FaceId, StickerColor } from '../../types';

/** This app is selfie-only: front camera + mirrored preview. */
export const SELFIE_CAMERA_MODE = true;

/**
 * Draw the raw camera frame (no horizontal flip). Selfie preview mirroring is
 * applied only when converting sampled face cells — see normalizeSelfieFaceColors.
 */
export function drawCameraFrame(
  ctx: CanvasRenderingContext2D,
  video: HTMLVideoElement,
  width: number,
  height: number,
): void {
  ctx.drawImage(video, 0, 0, width, height);
}

/** Mirror a 3×3 face grid left-right (camera frame → on-screen selfie preview). */
export function mirrorFaceCellsHorizontally(colors: StickerColor[]): StickerColor[] {
  if (colors.length !== 9) return colors;

  const mirrored: StickerColor[] = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 2; col >= 0; col--) {
      mirrored.push(colors[row * 3 + col]!);
    }
  }
  return mirrored;
}

/**
 * Convert a face grid sampled from the raw camera canvas into the same
 * left/right orientation as the mirrored video preview (CSS scaleX(-1)).
 */
export function normalizeSelfieFaceColors(colors: StickerColor[]): StickerColor[] {
  return mirrorFaceCellsHorizontally(colors);
}

/** Deep copy so solver work cannot mutate the UI snapshot. */
export function cloneFaceColorsMap(
  faces: Map<FaceId, StickerColor[]>,
): Map<FaceId, StickerColor[]> {
  const copy = new Map<FaceId, StickerColor[]>();
  for (const [faceId, colors] of faces) {
    copy.set(faceId, [...colors]);
  }
  return copy;
}
