import { identifyFaceFromCenter, getFaceCenterColor } from '../cube/colors';
import type { FaceId, ReadColor, StickerColor } from '../../types';
import { isKnownColor } from './readColorUtils';
import { reconcileLiveScanFaces } from './cubeColorReconcile';
import { wasLastCenterWarm } from './colorClassifier';
import { isColorsCalibrated } from './colorReference';

/** Periphery cells only — center is used for face ID and may jitter */
const PERIPHERY_INDICES = [0, 1, 2, 3, 5, 6, 7, 8] as const;

export const STABLE_DURATION_MS = 1000;
const MAX_READINGS_PER_FACE = 10;
const SAME_FACE_PERIPHERY_MATCHES = 6;
const STABILITY_JITTER_MATCHES = 5;
const MIN_COMPARABLE_CELLS = 5;

export interface LiveScanSnapshot {
  faces: Map<FaceId, ReadColor[]>;
  knownFaces: FaceId[];
  currentFace: FaceId | null;
  stableProgress: number;
  stableTarget: number;
  isComplete: boolean;
  newlyCaptured: FaceId | null;
  needsNewFace: boolean;
  needsClearerCenter: boolean;
  needsDeferredWarmFace: boolean;
  rescanTarget: FaceId | null;
}

function countMatchingPeriphery(a: ReadColor[], b: ReadColor[]): number {
  let matches = 0;
  for (const i of PERIPHERY_INDICES) {
    if (!isKnownColor(a[i]!) || !isKnownColor(b[i]!)) continue;
    if (a[i] === b[i]) matches++;
  }
  return matches;
}

function countMatchingKnownCells(a: ReadColor[], b: ReadColor[]): {
  matches: number;
  comparable: number;
} {
  let matches = 0;
  let comparable = 0;
  for (let i = 0; i < 9; i++) {
    if (!isKnownColor(a[i]!) || !isKnownColor(b[i]!)) continue;
    comparable++;
    if (a[i] === b[i]) matches++;
  }
  return { matches, comparable };
}

function matchesStoredFace(live: ReadColor[], stored: ReadColor[]): boolean {
  return countMatchingPeriphery(live, stored) >= SAME_FACE_PERIPHERY_MATCHES;
}

function findStoredMatch(
  colors: ReadColor[],
  faces: Map<FaceId, ReadColor[]>,
): FaceId | null {
  for (const [id, stored] of faces) {
    if (matchesStoredFace(colors, stored)) return id;
  }
  return null;
}

function majorityVoteCells(readings: ReadColor[][]): ReadColor[] {
  const result: ReadColor[] = [];
  for (let i = 0; i < 9; i++) {
    const votes = new Map<StickerColor, number>();
    let uncertainCount = 0;
    for (const reading of readings) {
      const c = reading[i]!;
      if (!isKnownColor(c)) {
        uncertainCount++;
        continue;
      }
      votes.set(c, (votes.get(c) ?? 0) + 1);
    }
    if (votes.size === 0) {
      result.push('?');
      continue;
    }
    let best: StickerColor = 'W';
    let bestCount = 0;
    const calibrated = isColorsCalibrated();
    for (const [color, count] of votes) {
      if (!calibrated && (color === 'R' || color === 'O')) continue;
      if (count > bestCount) {
        bestCount = count;
        best = color;
      }
    }

    const confidentReadings = readings.length - uncertainCount;
    if (bestCount < 2 || bestCount < confidentReadings * 0.45) {
      result.push('?');
    } else {
      result.push(best);
    }
  }
  return result;
}

function majorityVoteCenter(readings: ReadColor[][]): StickerColor | null {
  if (readings.length === 0) return null;
  const votes = new Map<StickerColor, number>();
  for (const reading of readings) {
    const c = reading[4]!;
    if (!isKnownColor(c)) continue;
    votes.set(c, (votes.get(c) ?? 0) + 1);
  }
  let best: StickerColor | null = null;
  let bestCount = 0;
  for (const [color, count] of votes) {
    if (count > bestCount) {
      bestCount = count;
      best = color;
    }
  }
  return bestCount >= 2 ? best : null;
}

function pickMissingWarmFace(faces: Map<FaceId, ReadColor[]>): FaceId | null {
  const needR = !faces.has('R');
  const needL = !faces.has('L');
  if (needR && !needL) return 'R';
  if (needL && !needR) return 'L';
  return null;
}

function pickFaceIdForCapture(
  voted: ReadColor[],
  faces: Map<FaceId, ReadColor[]>,
  history: ReadColor[][],
  rescanTarget: FaceId | null,
): FaceId | null {
  if (findStoredMatch(voted, faces)) return null;

  let candidate: FaceId | null = null;

  const centerCandidates: (ReadColor | null)[] = [
    majorityVoteCenter(history),
    voted[4] ?? '?',
  ];
  for (const center of centerCandidates) {
    if (center === null || !isKnownColor(center)) continue;
    const faceId = identifyFaceFromCenter(center);
    if (faceId && !faces.has(faceId)) {
      candidate = faceId;
      break;
    }
  }

  if (!candidate && wasLastCenterWarm()) {
    candidate = pickMissingWarmFace(faces);
  }

  if (rescanTarget) {
    if (candidate === rescanTarget) return rescanTarget;
    if (
      (rescanTarget === 'R' || rescanTarget === 'L') &&
      wasLastCenterWarm() &&
      !faces.has(rescanTarget)
    ) {
      return rescanTarget;
    }
    return null;
  }

  return candidate;
}

