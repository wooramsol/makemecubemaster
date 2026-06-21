import type { CubePose, DetectionFeedback, Point2D, StickerColor } from '../types';

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
  pose: CubePose | null;
  feedback: DetectionFeedback;
  videoWidth: number;
  videoHeight: number;
  visible: boolean;
}

export function DetectionOverlay({
  pose,
  feedback,
  videoWidth,
  videoHeight,
  visible,
}: DetectionOverlayProps) {
  if (!visible) return null;

  const corners = pose?.corners;
  const statusClass = feedback.status;
  const progress =
    feedback.stableTarget > 0 ? feedback.stableProgress / feedback.stableTarget : 0;

  const polygonPoints = corners ? corners.map((p) => `${p.x},${p.y}`).join(' ') : '';
  const gridLines = corners ? buildGridLines(corners) : null;
  const hasVideo = videoWidth > 0 && videoHeight > 0;

  return (
    <div className="detection-overlay" aria-live="polite">
      {/* CSS 정사각형 가이드 — 화면 기준 항상 정사각형 */}
      <div className="guide-frame-css" />

      {hasVideo && corners && (
        <svg
          className="detection-svg"
          viewBox={`0 0 ${videoWidth} ${videoHeight}`}
          preserveAspectRatio="xMidYMid slice"
        >
          <polygon points={polygonPoints} className={`detected-quad ${statusClass}`} />
          {gridLines?.map((line, i) => (
            <line key={i} {...line} className="detected-grid" />
          ))}
          {corners.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={10} className={`corner-dot ${statusClass}`} />
          ))}
        </svg>
      )}

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
              {feedback.matchCount > 0 && <> · {feedback.detectedCenter && colorName(feedback.detectedCenter)}</>}
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
    W: '흰색', Y: '노란색', R: '빨간색', O: '주황색', G: '초록색', B: '파란색',
  };
  return names[c];
}

function buildGridLines(corners: [Point2D, Point2D, Point2D, Point2D]) {
  const lerp = (a: Point2D, b: Point2D, t: number): Point2D => ({
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
  });
  const [tl, tr, br, bl] = corners;
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let i = 1; i <= 2; i++) {
    const t = i / 3;
    const top = lerp(tl, tr, t);
    const bottom = lerp(bl, br, t);
    lines.push({ x1: top.x, y1: top.y, x2: bottom.x, y2: bottom.y });
    const left = lerp(tl, bl, t);
    const right = lerp(tr, br, t);
    lines.push({ x1: left.x, y1: left.y, x2: right.x, y2: right.y });
  }
  return lines;
}
