import { useEffect, useRef } from 'react';
import type { Move } from '../types';
import { getFaceLayerName } from '../lib/cube/faceLayerNames';
import { colorsForMoveFromFacelet } from '../lib/cube/moveColorProgress';
import { getMoveRotationDisplay } from '../lib/cube/moveRotationDisplay';
import { isDoubleMove, moveFace } from '../lib/cube/moves';
import { drawGridRotationHint } from '../lib/vision/gridRotationArrow';
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
  onSkip,
}: SolvingMoveHintProps) {
  const arrowRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const faceId = moveFace(move);
  const faceColors = colorsForMoveFromFacelet(move, facelet);
  const display = getMoveRotationDisplay(move, true);
  const layerName = getFaceLayerName(faceId);
  const wrong = Boolean(wrongMove);
  const progressPct = Math.round(Math.max(0, Math.min(1, rotationProgress)) * 100);
  const scanPct = Math.round(scanMatch * 100);

  useEffect(() => {
    if (!visible) return;
    const canvas = arrowRef.current;
    const stage = stageRef.current;
    if (!canvas || !stage) return;

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    resize();

    let raf = 0;
    const draw = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const dpr = Math.min(window.devicePixelRatio, 2);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);
      drawGridRotationHint(ctx, w, h, move, rotationProgress);
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [visible, move, rotationProgress]);

  if (!visible) return null;

  const actionLine = isDoubleMove(move)
    ? `Flip the ${layerName} layer 180° (either way)`
    : `Turn the ${layerName} layer ${display.direction.toLowerCase()}`;

  let statusText = `Show the ${faceId} face to the camera, then follow the red arrow`;
  if (scanPct < 45) {
    statusText = `Hold ${faceId} (${layerName}) face steady in the guide — scan ${scanPct}%`;
  } else if (handMotionDetected) {
    statusText = 'Repositioning detected — turn one layer only, not the whole cube';
  } else if (wrong) {
    statusText = 'Wrong turn — follow the arrow direction';
  } else if (rotationProgress > 0.12) {
    statusText = `Good — keep turning (${progressPct}%)`;
  } else if (scanPct >= 45) {
    statusText = `Scan OK (${scanPct}%) — ${actionLine}`;
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

        <p className="solving-move-hint-action">{actionLine}</p>

        <div className="solving-move-hint-stage" ref={stageRef}>
          {faceColors.length === 9 && (
            <FaceColorGrid colors={faceColors} variant="solving" orientation="mirror" />
          )}
          <canvas ref={arrowRef} className="solving-move-hint-arrow" aria-hidden="true" />
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
