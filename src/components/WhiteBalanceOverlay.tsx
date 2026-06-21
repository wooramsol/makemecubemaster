import type { WhiteBalanceSample } from '../lib/vision/whiteBalance';

interface WhiteBalanceOverlayProps {
  visible: boolean;
  sample: WhiteBalanceSample | null;
  ready: boolean;
  error: string | null;
  onConfirm: () => void;
  onSkip: () => void;
}

function warmthLabel(warmth: number): string {
  if (warmth > 18) return '노란 기운이 감지됨';
  if (warmth < -12) return '푸른 기운이 감지됨';
  return '조명 균형 양호';
}

export function WhiteBalanceOverlay({
  visible,
  sample,
  ready,
  error,
  onConfirm,
  onSkip,
}: WhiteBalanceOverlayProps) {
  if (!visible) return null;

  return (
    <div className="wb-overlay" aria-live="polite">
      <div className="guide-frame-css" />

      <div className="wb-panel scan-ui-panel">
        <p className="wb-title">화이트밸런스 맞추기</p>
        <p className="wb-hint">흰 스티커 면(또는 흰 종이)을 점선 안에 맞춰 주세요</p>

        <div className="wb-meter">
          {sample ? (
            <>
              <p className={`wb-status ${ready ? 'ready' : ''}`}>
                {ready ? '흰색 영역 인식됨' : '흰색 영역을 찾는 중...'}
              </p>
              <p className="wb-warmth">{warmthLabel(sample.warmth)}</p>
              <div className="wb-rgb">
                <span>R {Math.round(sample.r)}</span>
                <span>G {Math.round(sample.g)}</span>
                <span>B {Math.round(sample.b)}</span>
              </div>
            </>
          ) : (
            <p className="wb-status">가이드 안에 흰 면을 보여주세요</p>
          )}
        </div>

        <button
          type="button"
          className="capture-button"
          disabled={!ready}
          onClick={onConfirm}
        >
          {ready ? '화이트밸런스 적용' : '흰 면을 가이드에 맞추세요'}
        </button>
        {error && <p className="wb-error">{error}</p>}
        <button type="button" className="wb-skip" onClick={onSkip}>
          건너뛰기
        </button>
      </div>
    </div>
  );
}
