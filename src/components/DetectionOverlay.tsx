import type { DetectionFeedback, StickerColor } from '../types';
import { mirrorFaceCellsForSelfie } from '../lib/vision/selfieView';

const STICKER_HEX: Record<StickerColor, string> = {
  W: '#f5f5f5',
  Y: '#facc15',
  R: '#ef4444',
  O: '#f97316',
  G: '#22c55e',
  B: '#3b82f6',
};

const COLOR_SHORT: Record<StickerColor, string> = {
  R: '빨',
  O: '주',
  Y: '노',
  G: '초',
  B: '파',
  W: '흰',
};

const STATUS_LABEL: Record<DetectionFeedback['status'], string> = {
  searching: '큐브를 찾는 중...',
  detected: '아래 버튼으로 스캔',
  stabilizing: '스캔 중',
  captured: '캡처 완료!',
};

interface DetectionOverlayProps {
  feedback: DetectionFeedback;
  visible: boolean;
}

export function DetectionOverlay({ feedback, visible }: DetectionOverlayProps) {
  if (!visible) return null;

  const statusClass = feedback.status;
  const showGrid = feedback.cellColors.length === 9;
  const displayCells = showGrid ? mirrorFaceCellsForSelfie(feedback.cellColors) : [];

  return (
    <div className="detection-overlay" aria-live="polite">
      <div className="guide-frame-css" />

      <div className="scan-ui-panel scan-ui-panel--compact">
        <div className={`detection-status ${statusClass}`}>
          <span className="status-dot" />
          <span className="status-text">{STATUS_LABEL[feedback.status]}</span>
        </div>

        {showGrid && (
          <div className="cell-grid" aria-label="칸별 인식 결과">
            {displayCells.map((color, i) => (
              <span
                key={i}
                className="cell-grid-item"
                style={{ background: STICKER_HEX[color] }}
                title={COLOR_SHORT[color]}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
