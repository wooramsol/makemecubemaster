import { identifyFaceFromCenter } from '../cube/colors';
import { mirrorFaceCellsHorizontally } from './selfieView';
import type { FaceId, StickerColor } from '../../types';

const FACE_CENTER: Record<FaceId, StickerColor> = {
  U: 'W',
  D: 'Y',
  F: 'G',
  B: 'B',
  R: 'R',
  L: 'O',
};

/** Periphery cells only — center is used for face ID and may jitter */
const PERIPHERY_INDICES = [0, 1, 2, 3, 5, 6, 7, 8] as const;

/** Same face must stay in view this long before capture */
export const STABLE_DURATION_MS = 2000;
const MAX_READINGS_PER_FACE = 10;

/** Periphery cells that must match to treat two readings as the same physical face */
const SAME_FACE_PERIPHERY_MATCHES = 7;
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
  /** Center color could not be identified — hold steady */
  needsClearerCenter: boolean;
}

function countMatchingPeriphery(a: StickerColor[], b: StickerColor[]): number {
  let matches = 0;
  for (const i of PERIPHERY_INDICES) {
    if (a[i] === b[i]) matches++;
  }
  return matches;
}

function countMatchingCells(a: StickerColor[], b: StickerColor[]): number {
  let matches = 0;
  for (let i = 0; i < 9; i++) {
    if (a[i] === b[i]) matches++;
  }
  return matches;
}

function peripheryMatches(a: StickerColor[], b: StickerColor[]): boolean {
  return countMatchingPeriphery(a, b) >= SAME_FACE_PERIPHERY_MATCHES;
}

function matchesStoredFace(live: StickerColor[], stored: StickerColor[]): boolean {
  if (peripheryMatches(live, stored)) return true;
  if (peripheryMatches(mirrorFaceCellsHorizontally(live), stored)) return true;
  return false;
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

function majorityVoteCenter(readings: StickerColor[][]): StickerColor | null {
  if (readings.length === 0) return null;
  const counts = new Map<StickerColor, number>();
  for (const reading of readings) {
    const c = reading[4]!;
    counts.set(c, (counts.get(c) ?? 0) + 1);
  }
  let best: StickerColor | null = null;
  let bestCount = 0;
  for (const [color, count] of counts) {
    if (count > bestCount) {
      bestCount = count;
      best = color;
    }
  }
  return best;
}

/**
 * Only capture when the center sticker identifies a cube face.
 * Never assign to an arbitrary empty slot — that caused wrong labels and
 * mirrored-looking results on the post-scan preview.
 */
function pickFaceIdForCapture(
  voted: StickerColor[],
  faces: Map<FaceId, StickerColor[]>,
  history: StickerColor[][],
): FaceId | null {
  if (findStoredMatch(voted, faces)) {
    return null;
  }

  const centers = [majorityVoteCenter(history), voted[4]!];
  for (const center of centers) {
    if (!center) continue;
    const faceId = identifyFaceFromCenter(center);
    if (faceId && !faces.has(faceId)) {
      return faceId;
    }
  }

  return null;
}

function storeFaceColors(colors: StickerColor[]): StickerColor[] {
  return [...colors];
}

/**
 * Re-key scanned faces by detected center color so preview labels match
 * what was actually scanned (fixes legacy wrong-slot assignments).
 */
export function canonicalizeScannedFaces(
  faces: Map<FaceId, StickerColor[]>,
): Map<FaceId, StickerColor[]> {
  if (faces.size !== 6) return faces;

  const result = new Map<FaceId, StickerColor[]>();
  const claimed = new Set<FaceId>();

  const entries = [...faces.entries()].sort((a, b) => {
    const aOk = identifyFaceFromCenter(a[1][4]!) === a[0] ? 0 : 1;
    const bOk = identifyFaceFromCenter(b[1][4]!) === b[0] ? 0 : 1;
    return aOk - bOk;
  });

  for (const [, colors] of entries) {
    const detected = identifyFaceFromCenter(colors[4]!);
    if (detected && !claimed.has(detected)) {
      result.set(detected, [...colors]);
      claimed.add(detected);
    }
  }

  return result.size === 6 ? result : faces;
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
      needsClearerCenter: false,
    };

    if (!colors || colors.length !== 9) {
      this.stableSinceMs = null;
      this.stabilityAnchor = null;
      this.pendingReadings = [];
      return empty;
    }

    const centerFaceId = identifyFaceFromCenter(colors[4]!);
    const storedMatch = findStoredMatch(colors, this.faces);

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
    let needsClearerCenter = false;

    if (stableMs >= STABLE_DURATION_MS) {
      const history = [...this.pendingReadings, [...colors]];
      if (history.length > MAX_READINGS_PER_FACE) {
        history.shift();
      }
      this.pendingReadings = history;

      const voted = majorityVoteCells(history);
      const resolvedFaceId = pickFaceIdForCapture(voted, this.faces, history);

      if (resolvedFaceId) {
        const merged = storeFaceColors(voted);
        const isNew = !this.faces.has(resolvedFaceId);
        this.faces.set(resolvedFaceId, merged);

        if (isNew) {
          newlyCaptured = resolvedFaceId;
        }

        this.stableSinceMs = null;
        this.stabilityAnchor = null;
        this.pendingReadings = [];
      } else {
        needsClearerCenter = true;
        this.stableSinceMs = nowMs - STABLE_DURATION_MS + 400;
      }
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
      needsClearerCenter,
    };
  }
}

// Keep for solver reference
export { FACE_CENTER };
