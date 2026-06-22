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

/** Same face must stay in view this long before capture */
export const STABLE_DURATION_MS = 2000;
const MAX_READINGS_PER_FACE = 10;

/** How many of 9 cells must match to treat two readings as the same physical face */
const SAME_FACE_CELL_MATCHES = 7;
/** Allow a little jitter while the stability timer runs */
const STABILITY_JITTER_MATCHES = 6;

export interface LiveScanSnapshot {
  faces: Map<FaceId, StickerColor[]>;
  knownFaces: FaceId[];
  currentFace: FaceId | null;
  stableProgress: number;
  stableTarget: number;
  isComplete: boolean;
  newlyCaptured: FaceId | null;
  /** User is still showing a face that was already captured */
  needsNewFace: boolean;
}

function countMatchingCells(a: StickerColor[], b: StickerColor[]): number {
  let matches = 0;
  for (let i = 0; i < 9; i++) {
    if (a[i] === b[i]) matches++;
  }
  return matches;
}

function matchesStoredFace(live: StickerColor[], stored: StickerColor[]): boolean {
  return countMatchingCells(live, stored) >= SAME_FACE_CELL_MATCHES;
}

function findStoredMatch(
  colors: StickerColor[],
  faces: Map<FaceId, StickerColor[]>,
): FaceId | null {
  for (const [id, stored] of faces) {
    if (matchesStoredFace(colors, stored)) return id;
  }
  return null;
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

function pickFaceIdForCapture(
  voted: StickerColor[],
  faces: Map<FaceId, StickerColor[]>,
): FaceId | null {
  const fromCenter = identifyFaceFromCenter(voted[4]!);
  if (!fromCenter) {
    return null;
  }

  if (!faces.has(fromCenter)) {
    return fromCenter;
  }

  const stored = faces.get(fromCenter)!;
  if (matchesStoredFace(voted, stored)) {
    return null;
  }

  // Center color disagrees with a stored face — wait for a clearer reading.
  return null;
}

function finalizeFaceColors(colors: StickerColor[], faceId: FaceId): StickerColor[] {
  const result = [...colors];
  result[4] = FACE_CENTER[faceId];
  return result;
}

export class LiveFaceAccumulator {
  private faces = new Map<FaceId, StickerColor[]>();
  private pendingReadings: StickerColor[][] = [];
  private stableSinceMs: number | null = null;
  private stabilityAnchor: StickerColor[] | null = null;

  reset(): void {
    this.faces.clear();
    this.pendingReadings = [];
    this.stableSinceMs = null;
    this.stabilityAnchor = null;
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
      needsNewFace: false,
    };

    if (!colors || colors.length !== 9) {
      this.stableSinceMs = null;
      this.stabilityAnchor = null;
      this.pendingReadings = [];
      return empty;
    }

    const centerFaceId = identifyFaceFromCenter(colors[4]!);
    const storedMatch = findStoredMatch(colors, this.faces);

    // Compare full 9-cell pattern, not center color alone
    if (storedMatch) {
      this.stableSinceMs = null;
      this.stabilityAnchor = null;
      this.pendingReadings = [];
      return {
        ...empty,
        currentFace: storedMatch,
        needsNewFace: true,
      };
    }

    if (
      !this.stabilityAnchor ||
      countMatchingCells(colors, this.stabilityAnchor) < STABILITY_JITTER_MATCHES
    ) {
      this.stabilityAnchor = [...colors];
      this.stableSinceMs = nowMs;
      this.pendingReadings = [];
    } else if (this.stableSinceMs === null) {
      this.stableSinceMs = nowMs;
    }

    const stableMs = this.stableSinceMs !== null ? nowMs - this.stableSinceMs : 0;
    const stableProgressSec = Math.min(stableMs, STABLE_DURATION_MS) / 1000;

    let newlyCaptured: FaceId | null = null;

    if (stableMs >= STABLE_DURATION_MS) {
      const history = [...this.pendingReadings, [...colors]];
      if (history.length > MAX_READINGS_PER_FACE) {
        history.shift();
      }
      this.pendingReadings = history;

      const voted = majorityVoteCells(history);
      const resolvedFaceId = pickFaceIdForCapture(voted, this.faces);

      if (resolvedFaceId) {
        const merged = finalizeFaceColors(voted, resolvedFaceId);
        const isNew = !this.faces.has(resolvedFaceId);
        this.faces.set(resolvedFaceId, merged);

        if (isNew) {
          newlyCaptured = resolvedFaceId;
        }
      }

      this.stableSinceMs = null;
      this.stabilityAnchor = null;
      this.pendingReadings = [];
    }

    return {
      faces: this.faces,
      knownFaces: [...this.faces.keys()],
      currentFace: centerFaceId,
      stableProgress: Math.round(stableProgressSec * 10) / 10,
      stableTarget: stableTargetSec,
      isComplete: this.faces.size === 6,
      newlyCaptured,
      needsNewFace: false,
    };
  }
}
