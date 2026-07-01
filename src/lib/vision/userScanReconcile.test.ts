import { describe, it, expect } from 'vitest';
import type { FaceId, StickerColor } from '../../types';
import {
  reconcileLiveScanFaces,
  getStickerImbalance,
  isCubeColorBalanced,
  detectSuspiciousScanFaces,
  formatScanQualityHint,
} from './cubeColorReconcile';

describe('misread scan like user screenshot', () => {
  const rawFaces = new Map<FaceId, StickerColor[]>([
    ['U', ['G', 'W', 'B', 'G', 'W', 'R', 'G', 'W', 'R']],
    ['F', ['W', 'W', 'R', 'W', 'G', 'W', 'W', 'R', 'W']],
    ['R', ['B', 'W', 'B', 'B', 'R', 'O', 'B', 'O', 'B']],
    ['B', ['Y', 'O', 'Y', 'Y', 'B', 'Y', 'Y', 'R', 'Y']],
    ['L', ['G', 'O', 'G', 'G', 'O', 'O', 'G', 'W', 'G']],
    ['D', ['R', 'Y', 'G', 'R', 'Y', 'B', 'R', 'Y', 'B']],
  ]);

  it('raw scan is globally imbalanced', () => {
    const stickerMap = new Map(rawFaces);
    expect(isCubeColorBalanced(stickerMap)).toBe(false);
    expect(getStickerImbalance(stickerMap)).toMatchObject({ W: 2, G: 1, O: -3 });
  });

  it('flags green face with too many whites even after global reconcile', () => {
    const reconciled = reconcileLiveScanFaces(rawFaces);
    const stickerMap = new Map<FaceId, StickerColor[]>();
    for (const [id, colors] of reconciled) {
      stickerMap.set(id, colors as StickerColor[]);
    }

    expect(isCubeColorBalanced(stickerMap)).toBe(true);
    const issues = detectSuspiciousScanFaces(stickerMap);
    expect(issues.some((issue) => issue.label === 'G')).toBe(true);
    expect(formatScanQualityHint(issues)).toContain('G');
  });
});
