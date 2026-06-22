import { identifyFaceFromCenter } from '../cube/colors';
import type { FaceId, StickerColor } from '../../types';

const FACE_CENTER: Record<FaceId, StickerColor> = {
  U: 'W',
  D: 'Y',
  F: 'G',
  B: 'B',
  R: 'R',
  L: 'O',
};

/** Same colors must hold this long before a face is captured */
export const STABLE_DURATION_MS = 3000;
const FRAME_MATCH_TOLERANCE = 2;
const MAX_READINGS_PER_FACE = 10;

export interface LiveScanSnapshot {
  faces: Map<FaceId, StickerColor[]>;
  knownFaces: FaceId[];
  currentFace: FaceId | null;
  stableProgress: number;
  stableTarget: number;
  isComplete: boolean;
  newlyCaptured: FaceId | null;
}

function colorsNearlyEqual(a: StickerColor[], b: StickerColor[]): boolean {
  let diff = 0;
  for (let i = 0; i < 9; i++) {
    if (a[i] !== b[i]) diff++;
  }
  return diff <= FRAME_MATCH_TOLERANCE;
}

function majorityVoteCells(readings: StickerColor[][]): StickerColor[] {
  const result: StickerColor[] = [];
  for (let i = 0; i < 9; i++) {
    const counts = new Map<StickerColor, number>();
    for (const reading of readings) {
      const c = reading[i]!;
      counts.set(c, (counts.get(c) ?? 0) + 1);
    }
    let best: StickerColor = 'W';
    let bestCount = 0;
    for (const [color, count] of counts) {
      if (count > bestCount) {
        bestCount = count;
        best = color;
      }
    }
    result.push(best);
  }
  return result;
}

function majorityCenterFaceId(readings: StickerColor[][]): FaceId | null {
  const counts = new Map<StickerColor, number>();
  for (const reading of readings) {
    const center = reading[4]!;
    counts.set(center, (counts.get(center) ?? 0) + 1);
  }

  let bestCenter: StickerColor = 'W';
  let bestCount = 0;
  for (const [color, count] of counts) {
    if (count > bestCount) {
      bestCount = count;
      bestCenter = color;
    }
  }

  return identifyFaceFromCenter(bestCenter);
}

function finalizeFaceColors(colors: StickerColor[], faceId: FaceId): StickerColor[] {
  const result = [...colors];
  result[4] = FACE_CENTER[faceId];
  return result;
}

export class LiveFaceAccumulator {
  private faces = new Map<FaceId, StickerColor[]>();
  private readings = new Map<FaceId, StickerColor[][]>();
  private stableSinceMs: number | null = null;
  private lastFaceId: FaceId | null = null;
  private lastColors: StickerColor[] | null = null;

  reset(): void {
    this.faces.clear();
    this.readings.clear();
    this.stableSinceMs = null;
    this.lastFaceId = null;
    this.lastColors = null;
  }

  update(colors: StickerColor[] | null, nowMs = Date.now()): LiveScanSnapshot {
    const stableTargetSec = STABLE_DURATION_MS / 1000;
    const empty: LiveScanSnapshot = {
      faces: this.faces,
      knownFaces: [...this.faces.keys()],
      currentFace: null,
      stableProgress: 0,
      stableTarget: stableTargetSec,
      isComplete: this.faces.size === 6,
      newlyCaptured: null,
    };

    if (!colors || colors.length !== 9) {
      this.stableSinceMs = null;
      this.lastFaceId = null;
      this.lastColors = null;
      return empty;
    }

    const faceId = identifyFaceFromCenter(colors[4]!);
    if (!faceId) {
      this.stableSinceMs = null;
      this.lastFaceId = null;
      this.lastColors = null;
      return { ...empty, currentFace: null };
    }

    const isSameReading =
      faceId === this.lastFaceId &&
      this.lastColors !== null &&
      colorsNearlyEqual(colors, this.lastColors);

    if (isSameReading) {
      if (this.stableSinceMs === null) {
        this.stableSinceMs = nowMs;
      }
    } else {
      this.lastFaceId = faceId;
      this.lastColors = [...colors];
      this.stableSinceMs = nowMs;
    }

    const stableMs = this.stableSinceMs !== null ? nowMs - this.stableSinceMs : 0;
    const stableProgressSec = Math.min(stableMs, STABLE_DURATION_MS) / 1000;

    let newlyCaptured: FaceId | null = null;

    if (stableMs >= STABLE_DURATION_MS) {
      const history = [...(this.readings.get(faceId) ?? []), [...colors]];
      if (history.length > MAX_READINGS_PER_FACE) {
        history.shift();
      }
      this.readings.set(faceId, history);

      const resolvedFaceId = majorityCenterFaceId(history) ?? faceId;
      const merged = finalizeFaceColors(majorityVoteCells(history), resolvedFaceId);
      const isNew = !this.faces.has(resolvedFaceId);
      this.faces.set(resolvedFaceId, merged);

      if (isNew) {
        newlyCaptured = resolvedFaceId;
      }

      this.stableSinceMs = null;
      this.lastFaceId = null;
      this.lastColors = null;
    }

    return {
      faces: this.faces,
      knownFaces: [...this.faces.keys()],
      currentFace: faceId,
      stableProgress: Math.round(stableProgressSec * 10) / 10,
      stableTarget: stableTargetSec,
      isComplete: this.faces.size === 6,
      newlyCaptured,
    };
  }
}
