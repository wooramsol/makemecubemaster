import type { FaceId, StickerColor } from '../../types';

export const SELFIE_CAMERA_MODE = true;

const STORAGE_KEY = 'selfieDisplayMirror';

export function isSelfieDisplayMirrored(): boolean {
  if (!SELFIE_CAMERA_MODE) return false;
  const stored = sessionStorage.getItem(STORAGE_KEY);
  if (stored === 'true') return true;
  if (stored === 'false') return false;
  return false;
}

export function setSelfieDisplayMirrored(mirrored: boolean): void {
  sessionStorage.setItem(STORAGE_KEY, String(mirrored));
}

/** Raw camera pixels — never flip the canvas. */
export function drawCameraFrame(
  ctx: CanvasRenderingContext2D,
  video: HTMLVideoElement,
  width: number,
  height: number,
): void {
  ctx.drawImage(video, 0, 0, width, height);
}

/** Mirror a 3×3 face grid left-right (camera frame → selfie preview). */
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

/** Apply when rendering face grids if display mirror is enabled. */
export function mirrorFaceCellsForSelfie(colors: StickerColor[]): StickerColor[] {
  if (!SELFIE_CAMERA_MODE || !isSelfieDisplayMirrored()) return colors;
  return mirrorFaceCellsHorizontally(colors);
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
