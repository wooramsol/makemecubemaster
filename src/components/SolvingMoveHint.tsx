import { useMemo } from 'react';
import type { Move } from '../types';
import { getMoveGuidanceView } from '../lib/cube/moveGuidanceView';
import { isDoubleMove } from '../lib/cube/moves';
import {
  getPanelBesideGuideStyle,
  getSolvingScanOverlayRect,
} from '../lib/vision/guideOverlay';
import { IsometricCubeGuide } from './IsometricCubeGuide';

interface SolvingMoveHintProps {
  visible: boolean;
  move: Move;
  facelet: string;
  rotationProgress: number;
  scanMatch: number;
  handMotionDetected: boolean;
  wrongMove: Move | null;
  currentStep: number;
  totalSteps: number;
  frameWidth: number;
  frameHeight: number;
  viewportWidth: number;
  viewportHeight: number;
  layerTurnInProgress: boolean;
  sawShapeBreak: boolean;
  layerTurnValidated: boolean;
  holdFaceAligned: boolean;
  onSkip?: () => void;
}

export function SolvingMoveHint({
  visible,
  move,
  facelet,
  rotationProgress,
  scanMatch,
  handMotionDetected,
  wrongMove,
  currentStep,
  totalSteps,
  frameWidth,
  frameHeight,
  viewportWidth,
  viewportHeight,
  layerTurnInProgress,
  sawShapeBreak,
  layerTurnValidated,
  holdFaceAligned,
  onSkip,
}: SolvingMoveHintProps) {
  const guidance = useMemo(() => getMoveGuidanceView(move), [move]);

  const panelStyle = useMemo(() => {
    const guideRect = getSolvingScanOverlayRect(
      frameWidth,
      frameHeight,
      viewportWidth,
      viewportHeight,
    );
    if (!guideRect || !viewportWidth) return undefined;
    return getPanelBesideGuideStyle(guideRect, viewportWidth, 240);
  }, [frameWidth, frameHeight, viewportWidth, viewportHeight]);

  const wrong = Boolean(wrongMove);
  const progressPct = Math.round(Math.max(0, Math.min(1, rotationProgress)) * 100);
  const scanPct = Math.round(scanMatch * 100);

  if (!visible) return null;

  const actionLine = isDoubleMove(move)
    ? `Corner view — flip the highlighted ${guidance.turnLayerName} layer 180°`
    : `Corner view — turn the highlighted ${guidance.turnLayerName} layer ${guidance.direction.toLowerCase()}`;

  let statusText = `Hold corner view: ${guidance.holdFace} + two adjacent faces visible`;
  if (!holdFaceAligned) {
    statusText = `Align ${guidance.holdFace} face to camera (scan ${scanPct}%)`;
  } else if (scanPct < 45) {
    statusText = `Hold steady in the guide — scan ${scanPct}%`;
  } else if (wrong) {
    statusText = `Wrong turn (${wrongMove}) — need ${move} (${guidance.direction.toLowerCase()})`;
  } else if (handMotionDetected) {
    statusText = 'Whole-cube spin — turn only the yellow highlighted layer';
  } else if (layerTurnValidated && rotationProgress >= 0.9) {
    statusText = `Turn recognized — hold steady (${progressPct}%)`;
  } else if (layerTurnInProgress || sawShapeBreak) {
    statusText = 'Layer turning — follow the arrow on the highlighted face';
  } else if (rotationProgress > 0.12) {
    statusText = `Keep turning ${guidance.turnLayer} (${progressPct}%)`;
  } else if (scanPct >= 45) {
    statusText = `Scan OK (${scanPct}%) — ${actionLine}`;
  }

  return (
    <div className="solving-move-hint" style={panelStyle} aria-live="polite">
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

        <p className="solving-move-hint-action">{actionLine}</p>

        <div className="solving-move-hint-stage">
          <IsometricCubeGuide
            move={move}
            facelet={facelet}
            rotationProgress={rotationProgress}
          />
          <div className={`solving-move-hint-badge${wrong ? ' solving-move-hint-badge--wrong' : ''}`}>
            <span className="solving-move-hint-symbol">{guidance.symbol}</span>
            <span className="solving-move-hint-turns">{guidance.turns}</span>
            <span className="solving-move-hint-direction">{guidance.direction}</span>
          </div>
        </div>

        <div className="solving-move-hint-meters">
          <span className="solving-move-hint-meter">
            Scan <strong>{scanPct}%</strong>
          </span>
          <span className="solving-move-hint-meter">
            Turn <strong>{progressPct}%</strong>
          </span>
        </div>

        <div className="solving-move-hint-progress" aria-hidden="true">
          <div className="solving-move-hint-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <p className="solving-move-hint-status">{statusText}</p>
      </div>
    </div>
  );
}
