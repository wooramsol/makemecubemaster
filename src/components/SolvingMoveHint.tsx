import { useMemo } from 'react';
import type { Move } from '../types';
import { getMoveGuidanceView } from '../lib/cube/moveGuidanceView';
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
    return getPanelBesideGuideStyle(guideRect, viewportWidth, 220);
  }, [frameWidth, frameHeight, viewportWidth, viewportHeight]);

  const wrong = Boolean(wrongMove);
  const progressPct = Math.round(Math.max(0, Math.min(1, rotationProgress)) * 100);
  const scanPct = Math.round(scanMatch * 100);

  if (!visible) return null;

  let statusText = `Hold ${guidance.holdFace} face toward camera`;
  if (!holdFaceAligned) {
    statusText = `Point ${guidance.holdFace} face at camera`;
  } else if (wrong) {
    statusText = `Wrong — use ${move}`;
  } else if (handMotionDetected) {
    statusText = 'Turn one layer only';
  } else if (layerTurnValidated && rotationProgress >= 0.9) {
    statusText = 'Hold steady…';
  } else if (layerTurnInProgress || sawShapeBreak) {
    statusText = 'Turning…';
  } else if (rotationProgress > 0.12) {
    statusText = `${progressPct}%`;
  } else if (scanPct >= 45) {
    statusText = `Turn highlighted ${guidance.turnLayer} ${guidance.symbol}`;
  }

  return (
    <div className="solving-move-hint" style={panelStyle} aria-live="polite">
      <div className={`solving-move-hint-card${wrong ? ' solving-move-hint-card--wrong' : ''}`}>
        <div className="solving-move-hint-header">
          <span className="solving-move-hint-step">
            {currentStep}/{totalSteps}
          </span>
          <span className="solving-move-hint-move">{move}</span>
          <span className="solving-move-hint-dir">{guidance.symbol}</span>
          {onSkip && (
            <button type="button" className="solving-move-hint-skip" onClick={onSkip}>
              Skip
            </button>
          )}
        </div>

        <div className="solving-move-hint-stage">
          <IsometricCubeGuide move={move} facelet={facelet} />
        </div>

        <div className="solving-move-hint-meters">
          <span>Scan {scanPct}%</span>
          <span>Turn {progressPct}%</span>
        </div>

        <div className="solving-move-hint-progress" aria-hidden="true">
          <div className="solving-move-hint-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <p className="solving-move-hint-status">{statusText}</p>
      </div>
    </div>
  );
}
