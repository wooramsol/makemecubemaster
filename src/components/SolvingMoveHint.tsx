import type { Move } from '../types';
import { colorsForMoveFromFacelet } from '../lib/cube/moveColorProgress';
import { getMoveRotationDisplay } from '../lib/cube/moveRotationDisplay';
import { moveFace } from '../lib/cube/moves';
import { FaceColorGrid } from './FaceColorGrid';

interface SolvingMoveHintProps {
  visible: boolean;
  move: Move;
  facelet: string;
  rotationProgress: number;
  handMotionDetected: boolean;
  wrongMove: Move | null;
  currentStep: number;
  totalSteps: number;
  onSkip?: () => void;
}

export function SolvingMoveHint({
  visible,
  move,
  facelet,
  rotationProgress,
  handMotionDetected,
  wrongMove,
  currentStep,
  totalSteps,
  onSkip,
}: SolvingMoveHintProps) {
  if (!visible) return null;

  const faceColors = colorsForMoveFromFacelet(move, facelet);
  const display = getMoveRotationDisplay(move, true);
  const wrong = Boolean(wrongMove);
  const progressPct = Math.round(Math.max(0, Math.min(1, rotationProgress)) * 100);

  let statusText = `Turn the ${moveFace(move)} face to match`;
  if (handMotionDetected) {
    statusText = 'Repositioning — rotate one layer only, not the whole cube';
  } else if (wrong) {
    statusText = 'Wrong turn — follow the hint above';
  } else if (rotationProgress > 0.15) {
    statusText = 'Keep turning…';
  }

  return (
    <div className="solving-move-hint" aria-live="polite">
      <div className={`solving-move-hint-card${wrong ? ' solving-move-hint-card--wrong' : ''}`}>
        <div className="solving-move-hint-header">
          <span className="solving-move-hint-step">
            Step {currentStep} / {totalSteps}
          </span>
          <span className="solving-move-hint-move">{move}</span>
          {onSkip && (
            <button type="button" className="solving-move-hint-skip" onClick={onSkip}>
              Skip
            </button>
          )}
        </div>

        <div className="solving-move-hint-stage">
          {faceColors.length === 9 && (
            <FaceColorGrid colors={faceColors} variant="solving" orientation="mirror" />
          )}
          <div
            className={`solving-move-hint-badge${wrong ? ' solving-move-hint-badge--wrong' : ''}`}
          >
            <span className="solving-move-hint-symbol">{display.symbol}</span>
            <span className="solving-move-hint-turns">{display.turns}</span>
            <span className="solving-move-hint-direction">{display.direction}</span>
          </div>
        </div>

        <div className="solving-move-hint-progress" aria-hidden="true">
          <div className="solving-move-hint-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <p className="solving-move-hint-status">{statusText}</p>
      </div>
    </div>
  );
}
