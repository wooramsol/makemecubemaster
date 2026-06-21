import type { CSSProperties } from 'react';
import type { GuideOverlayRect } from '../lib/vision/guideOverlay';

interface GuideSpotProps {
  rect: GuideOverlayRect | null;
}

/** 흰색 기준용 중앙 스팟 표시 */
export function GuideSpot({ rect }: GuideSpotProps) {
  const style: CSSProperties | undefined = rect
    ? {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
        transform: 'none',
      }
    : undefined;

  return <div className="guide-spot-css" style={style} />;
}
