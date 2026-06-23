import type { Move } from '../../types';
import { isDoubleMove, isPrimeMove, moveFace } from './moves';

export interface MoveRotationDisplay {
  symbol: string;
  direction: string;
  turns: string;
  face: string;
}

function mirrorMoveForSelfie(move: Move): Move {
  if (isDoubleMove(move)) return move;
  const face = moveFace(move);
  return isPrimeMove(move) ? (face as Move) : (`${face}'` as Move);
}

/** Selfie-mirrored rotation hint for the on-screen guide. */
export function getMoveRotationDisplay(move: Move, selfieMirror = true): MoveRotationDisplay {
  const effective = selfieMirror ? mirrorMoveForSelfie(move) : move;
  const face = moveFace(move);

  if (isDoubleMove(effective)) {
    return {
      symbol: '180°',
      direction: 'Half turn',
      turns: '½ turn',
      face,
    };
  }

  const clockwise = !isPrimeMove(effective);
  return {
    symbol: clockwise ? '↻' : '↺',
    direction: clockwise ? 'Clockwise' : 'Counter-clockwise',
    turns: '¼ turn',
    face,
  };
}
