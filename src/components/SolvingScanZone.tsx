import { getSolvingScanOverlayRect } from '../lib/vision/guideOverlay';
import type { SolvingTrackingStatus } from '../types';

interface SolvingScanZoneProps {
  visible: boolean;
  frameWidth: number;
  frameHeight: number;
  viewportWidth: number;
  viewportHeight: number;
  tracking: SolvingTrackingStatus;
  rotationProgress: number;
}

export function SolvingScanZone({
  visible,
  frameWidth,
  frameHeight,
  viewportWidth,
  viewportHeight,
  tracking,
  rotationProgress,
}: SolvingScanZoneProps) {
  if (!visible || !frameWidth || !frameHeight || !viewportWidth || !viewportHeight) {
    return null;
  }

  const rect = getSolvingScanOverlayRect(
    frameWidth,
    frameHeight,
    viewportWidth,
    viewportHeight,
  );
  if (!rect) return null;

  const statusClass =
    rotationProgress > 0.12
      ? 'solving-scan-zone--rotating'
      : tracking === 'locked'
        ? 'solving-scan-zone--locked'
        : tracking === 'lost'
          ? 'solving-scan-zone--lost'
          : 'solving-scan-zone--searching';

  const ringDeg = Math.round(rotationProgress * 360);

  return (
    <div className="solving-scan-zone-root" aria-hidden="true">
      <div
        className={`solving-scan-zone ${statusClass}`}
        style={{
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        }}
      >
        <div
          className="solving-scan-zone-ring"
          style={{ '--scan-progress': `${ringDeg}deg` } as React.CSSProperties}
        />
        <span className="solving-scan-zone-dot" />
        <p className="solving-scan-zone-hint">큐브를 여기에 맞추세요</p>
      </div>
    </div>
  );
}
