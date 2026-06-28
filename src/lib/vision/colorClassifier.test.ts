import { describe, expect, it } from 'vitest';

import { classifyFaceRelative, classifySticker } from './colorClassifier';
import { resetColorReferences } from './colorReference';
import type { ReadColor } from '../../types';

describe('relative face color classification', () => {
  it('classifies warm/yellow lighting using chromaticity ratios', () => {
    resetColorReferences();
    expect(classifySticker(240, 220, 80)).toBe('Y');
    expect(classifySticker(250, 245, 235)).toBe('W');
    expect(classifySticker(80, 150, 90)).toBe('G');
    expect(classifySticker(90, 100, 210)).toBe('B');
    expect(classifySticker(220, 90, 80)).toBe('R');
  });

  it('classifies a mixed face under yellow light', () => {
    resetColorReferences();
    const warmMixed: [number, number, number][] = [
      [230, 210, 70],
      [235, 215, 75],
      [90, 100, 210],
      [232, 212, 72],
      [240, 220, 80],
      [88, 98, 205],
      [220, 90, 80],
      [236, 216, 76],
      [225, 95, 85],
    ];
    const colors: ReadColor[] = classifyFaceRelative(warmMixed);
    expect(colors[4]).toBe('Y');
    expect(colors).toContain('B');
    expect(colors).toContain('R');
  });
});
