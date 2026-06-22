import Cube from 'cubejs';
import {
  findSolvableCubeFromCaptures,
  findSolvableFacelet,
} from '../lib/cube/faceOrientation';
import { isFaceletColorBalanced } from '../lib/cube/faceletValidate';
import { isCubePhysicallySolvable } from '../lib/cube/solvability';
import { parseMoves } from '../lib/cube/moves';
import type { FaceId, StickerColor } from '../types';
import type { SolverMessage, SolverResponse } from '../lib/cube/solverClient';

const SOLVED_FACELET = 'UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB';
const ORIENTATION_SEARCH_MS = 12000;
const CAPTURE_FALLBACK_MS = 3000;

let initialized = false;

function ensureInit(): void {
  if (!initialized) {
    Cube.initSolver();
    initialized = true;
  }
}

function warmupSolver(): void {
  ensureInit();
  const cube = Cube.fromString(SOLVED_FACELET);
  cube.solve();
}

function isSolvableFacelet(facelet: string): boolean {
  if (!isFaceletColorBalanced(facelet)) return false;

  try {
    const cube = Cube.fromString(facelet);
    return isCubePhysicallySolvable(cube as never);
  } catch {
    return false;
  }
}

function facesFromRecord(record: Record<FaceId, StickerColor[]>): Map<FaceId, StickerColor[]> {
  return new Map(Object.entries(record) as [FaceId, StickerColor[]][]);
}

function resolveFacelet(
  facelet: string,
  scannedFaces: Record<FaceId, StickerColor[]>,
  captures: StickerColor[][],
): string | null {
  const searchStart = Date.now();
  const searchBudget = () => Math.max(0, ORIENTATION_SEARCH_MS - (Date.now() - searchStart));

  if (isSolvableFacelet(facelet)) {
    return facelet;
  }

  const faces = facesFromRecord(scannedFaces);

  let resolved = findSolvableFacelet(faces, isSolvableFacelet, {
    deadlineMs: searchBudget(),
    maxOrientations: 4,
  });
  if (resolved) return resolved;

  resolved = findSolvableFacelet(faces, isSolvableFacelet, {
    deadlineMs: searchBudget(),
    maxOrientations: 8,
  });
  if (resolved) return resolved;

  return findSolvableCubeFromCaptures(captures, isSolvableFacelet, CAPTURE_FALLBACK_MS);
}

const UNSOLVABLE_MESSAGE =
  'Could not solve this cube state. Check the scanned faces above — one color may be wrong. Re-scan in steady light.';

self.onmessage = (event: MessageEvent<SolverMessage>) => {
  const msg = event.data;

  try {
    if (msg.type === 'init') {
      warmupSolver();
      self.postMessage({ type: 'ready' } satisfies SolverResponse);
      return;
    }

    if (msg.type === 'solve') {
      ensureInit();

      const facelet = resolveFacelet(msg.facelet, msg.scannedFaces, msg.captures);

      if (!facelet) {
        self.postMessage({
          type: 'error',
          message: UNSOLVABLE_MESSAGE,
          id: msg.id,
        } satisfies SolverResponse);
        return;
      }

      const cube = Cube.fromString(facelet);
      const algorithm = cube.solve();
      const moves = parseMoves(algorithm);
      self.postMessage({ type: 'solution', moves, facelet, id: msg.id } satisfies SolverResponse);
      return;
    }

    if (msg.type === 'apply') {
      const cube = Cube.fromString(msg.facelet);
      cube.move(msg.move);
      self.postMessage({
        type: 'facelet',
        facelet: cube.asString(),
        id: msg.id,
      } satisfies SolverResponse);
    }
  } catch (error) {
    self.postMessage({
      type: 'error',
      message: error instanceof Error ? error.message : 'Solver error',
      id: 'id' in msg ? msg.id : undefined,
    } satisfies SolverResponse);
  }
};
