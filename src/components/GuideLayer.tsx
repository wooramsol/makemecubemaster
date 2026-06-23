import { useMemo } from 'react';
import type { AppPhase } from '../types';
import { getGuideOverlayRect, getWhiteSpotOverlayRect } from '../lib/vision/guideOverlay';
import { GuideOverlay } from './GuideOverlay';

interface GuideLayerProps {
  phase: AppPhase;
  trackingLocked: boolean;
  frameWidth: number;
  frameHeight: number;
  viewportWidth: number;
  viewportHeight: number;
  colorLearnSpot?: boolean;
  spotColor?: string;
}

function useGuideRects(
  frameWidth: number,
  frameHeight: number,
  viewportWidth: number,
  viewportHeight: number,
) {
  return useMemo(
    () => ({
      guideRect: getGuideOverlayRect(frameWidth, frameHeight, viewportWidth, viewportHeight),
      spotRect: getWhiteSpotOverlayRect(frameWidth, frameHeight, viewportWidth, viewportHeight),
    }),
    [frameWidth, frameHeight, viewportWidth, viewportHeight],
  );
}

function shouldShowGuide(phase: AppPhase, trackingLocked: boolean): boolean {
  return (
    phase === 'colorLearn' ||
    phase === 'scanReady' ||
    phase === 'liveScan' ||
    (phase === 'solving' && !trackingLocked)
  );
}

export function GuideLayer({
  phase,
  trackingLocked,
  frameWidth,
  frameHeight,
  viewportWidth,
  viewportHeight,
  colorLearnSpot = false,
  spotColor = '#ffffff',
}: GuideLayerProps) {
  const { guideRect, spotRect } = useGuideRects(
    frameWidth,
    frameHeight,
    viewportWidth,
    viewportHeight,
  );

  return (
    <GuideOverlay
      rect={guideRect}
      viewportWidth={viewportWidth}
      viewportHeight={viewportHeight}
      visible={shouldShowGuide(phase, trackingLocked)}
      showSpot={colorLearnSpot}
      spotRect={spotRect}
      spotColor={spotColor}
    />
  );
}
