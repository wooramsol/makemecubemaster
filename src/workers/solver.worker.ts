import Cube from 'cubejs';
import { findSolvableFacelet } from '../lib/cube/faceOrientation';
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
  const cube = Cube.fromString(facelet);
  return isCubePhysicallySolvable(cube as never);
}

function facesFromRecord(record: Record<FaceId, StickerColor[]>): Map<FaceId, StickerColor[]> {
  return new Map(Object.entries(record) as [FaceId, StickerColor[]][]);
}

const UNSOLVABLE_MESSAGE =
  'Could not build a valid cube. Any face order is fine, but hold each face at the same angle — do not spin the face in your hand. Re-scan in steady light.';

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

      let facelet = msg.facelet;
      if (!isSolvableFacelet(facelet)) {
        const corrected = findSolvableFacelet(facesFromRecord(msg.scannedFaces), isSolvableFacelet);
        if (!corrected) {
          self.postMessage({
            type: 'error',
            message: UNSOLVABLE_MESSAGE,
            id: msg.id,
          } satisfies SolverResponse);
          return;
        }
        facelet = corrected;
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
