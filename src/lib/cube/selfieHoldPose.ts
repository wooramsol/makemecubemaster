import type { FaceId, Move } from '../../types';
import { getMoveHoldFace } from './moveGuidanceView';
import { moveFace } from './moves';
import { visibleFacesFor } from './isometricGuide';

/**
 * How the user should hold the cube in front of a selfie camera.
 *
 * Real-world setup (matches the dashed scan square):
 * - Arms length, chest height, phone vertical
 * - Hold face square to the camera (fills the guide box)
 * - Tilt top slightly away so the top face (U) peeks above the front face
 * - Rotate corner so the side face (R or L) peeks out — never show the turning face flat
 */
export interface SelfieHoldPose {
  holdFace: FaceId;
  topFace: FaceId;
  sideFace: FaceId;
  turnLayer: FaceId;
  visibleFaces: FaceId[];
  /** Radians XYZ — applied to cube root; camera is fixed at +Z */
  euler: [number, number, number];
  holdLine: string;
}

const PITCH = 0.5;
const YAW_CORNER = 0.72;

function sideFaceFor(holdFace: FaceId, turnLayer: FaceId): FaceId {
  const visible = visibleFacesFor(holdFace, turnLayer);
  return visible.find((f) => f !== holdFace && f !== 'U') ?? 'R';
}

function eulerForHold(holdFace: FaceId, sideFace: FaceId): [number, number, number] {
  if (holdFace === 'F') {
    return sideFace === 'L' ? [PITCH, YAW_CORNER, 0] : [PITCH, -YAW_CORNER, 0];
  }
  if (holdFace === 'R') {
    return [PITCH, -Math.PI / 2 - YAW_CORNER * 0.85, 0];
  }
  if (holdFace === 'L') {
    return [PITCH, Math.PI / 2 + YAW_CORNER * 0.85, 0];
  }
  return [PITCH, -YAW_CORNER, 0];
}

export function getSelfieHoldPose(move: Move): SelfieHoldPose {
  const turnLayer = moveFace(move);
  const holdFace = getMoveHoldFace(move);
  const sideFace = sideFaceFor(holdFace, turnLayer);
  const visibleFaces = visibleFacesFor(holdFace, turnLayer);

  const holdLine =
    holdFace === 'F'
      ? `Face ${holdFace} to camera · corner shows ${sideFace} on side, U on top`
      : `Face ${holdFace} to camera · corner shows F and U`;

  return {
    holdFace,
    topFace: 'U',
    sideFace,
    turnLayer,
    visibleFaces,
    euler: eulerForHold(holdFace, sideFace),
    holdLine,
  };
}
