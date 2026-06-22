import Cube from 'cubejs';
import {
  findSolvableCubeFromCaptures,
  findSolvableFacelet,
} from '../lib/cube/faceOrientation';
import { isCubePhysicallySolvable } from '../lib/cube/solvability';
import { parseMoves } from '../lib/cube/moves';
import type { FaceId, StickerColor } from '../types';
import type { SolverMessage, SolverResponse } from '../lib/cube/solverClient';

let initialized = false;

function ensureInit(): void {
  if (!initialized) {
    Cube.initSolver();
    initialized = true;
  }
}

function isSolvableFacelet(facelet: string): boolean {
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

const UNSOLVABLE_MESSAGE =
  'Could not solve this cube state. Check the scanned faces above — one color may be wrong. Re-scan in steady light.';

self.onmessage = (event: MessageEvent<SolverMessage>) => {
  const msg = event.data;

  try {
    if (msg.type === 'init') {
      ensureInit();
      self.postMessage({ type: 'ready' } satisfies SolverResponse);
      return;
    }

    if (msg.type === 'solve') {
      ensureInit();

      const facelet =
        findSolvableCubeFromCaptures(msg.captures, isSolvableFacelet) ??
        findSolvableFacelet(facesFromRecord(msg.scannedFaces), isSolvableFacelet) ??
        (isSolvableFacelet(msg.facelet) ? msg.facelet : null);

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
