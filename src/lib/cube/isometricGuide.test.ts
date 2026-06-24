import { describe, expect, it } from 'vitest';
import { buildIsoCubeGuideModel, visibleFacesFor } from './isometricGuide';
import { getMoveHoldFace } from './moveGuidanceView';

describe('isometric cube guide', () => {
  it('shows R side for R move and L side for L move when holding F', () => {
    expect(visibleFacesFor('F', 'R')).toEqual(['U', 'R', 'F']);
    expect(visibleFacesFor('F', 'L')).toEqual(['U', 'L', 'F']);
  });

  it('builds three-face corner model with cells and outlines', () => {
    const model = buildIsoCubeGuideModel('R', 'F');
    expect(model.visibleFaces).toEqual(['U', 'R', 'F']);
    expect(model.cells).toHaveLength(27);
    expect(model.faceOutlines).toHaveLength(3);
  });

  it('highlights turning layer on visible faces', () => {
    const model = buildIsoCubeGuideModel('R', getMoveHoldFace('R'));
    const turning = model.cells.filter((c) => c.isTurning);
    expect(turning.some((c) => c.faceId === 'R')).toBe(true);
    expect(turning.some((c) => c.faceId === 'F' && [2, 5, 8].includes(c.index))).toBe(true);
    expect(model.arrow).not.toBeNull();
  });

  it('shows L face for L prime move with F hold', () => {
    const model = buildIsoCubeGuideModel("L'", 'F');
    expect(model.visibleFaces).toEqual(['U', 'L', 'F']);
    expect(model.turnLayer).toBe('L');
    expect(model.cells.filter((c) => c.isTurning && c.faceId === 'L')).toHaveLength(9);
    expect(model.arrow?.path.startsWith('M')).toBe(true);
  });

  it('builds arrow for F move with R hold', () => {
    const model = buildIsoCubeGuideModel('F', 'R');
    expect(model.visibleFaces).toEqual(['U', 'F', 'R']);
    expect(model.arrow?.path.startsWith('M')).toBe(true);
  });
});
