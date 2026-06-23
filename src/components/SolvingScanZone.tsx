import { getMoveRotationDisplay } from '../lib/cube/moveRotationDisplay';
import { getSolvingScanOverlayRect } from '../lib/vision/guideOverlay';
import type { FaceId, Move, StickerColor, SolvingTrackingStatus } from '../types';
import { FaceColorGrid } from './FaceColorGrid';

interface SolvingScanZoneProps {
  visible: boolean;
  frameWidth: number;
  frameHeight: number;
  viewportWidth: number;
  viewportHeight: number;
  tracking: SolvingTrackingStatus;
  rotationProgress: number;
  expectedMove: Move | null;
  visibleFaces: FaceId[];
  stableVisibleFaceColors: Partial<Record<FaceId, StickerColor[]>>;
}

export function SolvingScanZone({
  visible,
  frameWidth,
  frameHeight,
  viewportWidth,
  viewportHeight,
  tracking,
  rotationProgress,
  expectedMove,
  visibleFaces,
  stableVisibleFaceColors,
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
  const expectedDisplay = expectedMove ? getMoveRotationDisplay(expectedMove, true) : null;
  const progressPct = Math.round(rotationProgress * 100);
  const faces = visibleFaces.slice(0, 3);

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

        {expectedDisplay && (
          <div className="solving-scan-rotation-track">
            <span className="solving-scan-rotation-axis">{expectedDisplay.face}</span>
            <span className="solving-scan-rotation-symbol">{expectedDisplay.symbol}</span>
            <span className="solving-scan-rotation-label">{expectedDisplay.direction}</span>
            {rotationProgress > 0.05 && (
              <span className="solving-scan-rotation-pct">{progressPct}%</span>
            )}
          </div>
        )}

        <div className="solving-scan-faces">
          {faces.map((faceId) => {
            const colors = stableVisibleFaceColors[faceId];
            const hasColors = colors && colors.length === 9;
            return (
              <div key={faceId} className="solving-scan-face">
                <span className="solving-scan-face-label">{faceId}</span>
                {hasColors ? (
                  <FaceColorGrid colors={colors} variant="mini" orientation="mirror" />
                ) : (
                  <div className="solving-scan-face-placeholder" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
