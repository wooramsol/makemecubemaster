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
const RESOLVE_BUDGET_MS = 12_000;
const SOLVE_PROBE_TIMEOUT_MS = 8_000;

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

function remainingMs(deadline: number): number {
  return Math.max(0, deadline - Date.now());
}

function resolveFacelet(
  facelet: string,
  scannedFaces: Record<FaceId, StickerColor[]>,
  captures: StickerColor[][],
  budgetMs = RESOLVE_BUDGET_MS,
): string | null {
  const deadline = Date.now() + budgetMs;

  if (isSolvableFacelet(facelet)) {
    return facelet;
  }

  const faces = facesFromRecord(scannedFaces);

  let resolved = findSolvableFacelet(faces, isSolvableFacelet, {
    maxOrientations: 4,
    deadlineMs: remainingMs(deadline),
  });
  if (resolved) return resolved;

  resolved = findSolvableFacelet(faces, isSolvableFacelet, {
    maxOrientations: 8,
    deadlineMs: remainingMs(deadline),
  });
  if (resolved) return resolved;

  return findSolvableCubeFromCaptures(
    captures,
    isSolvableFacelet,
    Math.min(3_000, remainingMs(deadline)),
  );
}

function solveFaceletInChildWorker(facelet: string, timeoutMs: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL('./solveProbe.worker.ts', import.meta.url), {
      type: 'module',
    });

    const timer = setTimeout(() => {
      worker.terminate();
      reject(new Error('Solve probe timed out'));
    }, timeoutMs);

    worker.onmessage = (event: MessageEvent<{ type: 'ok'; algorithm: string } | { type: 'error'; message: string }>) => {
      clearTimeout(timer);
      worker.terminate();
      const msg = event.data;
      if (msg.type === 'ok') resolve(msg.algorithm);
      else reject(new Error(msg.message));
    };

    worker.onerror = () => {
      clearTimeout(timer);
      worker.terminate();
      reject(new Error('Solve probe failed'));
    };

    worker.postMessage(facelet);
  });
}

const UNSOLVABLE_MESSAGE =
  'Could not build a valid cube from the scan. Colors were likely misread — tap faces in the bar to re-scan.';

self.onmessage = (event: MessageEvent<SolverMessage>) => {
  const msg = event.data;

  if (msg.type === 'init') {
    try {
      warmupSolver();
      self.postMessage({ type: 'ready' } satisfies SolverResponse);
    } catch (error) {
      self.postMessage({
        type: 'error',
        message: error instanceof Error ? error.message : 'Solver init failed',
      } satisfies SolverResponse);
    }
    return;
  }

  if (msg.type === 'solve') {
    void (async () => {
      try {
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

        const algorithm = await solveFaceletInChildWorker(facelet, SOLVE_PROBE_TIMEOUT_MS);
        const moves = parseMoves(algorithm);
        self.postMessage({ type: 'solution', moves, facelet, id: msg.id } satisfies SolverResponse);
      } catch (error) {
        self.postMessage({
          type: 'error',
          message:
            error instanceof Error && error.message.includes('timed out')
              ? UNSOLVABLE_MESSAGE
              : error instanceof Error
                ? error.message
                : 'Solver error',
          id: msg.id,
        } satisfies SolverResponse);
      }
    })();
    return;
  }

  if (msg.type === 'apply') {
    try {
      const cube = Cube.fromString(msg.facelet);
      cube.move(msg.move);
      self.postMessage({
        type: 'facelet',
        facelet: cube.asString(),
        id: msg.id,
      } satisfies SolverResponse);
    } catch (error) {
      self.postMessage({
        type: 'error',
        message: error instanceof Error ? error.message : 'Solver error',
        id: msg.id,
      } satisfies SolverResponse);
    }
  }
};
