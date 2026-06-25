import { describe, expect, it } from 'vitest';
import { getSelfieHoldPose } from './selfieHoldPose';

describe('selfie hold pose', () => {
  it('F hold shows R side for R move', () => {
    const pose = getSelfieHoldPose('R');
    expect(pose.holdFace).toBe('F');
    expect(pose.sideFace).toBe('R');
    expect(pose.visibleFaces).toEqual(['U', 'R', 'F']);
    expect(pose.turnLayer).toBe('R');
  });

  it('F hold shows L side for L prime move', () => {
    const pose = getSelfieHoldPose("L'");
    expect(pose.holdFace).toBe('F');
    expect(pose.sideFace).toBe('L');
    expect(pose.visibleFaces).toEqual(['U', 'L', 'F']);
    expect(pose.turnLayer).toBe('L');
  });

  it('R hold for F move', () => {
    const pose = getSelfieHoldPose('F');
    expect(pose.holdFace).toBe('R');
    expect(pose.visibleFaces).toEqual(['U', 'F', 'R']);
  });
});
