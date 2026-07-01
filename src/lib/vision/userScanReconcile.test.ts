import { describe, it, expect } from 'vitest';
import type { FaceId, StickerColor } from '../../types';
import {
  reconcileLiveScanFaces,
  detectSuspiciousScanFaces,
  recoverSuspiciousFaces,
  getStickerImbalance,
} from './cubeColorReconcile';
import { applyFaceAwareReads } from './colorClassifier';

describe('warm light misread recovery', () => {
  const warmLightScan = new Map<FaceId, StickerColor[]>([
    ['U', ['O', 'W', 'O', 'G', 'W', 'G', 'G', 'B', 'G']],
    ['F', ['W', 'G', 'R', 'W', 'G', 'R', 'W', 'W', 'W']],
    ['R', ['B', 'Y', 'B', 'R', 'R', 'R', 'R', 'W', 'R']],
    ['B', ['Y', 'Y', 'Y', 'Y', 'B', 'Y', 'Y', 'Y', 'Y']],
    ['L', ['B', 'G', 'R', 'W', 'O', 'O', 'B', 'O', 'B']],
    ['D', ['R', 'Y', 'R', 'B', 'G', 'B', 'B', 'Y', 'B']],
  ]);

  it('applyFaceAwareReads caps yellow on blue face', () => {
    const colors = warmLightScan.get('B')!;
    const adjusted = applyFaceAwareReads(colors, 'B');
    const yellows = adjusted.filter((c) => c === 'Y').length;
    expect(yellows).toBeLessThanOrEqual(3);
  });

  it('clears suspicious face patterns after recovery pass', () => {
    let reconciled = reconcileLiveScanFaces(warmLightScan);
    let solveMap = new Map<FaceId, StickerColor[]>();
    for (const [id, colors] of reconciled) {
      solveMap.set(id, colors as StickerColor[]);
    }

    const issues = detectSuspiciousScanFaces(solveMap);
    expect(issues.length).toBeGreaterThan(0);

    reconciled = reconcileLiveScanFaces(recoverSuspiciousFaces(reconciled, issues));
    solveMap = new Map<FaceId, StickerColor[]>();
    for (const [id, colors] of reconciled) {
      solveMap.set(id, colors as StickerColor[]);
    }

    expect(detectSuspiciousScanFaces(solveMap).length).toBe(0);
    expect(getStickerImbalance(solveMap).W).toBeLessThanOrEqual(2);
  });
});
