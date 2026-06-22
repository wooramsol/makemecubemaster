export type FaceId = 'U' | 'D' | 'F' | 'B' | 'L' | 'R';

export type StickerColor = 'W' | 'Y' | 'R' | 'O' | 'B' | 'G';

export type Move =
  | 'R'
  | "R'"
  | 'R2'
  | 'L'
  | "L'"
  | 'L2'
  | 'U'
  | "U'"
  | 'U2'
  | 'D'
  | "D'"
  | 'D2'
  | 'F'
  | "F'"
  | 'F2'
  | 'B'
  | "B'"
  | 'B2';

export interface Point2D {
  x: number;
  y: number;
}

export interface CubePose {
  corners: [Point2D, Point2D, Point2D, Point2D];
  center: Point2D;
  size: number;
  rotationMatrix: number[];
  translation: [number, number, number];
  confidence: number;
}

export interface DetectedFace {
  colors: StickerColor[];
  pose: CubePose;
}

export interface ScannedFace {
  faceId: FaceId;
  colors: StickerColor[];
}

export type AppPhase =
  | 'loading'
  | 'camera'
  | 'colorLearn'
  | 'scanReady'
  | 'liveScan'
  | 'computing'
  | 'solving'
  | 'solved'
  | 'error';

export interface SolutionProgress {
  moves: Move[];
  currentIndex: number;
}

export type DetectionStatus =
  | 'searching'
  | 'detected'
  | 'stabilizing'
  | 'captured'
  | 'rotate';

export interface DetectionFeedback {
  status: DetectionStatus;
  stableProgress: number;
  stableTarget: number;
  detectedCenter: StickerColor | null;
  colorCounts: Record<StickerColor, number>;
  cellColors: StickerColor[];
}

export type SolvingTrackingStatus = 'searching' | 'locked' | 'lost';

export interface SolvingFeedback {
  tracking: SolvingTrackingStatus;
  rotationProgress: number;
  wrongMove: Move | null;
  visibleFace: FaceId | null;
  faceMatchesMove: boolean;
}

export interface FrameResult {
  pose: CubePose | null;
  detectedFace: DetectedFace | null;
  rotationMove: Move | null;
  rotationProgress: number;
  wrongMove: Move | null;
}

export interface CameraIntrinsics {
  fx: number;
  fy: number;
  cx: number;
  cy: number;
}
