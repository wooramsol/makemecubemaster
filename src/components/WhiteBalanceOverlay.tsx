import type { WhiteBalanceSample } from '../lib/vision/whiteBalance';
import type { GuideOverlayRect } from '../lib/vision/guideOverlay';
import { GuideFrame } from './GuideFrame';
import { GuideSpot } from './GuideSpot';

interface WhiteBalanceOverlayProps {
  visible: boolean;
  sample: WhiteBalanceSample | null;
  ready: boolean;
  error: string | null;
  onConfirm: () => void;
  guideRect: GuideOverlayRect | null;
  spotRect: GuideOverlayRect | null;
}

function warmthLabel(warmth: number): string {
  if (warmth > 18) return '노란 조명 — 흰 스티커 중심으로 보정합니다';
  if (warmth < -12) return '푸른 조명 — 흰 스티커 중심으로 보정합니다';
  return '흰 스티커 중심 색을 읽는 중';
}

export function WhiteBalanceOverlay({
  visible,
  sample,
  ready,
  error,
  onConfirm,
  guideRect,
  spotRect,
}: WhiteBalanceOverlayProps) {
  if (!visible) return null;

  return (
    <div className="wb-overlay" aria-live="polite">
      <GuideFrame rect={guideRect} />
      <GuideSpot rect={spotRect} />

      <div className="wb-panel scan-ui-panel">
        <p className="wb-step">1단계 — 흰색 기준 맞추기</p>
        <p className="wb-hint">흰 스티커 한 조각을 가운데 동그라미에 맞추세요</p>
        <p className="wb-distance-hint">팔 길이 정도 거리 — 너무 가까이 대지 마세요</p>

        <div className="wb-meter">
          {sample ? (
            <>
              <div
                className="wb-preview-swatch"
                style={{
                  background: `rgb(${Math.round(sample.r)}, ${Math.round(sample.g)}, ${Math.round(sample.b)})`,
                }}
              />
              <p className={`wb-status ${ready ? 'ready' : ''}`}>
                {ready ? '이 조명의 흰색을 인식했습니다' : '가운데 동그라미에 흰 스티커를...'}
              </p>
              <p className="wb-warmth">{warmthLabel(sample.warmth)}</p>
            </>
          ) : (
            <p className="wb-status">흰 종이·흰 스티커 조각도 사용할 수 있어요</p>
          )}
        </div>

        <button
          type="button"
          className="capture-button"
          disabled={!ready}
          onClick={onConfirm}
        >
          {ready ? '흰색 기준 저장 → 큐브 준비' : '동그라미에 흰색을 맞추세요'}
        </button>
        {error && <p className="wb-error">{error}</p>}
      </div>

      <div
        className="wb-guide-note"
        style={
          guideRect
            ? { top: guideRect.top + guideRect.height + 10, transform: 'translateX(-50%)' }
            : undefined
        }
      >
        <p>옆 색이 섞이지 않게 스티커 중심만 읽습니다</p>
      </div>
    </div>
  );
}
