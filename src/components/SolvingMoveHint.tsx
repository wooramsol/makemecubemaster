import { useEffect, useMemo, useRef } from 'react';
import type { Move } from '../types';
import {
  getFaceletFaceColors,
} from '../lib/cube/moveColorProgress';
import { getMoveGuidanceView } from '../lib/cube/moveGuidanceView';
import { isDoubleMove } from '../lib/cube/moves';
import { drawEdgeRotationArrow } from '../lib/vision/edgeRotationArrow';
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
  const arrowCanvasRef = useRef<HTMLCanvasElement>(null);
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

  const faceColors = getFaceletFaceColors(facelet, guidance.holdFace);
  const wrong = Boolean(wrongMove);
  const progressPct = Math.round(Math.max(0, Math.min(1, rotationProgress)) * 100);
  const scanPct = Math.round(scanMatch * 100);

  useEffect(() => {
    const canvas = arrowCanvasRef.current;
    if (!canvas || !visible) return;
    const size = 112;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, size, size);
    drawEdgeRotationArrow(
      ctx,
      size,
      size,
      guidance.edgeSpec,
      Math.max(0.15, rotationProgress),
      isDoubleMove(move),
    );
  }, [visible, guidance.edgeSpec, rotationProgress, move]);

  if (!visible) return null;

  const actionLine = isDoubleMove(move)
    ? `Hold ${guidance.holdFace} face — flip ${guidance.turnLayerName} layer 180° along ${guidance.axisLabel}`
    : `Hold ${guidance.holdFace} face — turn ${guidance.turnLayerName} layer ${guidance.direction.toLowerCase()} along ${guidance.axisLabel}`;

  let statusText = `Show the ${guidance.holdFace} (${guidance.holdFaceName}) face — not the ${guidance.turnLayer} face`;
  if (!holdFaceAligned) {
    statusText = `Point the ${guidance.holdFace} face at the camera (scan ${scanPct}%)`;
  } else if (scanPct < 45) {
    statusText = `Hold ${guidance.holdFace} face steady in the guide — scan ${scanPct}%`;
  } else if (wrong) {
    statusText = `Wrong turn (${wrongMove}) — need ${move} (${guidance.direction.toLowerCase()})`;
  } else if (handMotionDetected) {
    statusText = 'Whole-cube spin detected — turn one layer along the edge axis only';
  } else if (layerTurnValidated && rotationProgress >= 0.9) {
    statusText = `Turn recognized — hold steady (${progressPct}%)`;
  } else if (layerTurnInProgress || sawShapeBreak) {
    statusText = 'Layer turning along edge axis…';
  } else if (rotationProgress > 0.12) {
    statusText = `Keep turning the ${guidance.turnLayerName} layer (${progressPct}%)`;
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
            <div className="solving-move-hint-face-wrap">
              <FaceColorGrid colors={faceColors} variant="solving" orientation="mirror" />
              <canvas
                ref={arrowCanvasRef}
                className="solving-move-hint-edge-arrow"
                width={112}
                height={112}
                aria-hidden
              />
              <span className="solving-move-hint-face-label">{guidance.holdFace}</span>
            </div>
          )}
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
