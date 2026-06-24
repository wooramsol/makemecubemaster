import { useMemo } from 'react';
import type { Move } from '../types';
import { getFaceLayerName } from '../lib/cube/faceLayerNames';
import { colorsForMoveFromFacelet } from '../lib/cube/moveColorProgress';
import { getMoveRotationDisplay } from '../lib/cube/moveRotationDisplay';
import { isDoubleMove, moveFace } from '../lib/cube/moves';
import {
  getPanelBesideGuideStyle,
  getSolvingScanOverlayRect,
} from '../lib/vision/guideOverlay';
import { FaceColorGrid } from './FaceColorGrid';

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
  onSkip,
}: SolvingMoveHintProps) {
  const panelStyle = useMemo(() => {
    const guideRect = getSolvingScanOverlayRect(
      frameWidth,
      frameHeight,
      viewportWidth,
      viewportHeight,
    );
    if (!guideRect || !viewportWidth) return undefined;
    return getPanelBesideGuideStyle(guideRect, viewportWidth, 220);
  }, [frameWidth, frameHeight, viewportWidth, viewportHeight]);

  const faceId = moveFace(move);
  const faceColors = colorsForMoveFromFacelet(move, facelet);
  const display = getMoveRotationDisplay(move, true);
  const layerName = getFaceLayerName(faceId);
  const wrong = Boolean(wrongMove);
  const progressPct = Math.round(Math.max(0, Math.min(1, rotationProgress)) * 100);
  const scanPct = Math.round(scanMatch * 100);

  if (!visible) return null;

  const actionLine = isDoubleMove(move)
    ? `Flip the ${layerName} layer 180° (either way)`
    : `Turn the ${layerName} layer ${display.direction.toLowerCase()}`;

  let statusText = `Show the ${faceId} face to the camera`;
  if (scanPct < 45) {
    statusText = `Hold ${faceId} (${layerName}) face steady in the guide — scan ${scanPct}%`;
  } else if (wrong) {
    statusText = `Wrong turn (${wrongMove}) — need ${move} (${display.direction.toLowerCase()})`;
  } else if (handMotionDetected) {
    statusText = 'Repositioning detected — turn one layer only, not the whole cube';
  } else if (layerTurnValidated && rotationProgress >= 0.9) {
    statusText = `Turn recognized — hold steady (${progressPct}%)`;
  } else if (layerTurnInProgress || sawShapeBreak) {
    statusText = 'Layer turning — cube shape shifting…';
  } else if (rotationProgress > 0.12) {
    statusText = `Keep turning the layer (${progressPct}%)`;
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
          {faceColors.length === 9 && (
            <FaceColorGrid colors={faceColors} variant="solving" orientation="mirror" />
          )}
          <div className={`solving-move-hint-badge${wrong ? ' solving-move-hint-badge--wrong' : ''}`}>
            <span className="solving-move-hint-symbol">{display.symbol}</span>
            <span className="solving-move-hint-turns">{display.turns}</span>
            <span className="solving-move-hint-direction">{display.direction}</span>
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
