import type { FaceId, StickerColor } from '../../types';

export const SELFIE_CAMERA_MODE = true;

/** Raw camera frame — mirroring happens once on the 3×3 color grid, not the canvas. */
export function drawCameraFrame(
  ctx: CanvasRenderingContext2D,
  video: HTMLVideoElement,
  width: number,
  height: number,
): void {
  ctx.drawImage(video, 0, 0, width, height);
}

/**
 * Map raw guide-grid colors to mirrored selfie preview order.
 * Prefer storing raw colors and mirroring in `FaceColorGrid` instead.
 */
export function toSelfiePreviewColors(colors: StickerColor[]): StickerColor[] {
  if (colors.length !== 9) return colors;

  const out: StickerColor[] = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 2; col >= 0; col--) {
      out.push(colors[row * 3 + col]!);
    }
  }
  return out;
}

export function cloneFaceColorsMap(
  faces: Map<FaceId, StickerColor[]>,
): Map<FaceId, StickerColor[]> {
  const copy = new Map<FaceId, StickerColor[]>();
  for (const [faceId, colors] of faces) {
    copy.set(faceId, [...colors]);
  }
  return copy;
}
