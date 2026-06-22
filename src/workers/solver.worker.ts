import Cube from 'cubejs';
import {
  findSolvableCubeFromCaptures,
  findSolvableFacelet,
} from '../lib/cube/faceOrientation';
import { isFaceletStructurallyValid } from '../lib/cube/faceletStructure';
import { isFaceletColorBalanced } from '../lib/cube/faceletValidate';
import { isCubePhysicallySolvable } from '../lib/cube/solvability';
import { parseMoves } from '../lib/cube/moves';
import type { FaceId, StickerColor } from '../types';
import type { SolverMessage, SolverResponse } from '../lib/cube/solverClient';

const SOLVED_FACELET = 'UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB';

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
  if (!isFaceletColorBalanced(facelet) || !isFaceletStructurallyValid(facelet)) {
    return false;
  }

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
  if (isSolvableFacelet(facelet)) {
    return facelet;
  }

  const faces = facesFromRecord(scannedFaces);

  let resolved = findSolvableFacelet(faces, isSolvableFacelet, { maxOrientations: 4 });
  if (resolved) return resolved;

  resolved = findSolvableFacelet(faces, isSolvableFacelet, { maxOrientations: 8 });
  if (resolved) return resolved;

  return findSolvableCubeFromCaptures(captures, isSolvableFacelet, 5000);
}

const UNSOLVABLE_MESSAGE =
  'Could not assemble a valid cube from the scanned faces. Colors look consistent — try re-scanning with each face square to the guide.';

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
