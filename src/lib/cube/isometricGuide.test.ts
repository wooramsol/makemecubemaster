import { describe, expect, it } from 'vitest';
import {
  buildCornerCubeModel,
  buildIsoCubeGuideModel,
  buildIsoScanCubeModel,
  REFERENCE_CORNER_VIEW,
  selectCornerFaces,
  visibleFacesFor,
} from './isometricGuide';
import { getSelfieHoldPose } from './selfieHoldPose';

function viewFromPose(move: Parameters<typeof getSelfieHoldPose>[0]) {
  const pose = getSelfieHoldPose(move);
  const yaw = pose.euler[1];
  const pitch = pose.euler[0];
  return {
    yaw,
    pitch,
    visibleFaces: selectCornerFaces(yaw, pitch),
  };
}

describe('isometric cube guide', () => {
  it('shows R side for R move and L side for L move when holding F', () => {
    expect(visibleFacesFor('F', 'R')).toEqual(['U', 'R', 'F']);
    expect(visibleFacesFor('F', 'L')).toEqual(['U', 'L', 'F']);
  });

  it('builds three-face corner model with cells and outlines', () => {
    const model = buildIsoCubeGuideModel('R', viewFromPose('R'));
    expect(model.visibleFaces).toHaveLength(3);
    expect(model.cells).toHaveLength(27);
    expect(model.faceOutlines).toHaveLength(3);
  });

  it('highlights turning layer on visible faces', () => {
    const model = buildIsoCubeGuideModel('R', viewFromPose('R'));
    const turning = model.cells.filter((c) => c.isTurning);
    if (model.visibleFaces.includes('R')) {
      expect(turning.some((c) => c.faceId === 'R')).toBe(true);
    }
    expect(turning.length).toBeGreaterThan(0);
    expect(model.arrow).not.toBeNull();
  });

  it('shows L face for L prime move with F hold', () => {
    const view = viewFromPose("L'");
    const model = buildIsoCubeGuideModel("L'", view);
    expect(model.visibleFaces).toHaveLength(3);
    expect(model.turnLayer).toBe('L');
    if (model.visibleFaces.includes('L')) {
      expect(model.cells.filter((c) => c.isTurning && c.faceId === 'L')).toHaveLength(9);
    }
    expect(model.arrow?.path.startsWith('M')).toBe(true);
  });

  it('builds arrow for F move with R hold', () => {
    const model = buildIsoCubeGuideModel('F', viewFromPose('F'));
    expect(model.visibleFaces).toHaveLength(3);
    expect(model.arrow?.path.startsWith('M')).toBe(true);
  });

  it('builds scan cube with exactly three visible faces at default angle', () => {
    const model = buildIsoScanCubeModel();
    expect(model.cells).toHaveLength(27);
    expect(model.visibleFaceIds).toHaveLength(3);
    expect(model.faceOutlines).toHaveLength(3);
  });

  it('corner cube model depth-sorts three face groups', () => {
    const model = buildCornerCubeModel({
      yaw: REFERENCE_CORNER_VIEW.yaw,
      pitch: REFERENCE_CORNER_VIEW.pitch,
    });
    expect(model.faceGroups).toHaveLength(3);
    expect(model.visibleFaceIds).toEqual(expect.arrayContaining(['U', 'F', 'R']));
    expect(model.faceGroups.every((group) => group.cells.length === 9)).toBe(true);
  });

  it('selfie solving model uses geometric corner faces', () => {
    const view = viewFromPose('R');
    const model = buildIsoCubeGuideModel('R', view);
    expect(model.visibleFaces).toHaveLength(3);
    expect(model.arrow).not.toBeNull();
  });
});
