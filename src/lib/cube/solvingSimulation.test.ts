import Cube from 'cubejs';
import { describe, expect, it } from 'vitest';
import type { Move } from '../../types';
import { detectWrongMoveFromColors } from './detectWrongMove';
import {
  applyMoveToFacelet,
  createMoveColorTrackerState,
  evaluateThreeFaceMoveProgress,
  getFaceletFaceColors,
} from './moveColorProgress';
import {
  createSolvingStepState,
  evaluateSolvingFrame,
  type SolvingFrameInput,
} from './solvingStepPolicy';
import { computeDeformationScore } from '../vision/quadShapeMetrics';
import type { CubePose, Point2D } from '../../types';

function squareCorners(cx: number, cy: number, size: number): [Point2D, Point2D, Point2D, Point2D] {
  const h = size / 2;
  return [
    { x: cx - h, y: cy - h },
    { x: cx + h, y: cy - h },
    { x: cx + h, y: cy + h },
    { x: cx - h, y: cy + h },
  ];
}

/** Skewed quad — mimics mid layer-turn shape break. */
function skewedCorners(cx: number, cy: number, size: number): [Point2D, Point2D, Point2D, Point2D] {
  const h = size / 2;
  return [
    { x: cx - h, y: cy - h },
    { x: cx + h * 0.75, y: cy - h * 1.15 },
    { x: cx + h * 1.2, y: cy + h * 0.9 },
    { x: cx - h * 0.85, y: cy + h },
  ];
}

function deformScore(corners: [Point2D, Point2D, Point2D, Point2D]): number {
  const pose: CubePose = {
    corners,
    center: { x: 200, y: 200 },
    size: 120,
    rotationMatrix: [1, 0, 0, 0, 1, 0, 0, 0, 1],
    translation: [0, 0, 360],
    confidence: 0.9,
    visibleFace: 'R',
  };
  return computeDeformationScore(corners, pose, 400, 400, [
    { x: 2, y: 0 },
    { x: 8, y: 1 },
    { x: 1, y: 7 },
    { x: -3, y: 2 },
  ]).deformationScore;
}

function runSequence(inputs: SolvingFrameInput[]) {
  const state = createSolvingStepState();
  const results = inputs.map((input) => evaluateSolvingFrame(state, input));
  return { state, results, last: results[results.length - 1]! };
}

function colorEvalFor(
  facelet: string,
  expected: Move,
  faceId: 'U' | 'R' | 'F' | 'D' | 'L' | 'B',
  applied: Move | null,
  tracker = createMoveColorTrackerState(),
) {
  const colors = getFaceletFaceColors(
    applied ? applyMoveToFacelet(facelet, applied) : facelet,
    faceId,
  );
  return evaluateThreeFaceMoveProgress(
    facelet,
    expected,
    { [faceId]: colors },
    faceId,
    tracker,
  );
}

describe('layer deformation metrics', () => {
  it('scores rigid square lower than skewed layer-turn quad', () => {
    const rigid = deformScore(squareCorners(200, 200, 140));
    const skewed = deformScore(skewedCorners(200, 200, 140));
    expect(skewed).toBeGreaterThan(rigid + 0.08);
  });
});

describe('solving step policy simulation', () => {
  const facelet = Cube.random().asString();
  const expected: Move = 'R';
  const tracker = createMoveColorTrackerState();

  it('1. completes step after shape break + correct colors', () => {
    const before = colorEvalFor(facelet, expected, 'R', null, tracker);
    const alignedFrames: SolvingFrameInput[] = Array.from({ length: 4 }, () => ({
      colorEval: before,
      scanMatch: 0.82,
      deformationScore: deformScore(squareCorners(200, 200, 140)),
      sawPreMoveAlignment: tracker.sawPreMoveAlignment,
      rejectedWholeCube: false,
      wrongMove: null,
    }));

    const breakingFrames: SolvingFrameInput[] = Array.from({ length: 3 }, () => ({
      colorEval: colorEvalFor(facelet, expected, 'R', null, tracker),
      scanMatch: 0.72,
      deformationScore: deformScore(skewedCorners(200, 200, 140)),
      sawPreMoveAlignment: true,
      rejectedWholeCube: false,
      wrongMove: null,
    }));

    const after = colorEvalFor(facelet, expected, 'R', expected, tracker);
    expect(after.progress).toBeGreaterThan(0.55);

    const settleFrames: SolvingFrameInput[] = Array.from({ length: 6 }, () => ({
      colorEval: after,
      scanMatch: 0.78,
      deformationScore: deformScore(squareCorners(200, 200, 140)),
      sawPreMoveAlignment: true,
      rejectedWholeCube: false,
      wrongMove: null,
    }));

    const { last } = runSequence([...alignedFrames, ...breakingFrames, ...settleFrames]);
    expect(last.sawShapeBreak).toBe(true);
    expect(last.layerTurnValidated).toBe(true);
    expect(last.colorReady).toBe(true);
    expect(last.moveComplete).toBe(true);
  });

  it('2. does not complete when only repositioning whole cube (no shape break)', () => {
    const noTurnEval = {
      progress: 0,
      completed: false,
      visibleFace: 'F' as const,
      comparisonFace: null,
      rejectedWholeCube: true,
    };

    const frames: SolvingFrameInput[] = Array.from({ length: 12 }, () => ({
      colorEval: noTurnEval,
      scanMatch: 0.35,
      deformationScore: 0.05,
      sawPreMoveAlignment: false,
      rejectedWholeCube: true,
      wrongMove: null,
    }));

    const { last } = runSequence(frames);
    expect(last.sawShapeBreak).toBe(false);
    expect(last.moveComplete).toBe(false);
    expect(last.handMotionDetected).toBe(true);
  });

  it('3. blocks completion and flags wrong move for opposite turn', () => {
    const wrongColors = {
      R: getFaceletFaceColors(applyMoveToFacelet(facelet, "R'"), 'R'),
      U: getFaceletFaceColors(applyMoveToFacelet(facelet, "R'"), 'U'),
      F: getFaceletFaceColors(applyMoveToFacelet(facelet, "R'"), 'F'),
    };

    const wrongMove = detectWrongMoveFromColors(
      facelet,
      expected,
      wrongColors,
      'R',
      true,
    );
    expect(wrongMove).toBe("R'");

    const tracker3 = createMoveColorTrackerState();
    const wrongEval = colorEvalFor(facelet, expected, 'R', "R'", tracker3);

    const frames: SolvingFrameInput[] = [
      ...Array.from({ length: 3 }, () => ({
        colorEval: colorEvalFor(facelet, expected, 'R', null, tracker3),
        scanMatch: 0.8,
        deformationScore: deformScore(squareCorners(200, 200, 140)),
        sawPreMoveAlignment: tracker3.sawPreMoveAlignment,
        rejectedWholeCube: false,
        wrongMove: null,
      })),
      ...Array.from({ length: 3 }, () => ({
        colorEval: wrongEval,
        scanMatch: 0.7,
        deformationScore: deformScore(skewedCorners(200, 200, 140)),
        sawPreMoveAlignment: true,
        rejectedWholeCube: false,
        wrongMove: "R'" as Move,
      })),
      ...Array.from({ length: 5 }, () => ({
        colorEval: wrongEval,
        scanMatch: 0.75,
        deformationScore: deformScore(squareCorners(200, 200, 140)),
        sawPreMoveAlignment: true,
        rejectedWholeCube: false,
        wrongMove: "R'" as Move,
      })),
    ];

    const { last } = runSequence(frames);
    expect(last.sawShapeBreak).toBe(true);
    expect(last.moveComplete).toBe(false);
  });
});
