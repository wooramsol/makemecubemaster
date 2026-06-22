import type { StickerColor } from '../../types';

/** This app is selfie-only: front camera + mirrored preview. */
export const SELFIE_CAMERA_MODE = true;

/**
 * Draw the video frame horizontally flipped so pixel sampling matches the
 * mirrored on-screen preview (CSS scaleX(-1)).
 */
export function drawSelfieVideoFrame(
  ctx: CanvasRenderingContext2D,
  video: HTMLVideoElement,
  width: number,
  height: number,
): void {
  ctx.save();
  ctx.translate(width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, 0, 0, width, height);
  ctx.restore();
}

/** Mirror a 3×3 face grid left-right (camera frame → preview coordinates). */
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
