import type { FaceId, Move, SolvingFeedback, SolvingTrackingStatus } from '../types';
import { moveFace } from '../lib/cube/moves';

interface SolvingOverlayProps {
  visible: boolean;
  currentMove: Move;
  feedback: SolvingFeedback;
  onSkip?: () => void;
}

const FACE_LABELS: Record<string, string> = {
  U: 'Top',
  D: 'Bottom',
  F: 'Front',
  B: 'Back',
  L: 'Left',
  R: 'Right',
};

function moveDescription(move: Move): string {
  const face = moveFace(move);
  const label = FACE_LABELS[face] ?? face;
  if (move.endsWith('2')) return `Turn ${label} 180°`;
  if (move.endsWith("'")) return `Turn ${label} counter-clockwise`;
  return `Turn ${label} clockwise`;
}

function faceLabel(face: FaceId): string {
  return FACE_LABELS[face] ?? face;
}

function trackingHint(
  status: SolvingTrackingStatus,
  progress: number,
  faceMatchesMove: boolean,
  currentMove: Move,
): string {
  if (!faceMatchesMove) {
    const target = faceLabel(moveFace(currentMove));
    return `Turn the ${target} face — 3D arrow shows on the cube`;
  }
  if (status === 'lost') return 'Cube lost — hold it steady in view';
  if (status === 'searching') return 'Center the cube in the guide';
  if (progress > 0.15) return 'Keep turning…';
  return 'Follow the highlighted face and arrow';
}

export function SolvingOverlay({
  visible,
  currentMove,
  feedback,
  onSkip,
}: SolvingOverlayProps) {
  if (!visible) return null;

  const { tracking, rotationProgress, wrongMove, faceMatchesMove } = feedback;
  const hint = wrongMove
    ? `Wrong move (${wrongMove}) — try ${currentMove}`
    : trackingHint(tracking, rotationProgress, faceMatchesMove, currentMove);

  return (
    <div className="solving-overlay" aria-live="polite">
      <div className="solving-banner">
        <p className="solving-move">{currentMove}</p>
        <p className="solving-description">{moveDescription(currentMove)}</p>
        <p className={`solving-hint${wrongMove ? ' solving-hint--wrong' : ''}`}>{hint}</p>
        {tracking === 'locked' && faceMatchesMove && (
          <div className="solving-progress" aria-hidden="true">
            <div
              className="solving-progress-fill"
              style={{ width: `${Math.round(rotationProgress * 100)}%` }}
            />
          </div>
        )}
      </div>
      {onSkip && (
        <button type="button" className="solving-skip" onClick={onSkip}>
          Skip step
        </button>
      )}
    </div>
  );
}
