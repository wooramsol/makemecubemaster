import type { FaceId, StickerColor } from '../../types';

export const SELFIE_CAMERA_MODE = true;

/** Raw camera pixels only — never flip the canvas. */
export function drawCameraFrame(
  ctx: CanvasRenderingContext2D,
  video: HTMLVideoElement,
  width: number,
  height: number,
): void {
  ctx.drawImage(video, 0, 0, width, height);
}

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

export function cloneFaceColorsMap(
  faces: Map<FaceId, StickerColor[]>,
): Map<FaceId, StickerColor[]> {
  const copy = new Map<FaceId, StickerColor[]>();
  for (const [faceId, colors] of faces) {
    copy.set(faceId, [...colors]);
  }
  return copy;
}
