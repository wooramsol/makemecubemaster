import type { CubePose, FaceId, StickerColor } from '../../types';
import { projectFaceCorners } from './projectFace';
import { sampleColorsFromQuad } from './quadColorSampler';
import { getVisibleFaces } from './visibleFaces';

export function sampleVisibleFaceColors(
  sourceCanvas: HTMLCanvasElement,
  pose: CubePose,
  frameWidth: number,
  frameHeight: number,
): Partial<Record<FaceId, StickerColor[]>> {
  const result: Partial<Record<FaceId, StickerColor[]>> = {};
  const visible = getVisibleFaces(pose);

  for (const faceId of visible) {
    const corners = projectFaceCorners(faceId, pose, frameWidth, frameHeight);
    if (!corners) continue;
    const colors = sampleColorsFromQuad(sourceCanvas, frameWidth, frameHeight, corners);
    if (colors?.length === 9) {
      result[faceId] = colors;
    }
  }

  return result;
}
