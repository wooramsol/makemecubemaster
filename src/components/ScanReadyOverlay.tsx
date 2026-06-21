import type { DetectionFeedback } from '../types';
import type { GuideOverlayRect } from '../lib/vision/guideOverlay';
import { GuideFrame } from './GuideFrame';

interface ScanReadyOverlayProps {
  visible: boolean;
  feedback: DetectionFeedback;
  guideRect: GuideOverlayRect | null;
  onStart: () => void;
}

export function ScanReadyOverlay({
  visible,
  feedback,
  guideRect,
  onStart,
}: ScanReadyOverlayProps) {
  if (!visible) return null;

  const cubeDetected =
    feedback.status === 'detected' && feedback.cellColors.length === 9;

  return (
    <div className="scan-ready-overlay" aria-live="polite">
      <GuideFrame rect={guideRect} />

      <div className="scan-ready-panel scan-ui-panel">
        <p className="scan-ready-step">2단계 — 큐브 준비</p>
        <p className="scan-ready-hint">
          큐브 한 면을 점선 안에 맞춘 뒤 스캔을 시작하세요
        </p>
        <p className="scan-ready-distance">팔 길이 거리 — 가까이 대면 옆 색이 번져요</p>
        <p className="scan-ready-sub">
          {cubeDetected
            ? '큐브가 감지되었습니다. 준비되면 시작 버튼을 누르세요.'
            : '아직 큐브가 감지되지 않았습니다. 얼굴이 아닌 큐브 면을 맞춰 주세요.'}
        </p>

        <button type="button" className="capture-button" onClick={onStart}>
          스캔 시작
        </button>
      </div>
    </div>
  );
}
