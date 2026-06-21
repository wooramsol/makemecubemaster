import type { CubePose, Point2D } from '../../types';

const FACE_HALF = 0.5;

/** 3D model corners for the front face (F) in cube-local space */
const MODEL_CORNERS: [number, number, number][] = [
  [-FACE_HALF, FACE_HALF, FACE_HALF],
  [FACE_HALF, FACE_HALF, FACE_HALF],
  [FACE_HALF, -FACE_HALF, FACE_HALF],
  [-FACE_HALF, -FACE_HALF, FACE_HALF],
];

export function orderCorners(points: Point2D[]): [Point2D, Point2D, Point2D, Point2D] | null {
  if (points.length < 4) return null;

  const sorted = [...points].sort((a, b) => a.y - b.y);
  const top = sorted.slice(0, 2).sort((a, b) => a.x - b.x);
  const bottom = sorted.slice(2, 4).sort((a, b) => a.x - b.x);

  return [top[0]!, top[1]!, bottom[1]!, bottom[0]!];
}

export function estimatePoseFromCorners(
  corners: [Point2D, Point2D, Point2D, Point2D],
  frameWidth: number,
  frameHeight: number,
): CubePose {
  try {
    return estimatePoseOpenCV(corners, frameWidth, frameHeight);
  } catch {
    return estimatePoseSimple(corners, frameWidth, frameHeight);
  }
}

function estimatePoseSimple(
  corners: [Point2D, Point2D, Point2D, Point2D],
  frameWidth: number,
  _frameHeight: number,
): CubePose {
  const center = {
    x: corners.reduce((s, p) => s + p.x, 0) / 4,
    y: corners.reduce((s, p) => s + p.y, 0) / 4,
  };
  const size =
    (Math.hypot(corners[1].x - corners[0].x, corners[1].y - corners[0].y) +
      Math.hypot(corners[2].x - corners[3].x, corners[2].y - corners[3].y)) /
    2;

  return {
    corners,
    center,
    size,
    rotationMatrix: [1, 0, 0, 0, 1, 0, 0, 0, 1],
    translation: [center.x - frameWidth / 2, center.y, size * 3],
    confidence: 0.65,
  };
}

function estimatePoseOpenCV(
  corners: [Point2D, Point2D, Point2D, Point2D],
  frameWidth: number,
  frameHeight: number,
): CubePose {
  const cv = window.cv;
  const fx = frameWidth * 0.9;
  const fy = frameWidth * 0.9;
  const cx = frameWidth / 2;
  const cy = frameHeight / 2;

  const objectPoints = cv.matFromArray(
    4,
    1,
    cv.CV_32FC1,
    MODEL_CORNERS.flat(),
  );
  const imagePoints = cv.matFromArray(4, 1, cv.CV_32FC1, [
    corners[0].x,
    corners[0].y,
    corners[1].x,
    corners[1].y,
    corners[2].x,
    corners[2].y,
    corners[3].x,
    corners[3].y,
  ]);
  const cameraMatrix = cv.matFromArray(3, 3, cv.CV_32FC1, [fx, 0, cx, 0, fy, cy, 0, 0, 1]);
  const distCoeffs = cv.matFromArray(4, 1, cv.CV_32FC1, [0, 0, 0, 0]);
  const rvec = new cv.Mat();
  const tvec = new cv.Mat();
  const rotMat = new cv.Mat();

  cv.solvePnP(objectPoints, imagePoints, cameraMatrix, distCoeffs, rvec, tvec);
  cv.Rodrigues(rvec, rotMat);

  const rotationMatrix: number[] = [];
  for (let i = 0; i < 9; i++) {
    rotationMatrix.push(rotMat.data32F[i] ?? rotMat.floatAt(Math.floor(i / 3), i % 3));
  }

  const translation: [number, number, number] = [
    tvec.data32F[0] ?? tvec.floatAt(0, 0),
    tvec.data32F[1] ?? tvec.floatAt(1, 0),
    tvec.data32F[2] ?? tvec.floatAt(2, 0),
  ];

  const center = {
    x: corners.reduce((s, p) => s + p.x, 0) / 4,
    y: corners.reduce((s, p) => s + p.y, 0) / 4,
  };
  const size =
    (Math.hypot(corners[1].x - corners[0].x, corners[1].y - corners[0].y) +
      Math.hypot(corners[2].x - corners[3].x, corners[2].y - corners[3].y)) /
    2;

  objectPoints.delete();
  imagePoints.delete();
  cameraMatrix.delete();
  distCoeffs.delete();
  rvec.delete();
  tvec.delete();
  rotMat.delete();

  return {
    corners,
    center,
    size,
    rotationMatrix,
    translation,
    confidence: 0.8,
  };
}

export function poseCenter(pose: CubePose): Point2D {
  return pose.center;
}
