import type { DetectionFeedback, StickerColor } from '../types';

const STICKER_HEX: Record<StickerColor, string> = {
  W: '#f5f5f5',
  Y: '#facc15',
  R: '#ef4444',
  O: '#f97316',
  G: '#22c55e',
  B: '#3b82f6',
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

        {feedback.detectedCenter && (
          <div className="color-preview">
            <span
              className="color-swatch"
              style={{ background: STICKER_HEX[feedback.detectedCenter] }}
            />
            <span className="color-label">
              9칸 읽음
              {feedback.matchCount > 0 && (
                <> · {feedback.detectedCenter && colorName(feedback.detectedCenter)}</>
              )}
            </span>
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

function colorName(c: StickerColor): string {
  const names: Record<StickerColor, string> = {
    W: '흰색',
    Y: '노란색',
    R: '빨간색',
    O: '주황색',
    G: '초록색',
    B: '파란색',
  };
  return names[c];
}
