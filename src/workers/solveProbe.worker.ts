import Cube from 'cubejs';

let initialized = false;

function ensureInit(): void {
  if (!initialized) {
    Cube.initSolver();
    initialized = true;
  }
}

self.onmessage = (event: MessageEvent<string>) => {
  try {
    ensureInit();
    const algorithm = Cube.fromString(event.data).solve();
    self.postMessage({ type: 'ok', algorithm } satisfies { type: 'ok'; algorithm: string });
  } catch (error) {
    self.postMessage({
      type: 'error',
      message: error instanceof Error ? error.message : 'Solve failed',
    } satisfies { type: 'error'; message: string });
  }
};
