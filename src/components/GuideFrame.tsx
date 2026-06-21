import type { CSSProperties } from 'react';
import type { GuideOverlayRect } from '../lib/vision/guideOverlay';

interface GuideFrameProps {
  rect: GuideOverlayRect | null;
}

export function GuideFrame({ rect }: GuideFrameProps) {
  const style: CSSProperties | undefined = rect
    ? {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
        transform: 'none',
      }
    : undefined;

  return <div className="guide-frame-css" style={style} />;
}
