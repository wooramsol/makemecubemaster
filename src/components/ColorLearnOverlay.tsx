import type { StickerColor } from '../types';
import type { GuideOverlayRect } from '../lib/vision/guideOverlay';
import {
  COLOR_HEX,
  COLOR_LABELS,
  COLOR_LEARN_ORDER,
  type ColorLearnSample,
} from '../lib/vision/colorReference';
import { useConfirmKey } from '../hooks/useConfirmKey';
import { GuideFrame } from './GuideFrame';
import { GuideSpot } from './GuideSpot';

interface ColorLearnOverlayProps {
  visible: boolean;
  stepIndex: number;
  sample: ColorLearnSample | null;
  ready: boolean;
  error: string | null;
  onConfirm: () => void;
  guideRect: GuideOverlayRect | null;
  spotRect: GuideOverlayRect | null;
}

export function ColorLearnOverlay({
  visible,
  stepIndex,
  sample,
  ready,
  error,
  onConfirm,
  guideRect,
  spotRect,
}: ColorLearnOverlayProps) {
  const target: StickerColor = COLOR_LEARN_ORDER[stepIndex] ?? 'R';
  useConfirmKey(onConfirm, visible && ready);

  if (!visible) return null;

  return (
    <div className="color-learn-overlay" aria-live="polite">
      <GuideFrame rect={guideRect} />
      <GuideSpot rect={spotRect} />

      <div className="color-learn-panel">
        <p className="color-learn-target" style={{ color: COLOR_HEX[target] }}>
          {COLOR_LABELS[target]}
        </p>
        <p className="color-learn-step">
          {stepIndex + 1} / {COLOR_LEARN_ORDER.length}
        </p>

        {sample && (
          <div
            className="color-learn-swatch"
            style={{ background: `rgb(${sample.r},${sample.g},${sample.b})` }}
          />
        )}

        <button type="button" className="capture-button" disabled={!ready} onClick={onConfirm}>
          {ready ? 'Confirm' : 'Align sticker…'}
        </button>
        {error && <p className="color-learn-error">{error}</p>}
      </div>
    </div>
  );
}
