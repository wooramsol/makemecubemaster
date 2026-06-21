import type { WhiteBalanceSample } from '../lib/vision/whiteBalance';

interface WhiteBalanceOverlayProps {
  visible: boolean;
  sample: WhiteBalanceSample | null;
  ready: boolean;
  error: string | null;
  onConfirm: () => void;
}

function warmthLabel(warmth: number): string {
  if (warmth > 18) return '노란 조명 — 흰 면으로 보정합니다';
  if (warmth < -12) return '푸른 조명 — 흰 면으로 보정합니다';
  return '현재 조명에서 흰색 감지 중';
}

export function WhiteBalanceOverlay({
  visible,
  sample,
  ready,
  error,
  onConfirm,
}: WhiteBalanceOverlayProps) {
  if (!visible) return null;

  return (
    <div className="wb-overlay" aria-live="polite">
      <div className="guide-frame-css" />

        <div className="wb-panel scan-ui-panel">
        <p className="wb-step">1단계 — 흰색 기준 맞추기</p>
        <p className="wb-hint">흰 스티커 면을 점선 안에 맞춰 주세요</p>

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
                {ready ? '이 조명의 흰색을 인식했습니다' : '흰 면을 찾는 중...'}
              </p>
              <p className="wb-warmth">{warmthLabel(sample.warmth)}</p>
            </>
          ) : (
            <p className="wb-status">가이드 안에 흰 면만 보이게 맞춰 주세요</p>
          )}
        </div>

        <button
          type="button"
          className="capture-button"
          disabled={!ready}
          onClick={onConfirm}
        >
          {ready ? '흰색 기준 저장 → 라이브 스캔' : '흰 면을 가이드에 맞추세요'}
        </button>
        {error && <p className="wb-error">{error}</p>}
      </div>

      <div className="wb-guide-note">
        <p>현재 방 조명에서의 흰색을 먼저 학습합니다</p>
      </div>
    </div>
  );
}
