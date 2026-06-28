import { describe, expect, it } from 'vitest';
import type { FaceId, ReadColor } from '../../types';
import { inferUncertainCells } from './cubeColorReconcile';
import {
  isAwaitingFirstWhiteCenter,
  prepareMediansForClassification,
  resetScanWhiteCalibration,
} from './scanWhiteCalibration';
import { isWhiteBalanceCalibrated } from './whiteBalance';

describe('scan white calibration', () => {
  it('calibrates from first face center RGB', () => {
    resetScanWhiteCalibration();
    expect(isAwaitingFirstWhiteCenter()).toBe(true);
    expect(isWhiteBalanceCalibrated()).toBe(false);

    const warmWhite: [number, number, number][] = [
      [230, 220, 180],
      [228, 218, 178],
      [232, 222, 182],
      [229, 219, 179],
      [240, 235, 200],
      [231, 221, 181],
      [227, 217, 177],
      [233, 223, 183],
      [230, 220, 180],
    ];

    prepareMediansForClassification(warmWhite);
    expect(isAwaitingFirstWhiteCenter()).toBe(false);
    expect(isWhiteBalanceCalibrated()).toBe(true);

    const adjusted = prepareMediansForClassification(warmWhite);
    const [r, , b] = adjusted[4]!;
    expect(r).toBeGreaterThan(200);
    expect(b).toBeGreaterThan(r - 30);
  });
});

describe('inferUncertainCells', () => {
  it('fills ? when only one color remains possible', () => {
    const faces = new Map<FaceId, ReadColor[]>([
      ['U', Array(9).fill('W') as ReadColor[]],
      [
        'F',
        ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', '?'] as ReadColor[],
      ],
    ]);
    const result = inferUncertainCells(faces);
    expect(result.get('F')![8]).toBe('G');
  });
});
