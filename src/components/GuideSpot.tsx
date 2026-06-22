import type { CSSProperties } from 'react';
import type { GuideOverlayRect } from '../lib/vision/guideOverlay';

interface GuideSpotProps {
  rect: GuideOverlayRect | null;
  strokeColor?: string;
}

/** Center sample target — square stroke tinted to the color being learned */
export function GuideSpot({ rect, strokeColor = '#ffffff' }: GuideSpotProps) {
  const style: CSSProperties | undefined = rect
    ? {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
        transform: 'none',
        borderColor: strokeColor,
        boxShadow: `0 0 0 2px rgba(0, 0, 0, 0.35), 0 0 12px ${strokeColor}55`,
      }
    : undefined;

  return <div className="guide-spot-css" style={style} />;
}
