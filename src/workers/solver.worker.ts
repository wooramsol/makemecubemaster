import Cube from 'cubejs';
import { parseMoves } from '../lib/cube/moves';
import type { SolverMessage, SolverResponse } from '../lib/cube/solverClient';

let initialized = false;

function ensureInit(): void {
  if (!initialized) {
    Cube.initSolver();
    initialized = true;
  }
}

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
      const cube = Cube.fromString(msg.facelet);
      const algorithm = cube.solve();
      const moves = parseMoves(algorithm);
      self.postMessage({ type: 'solution', moves, id: msg.id } satisfies SolverResponse);
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
