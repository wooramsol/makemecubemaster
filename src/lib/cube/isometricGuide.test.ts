import { describe, expect, it } from 'vitest';
import { buildIsoCubeGuideModel } from './isometricGuide';
import { getMoveHoldFace } from './moveGuidanceView';

describe('isometric cube guide', () => {
  it('shows three faces in corner view for hold orientation', () => {
    const model = buildIsoCubeGuideModel('R', 'F');
    expect(model.visibleFaces).toEqual(['U', 'R', 'F']);
    expect(model.cells).toHaveLength(27);
    expect(model.edges.length).toBe(12);
  });

  it('highlights turning layer stickers on visible faces', () => {
    const model = buildIsoCubeGuideModel('R', getMoveHoldFace('R'));
    const turning = model.cells.filter((c) => c.isTurning);
    expect(turning.some((c) => c.faceId === 'R')).toBe(true);
    expect(turning.some((c) => c.faceId === 'F' && [2, 5, 8].includes(c.index))).toBe(true);
    expect(model.arrow).not.toBeNull();
  });

  it('builds arrow path for F move with R hold face', () => {
    const model = buildIsoCubeGuideModel('F', 'R');
    expect(model.visibleFaces).toEqual(['U', 'F', 'R']);
    expect(model.turnLayer).toBe('F');
    expect(model.arrow?.path.startsWith('M')).toBe(true);
  });
});