export function canonicalizeScannedFaces(
  faces: Map<FaceId, ReadColor[]>,
): Map<FaceId, ReadColor[]> {
  if (faces.size !== 6) return faces;

  const result = new Map<FaceId, ReadColor[]>();
  const claimed = new Set<FaceId>();

  const entries = [...faces.entries()].sort((a, b) => {
    const aCenter = a[1][4];
    const bCenter = b[1][4];
    const aOk = isKnownColor(aCenter) && identifyFaceFromCenter(aCenter) === a[0] ? 0 : 1;
    const bOk = isKnownColor(bCenter) && identifyFaceFromCenter(bCenter) === b[0] ? 0 : 1;
    return aOk - bOk;
  });

  for (const [, colors] of entries) {
    const center = colors[4];
    if (!isKnownColor(center)) continue;
    const detected = identifyFaceFromCenter(center);
    if (detected && !claimed.has(detected)) {
      result.set(detected, [...colors]);
      claimed.add(detected);
    }
  }

  return result.size === 6 ? result : faces;
}

export class LiveFaceAccumulator {
  private faces = new Map<FaceId, ReadColor[]>();
  private pendingReadings: ReadColor[][] = [];
  private stableSinceMs: number | null = null;
  private stabilityAnchor: ReadColor[] | null = null;
  private rescanTarget: FaceId | null = null;

  reset(): void {
    this.faces.clear();
    this.pendingReadings = [];
    this.stableSinceMs = null;
    this.stabilityAnchor = null;
    this.rescanTarget = null;
  }

  removeFace(faceId: FaceId): void {
    this.faces.delete(faceId);
    this.pendingReadings = [];
    this.stableSinceMs = null;
    this.stabilityAnchor = null;
    if (this.faces.size > 0) {
      this.refreshInferredFaces();
    }
  }

  setRescanTarget(faceId: FaceId | null): void {
    this.rescanTarget = faceId;
    this.pendingReadings = [];
    this.stableSinceMs = null;
    this.stabilityAnchor = null;
  }

  getRescanTarget(): FaceId | null {
    return this.rescanTarget;
  }

  getFaces(): Map<FaceId, ReadColor[]> {
    return this.faces;
  }

  private refreshInferredFaces(): void {
    if (this.faces.size === 0) return;
    this.faces = reconcileLiveScanFaces(this.faces);
  }

  update(colors: ReadColor[] | null, nowMs = Date.now()): LiveScanSnapshot {
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
      needsDeferredWarmFace: false,
      rescanTarget: this.rescanTarget,
    };

    if (!colors || colors.length !== 9) {
      this.stableSinceMs = null;
      this.stabilityAnchor = null;
      this.pendingReadings = [];
      return empty;
    }

    const center = colors[4];
    const centerFaceId = isKnownColor(center) ? identifyFaceFromCenter(center) : null;
    const storedMatch = findStoredMatch(colors, this.faces);

    if (storedMatch) {
      this.stableSinceMs = null;
      this.stabilityAnchor = null;
      this.pendingReadings = [];
      return { ...empty, currentFace: storedMatch, needsNewFace: true, rescanTarget: this.rescanTarget };
    }

    const anchorMatch = this.stabilityAnchor
      ? countMatchingKnownCells(colors, this.stabilityAnchor)
      : { matches: 0, comparable: 0 };

    if (
      !this.stabilityAnchor ||
      anchorMatch.comparable < MIN_COMPARABLE_CELLS ||
      anchorMatch.matches < STABILITY_JITTER_MATCHES
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
    let needsDeferredWarmFace = false;

    if (stableMs >= STABLE_DURATION_MS) {
      const history = [...this.pendingReadings, [...colors]];
      if (history.length > MAX_READINGS_PER_FACE) history.shift();
      this.pendingReadings = history;

      const voted = majorityVoteCells(history);
      const resolvedFaceId = pickFaceIdForCapture(voted, this.faces, history, this.rescanTarget);

      if (resolvedFaceId) {
        const isNew = !this.faces.has(resolvedFaceId);
        const stored = [...voted];
        stored[4] = getFaceCenterColor(resolvedFaceId);
        this.faces.set(resolvedFaceId, stored);
        if (isNew) newlyCaptured = resolvedFaceId;
        if (this.rescanTarget === resolvedFaceId) {
          this.rescanTarget = null;
        }
        this.refreshInferredFaces();
        this.stableSinceMs = null;
        this.stabilityAnchor = null;
        this.pendingReadings = [];
      } else {
        needsClearerCenter = true;
        needsDeferredWarmFace =
          wasLastCenterWarm() && !this.faces.has('R') && !this.faces.has('L');
        this.stableSinceMs = nowMs - STABLE_DURATION_MS + 400;
      }
    }

    this.refreshInferredFaces();

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
      needsDeferredWarmFace,
      rescanTarget: this.rescanTarget,
    };
  }
}
