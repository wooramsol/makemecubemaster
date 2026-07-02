import { useMemo } from 'react';
import type { Move } from '../types';
import { getMoveGuidanceView } from '../lib/cube/moveGuidanceView';
import { getSelfieHoldPose } from '../lib/cube/selfieHoldPose';
import {
  getPanelBesideGuideStyle,
  getSolvingScanOverlayRect,
} from '../lib/vision/guideOverlay';
import { SolvingCubeGuide } from './SolvingCubeGuide';

interface SolvingMoveHintProps {
  visible: boolean;
  move: Move;
  facelet: string;
  moves: Move[];
  currentIndex: number;
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
  moves,
  currentIndex,
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
  holdFaceAligned,
  onSkip,
}: SolvingMoveHintProps) {
  const guidance = useMemo(() => getMoveGuidanceView(move), [move]);
  const holdPose = useMemo(() => getSelfieHoldPose(move), [move]);

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

  let statusText = holdPose.holdLine;
  if (!holdFaceAligned) {
    statusText = `Match this pose — ${holdPose.holdFace} face to camera`;
  } else if (wrong) {
    statusText = `Wrong turn — need ${move}`;
  } else if (handMotionDetected) {
    statusText = 'Turn white-outlined layer only';
  } else if (progressPct >= 90) {
    statusText = 'Hold steady…';
  } else if (progressPct > 12) {
    statusText = `Turning ${guidance.turnLayer}… ${progressPct}%`;
  }

  return (
    <div className="solving-move-hint" style={panelStyle} aria-live="polite">
      <div className={`solving-move-hint-card${wrong ? ' solving-move-hint-card--wrong' : ''}`}>
        <div className="solving-move-hint-header">
          <span className="solving-move-hint-step">
            {currentStep}/{totalSteps}
          </span>
          <span className="solving-move-hint-move">
            {move} {guidance.symbol}
          </span>
          {onSkip && (
            <button type="button" className="solving-move-hint-skip" onClick={onSkip}>
              Skip
            </button>
          )}
        </div>

        <div className="solving-move-hint-stage">
          <SolvingCubeGuide
            facelet={facelet}
            moves={moves}
            currentIndex={currentIndex}
            wrongMove={wrongMove}
          />
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
