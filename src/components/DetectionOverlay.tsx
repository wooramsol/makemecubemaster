import type { DetectionFeedback, StickerColor } from '../types';

const STICKER_HEX: Record<StickerColor, string> = {
  W: '#f5f5f5',
  Y: '#facc15',
  R: '#ef4444',
  O: '#f97316',
  G: '#22c55e',
  B: '#3b82f6',
};

const COLOR_ORDER: StickerColor[] = ['R', 'O', 'Y', 'G', 'B', 'W'];

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
  detected: '큐브 감지됨 — 아래 버튼으로 스캔',
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
  const progress =
    feedback.stableTarget > 0 ? feedback.stableProgress / feedback.stableTarget : 0;
  const totalRead = Object.values(feedback.colorCounts).reduce((sum, n) => sum + n, 0);
  const showCounts = totalRead === 9;

  return (
    <div className="detection-overlay" aria-live="polite">
      <div className="guide-frame-css" />

      <div className="detection-ui">
        <div className={`detection-status ${statusClass}`}>
          <span className="status-dot" />
          <span className="status-text">{STATUS_LABEL[feedback.status]}</span>
          {feedback.status === 'stabilizing' && (
            <span className="status-progress">
              {feedback.stableProgress}/{feedback.stableTarget}
            </span>
          )}
        </div>

        {showCounts && (
          <div className="color-counts">
            <p className="color-counts-title">인식된 색상 (9칸)</p>
            <div className="color-counts-grid">
              {COLOR_ORDER.map((color) => (
                <div key={color} className="color-count-item">
                  <span
                    className="color-swatch"
                    style={{ background: STICKER_HEX[color] }}
                  />
                  <span className="color-count-label">{COLOR_SHORT[color]}</span>
                  <span className="color-count-value">{feedback.colorCounts[color]}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {feedback.status === 'stabilizing' && (
          <div className="stabilize-bar">
            <div className="stabilize-fill" style={{ width: `${progress * 100}%` }} />
          </div>
        )}
      </div>
    </div>
  );
}
