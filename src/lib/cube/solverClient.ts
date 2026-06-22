import type { FaceId, Move, StickerColor } from '../../types';

export type SolverMessage =
  | { type: 'init' }
  | {
      type: 'solve';
      facelet: string;
      scannedFaces: Record<FaceId, StickerColor[]>;
      captures: StickerColor[][];
      id: number;
    }
  | { type: 'apply'; move: Move; facelet: string; id: number };

export type SolverResponse =
  | { type: 'ready' }
  | { type: 'solution'; moves: Move[]; facelet: string; id: number }
  | { type: 'facelet'; facelet: string; id: number }
  | { type: 'error'; message: string; id?: number };

export function createSolverWorker(): Worker {
  return new Worker(new URL('../../workers/solver.worker.ts', import.meta.url), {
    type: 'module',
  });
}
