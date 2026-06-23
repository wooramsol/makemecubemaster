import type { FaceScanInfo, Move, SolvingTrackingStatus } from '../types';
import { getMoveRotationDisplay } from '../lib/cube/moveRotationDisplay';

interface SolvingFaceStatusPanelProps {
  visible: boolean;
  tracking: SolvingTrackingStatus;
  faceScanInfos: FaceScanInfo[];
  expectedMove: Move | null;
  rotationProgress: number;
  onSkip?: () => void;
}

function statusLabel(status: FaceScanInfo['status']): string {
  if (status === 'locked') return 'OK';
  if (status === 'scanning') return '…';
  return '—';
}

export function SolvingFaceStatusPanel({
  visible,
  tracking,
  faceScanInfos,
  expectedMove,
  rotationProgress,
  onSkip,
}: SolvingFaceStatusPanelProps) {
  if (!visible) return null;

  const lockedCount = faceScanInfos.filter((f) => f.status === 'locked').length;
  const scanningCount = faceScanInfos.filter((f) => f.status === 'scanning').length;
  const total = faceScanInfos.length;
  const expectedDisplay = expectedMove ? getMoveRotationDisplay(expectedMove, true) : null;
  const progressPct = Math.round(rotationProgress * 100);

  const overallClass =
    lockedCount >= 3
      ? 'solving-face-status--all-locked'
      : tracking === 'lost'
        ? 'solving-face-status--lost'
        : lockedCount >= 2
          ? 'solving-face-status--partial'
          : 'solving-face-status--searching';

  return (
    <div className={`solving-face-status ${overallClass}`} aria-live="polite">
      <div className="solving-face-status-header">
        <span className="solving-face-status-title">3-face scan</span>
        <span className="solving-face-status-summary">
          {lockedCount}/{total || 3} locked
          {scanningCount > 0 ? ` · ${scanningCount} scanning` : ''}
        </span>
        {onSkip && (
          <button type="button" className="solving-face-status-skip" onClick={onSkip}>
            Skip
          </button>
        )}
      </div>

      <div className="solving-face-status-chips">
        {(faceScanInfos.length > 0
          ? faceScanInfos
          : (['U', 'R', 'F'] as const).map((faceId) => ({
              faceId,
              status: 'missing' as const,
              matchScore: 0,
            }))
        ).map((info) => (
          <div
            key={info.faceId}
            className={`solving-face-chip solving-face-chip--${info.status}`}
          >
            <span className="solving-face-chip-id">{info.faceId}</span>
            <span className="solving-face-chip-state">{statusLabel(info.status)}</span>
            {info.status !== 'missing' && (
              <span className="solving-face-chip-score">
                {Math.round(info.matchScore * 100)}%
              </span>
            )}
            <div
              className="solving-face-chip-bar"
              style={{ '--match': `${Math.round(info.matchScore * 100)}%` } as React.CSSProperties}
            />
          </div>
        ))}
      </div>

      {expectedDisplay && (
        <div className="solving-face-status-rotation">
          <span className="solving-face-status-axis">{expectedDisplay.face}</span>
          <span className="solving-face-status-symbol">{expectedDisplay.symbol}</span>
          <span className="solving-face-status-dir">{expectedDisplay.direction}</span>
          {rotationProgress > 0.04 && (
            <span className="solving-face-status-pct">{progressPct}%</span>
          )}
        </div>
      )}
    </div>
  );
}
