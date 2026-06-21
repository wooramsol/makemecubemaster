import { identifyFaceFromCenter } from '../cube/colors';
import type { FaceId, StickerColor } from '../../types';

const STABLE_FRAMES = 10;
const FRAME_MATCH_TOLERANCE = 2;
const MAX_READINGS_PER_FACE = 6;

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

export class LiveFaceAccumulator {
  private faces = new Map<FaceId, StickerColor[]>();
  private readings = new Map<FaceId, StickerColor[][]>();
  private stableCount = 0;
  private lastFaceId: FaceId | null = null;
  private lastColors: StickerColor[] | null = null;

  reset(): void {
    this.faces.clear();
    this.readings.clear();
    this.stableCount = 0;
    this.lastFaceId = null;
    this.lastColors = null;
  }

  update(colors: StickerColor[] | null): LiveScanSnapshot {
    const empty: LiveScanSnapshot = {
      faces: this.faces,
      knownFaces: [...this.faces.keys()],
      currentFace: null,
      stableProgress: 0,
      stableTarget: STABLE_FRAMES,
      isComplete: this.faces.size === 6,
      newlyCaptured: null,
    };

    if (!colors || colors.length !== 9) {
      this.stableCount = 0;
      this.lastFaceId = null;
      this.lastColors = null;
      return empty;
    }

    const faceId = identifyFaceFromCenter(colors[4]!);
    if (!faceId) {
      this.stableCount = 0;
      this.lastFaceId = null;
      this.lastColors = null;
      return { ...empty, currentFace: null };
    }

    if (
      faceId === this.lastFaceId &&
      this.lastColors &&
      colorsNearlyEqual(colors, this.lastColors)
    ) {
      this.stableCount++;
    } else {
      this.lastFaceId = faceId;
      this.lastColors = [...colors];
      this.stableCount = 1;
    }

    let newlyCaptured: FaceId | null = null;

    if (this.stableCount >= STABLE_FRAMES) {
      const isNew = !this.faces.has(faceId);
      const history = [...(this.readings.get(faceId) ?? []), [...colors]];
      if (history.length > MAX_READINGS_PER_FACE) {
        history.shift();
      }
      this.readings.set(faceId, history);
      this.faces.set(faceId, majorityVoteCells(history));

      if (isNew) {
        newlyCaptured = faceId;
      }

      this.stableCount = 0;
    }

    return {
      faces: this.faces,
      knownFaces: [...this.faces.keys()],
      currentFace: faceId,
      stableProgress: Math.min(this.stableCount, STABLE_FRAMES),
      stableTarget: STABLE_FRAMES,
      isComplete: this.faces.size === 6,
      newlyCaptured,
    };
  }
}
