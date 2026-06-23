import type { CubePose, FaceId, Point2D } from '../../types';
import { projectFaceCorners } from './projectFace';

function quadEdgeLength(corners: [Point2D, Point2D, Point2D, Point2D]): number {
  const [tl, tr, br, bl] = corners;
  return (
    (Math.hypot(tr.x - tl.x, tr.y - tl.y) + Math.hypot(br.x - bl.x, br.y - bl.y)) / 2
  );
}

/**
 * PnP often places the unit cube too far away. Rescale translation so the
 * projected visible face matches the live-tracked corner quad size.
 */
export function alignPoseToTrackedQuad(
  pose: CubePose,
  frameWidth: number,
  frameHeight: number,
): CubePose {
  const faceId = pose.visibleFace;
  if (!faceId) return pose;

  const projected = projectFaceCorners(faceId, pose, frameWidth, frameHeight);
  if (!projected) return pose;

  const detectedSize = quadEdgeLength(pose.corners);
  const projectedSize = quadEdgeLength(projected);
  if (projectedSize < 8 || detectedSize < 8) return pose;

  const scale = detectedSize / projectedSize;
  if (scale < 0.25 || scale > 4) return pose;

  const t = pose.translation;
  return {
    ...pose,
    translation: [t[0] / scale, t[1] / scale, t[2] / scale],
    size: pose.size * scale,
  };
}

export function pickArrowCorners(
  pose: CubePose,
  moveFaceId: FaceId,
  frameWidth: number,
  frameHeight: number,
): [Point2D, Point2D, Point2D, Point2D] {
  if (pose.visibleFace === moveFaceId) {
    return pose.corners;
  }
  const aligned = alignPoseToTrackedQuad(pose, frameWidth, frameHeight);
  const projected = projectFaceCorners(moveFaceId, aligned, frameWidth, frameHeight);
  if (projected) return projected;
  return pose.corners;
}
