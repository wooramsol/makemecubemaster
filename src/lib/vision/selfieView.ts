import type { StickerColor } from '../../types';

/**
 * 전면 카메라 셀카 미러(scaleX(-1)) 화면에 맞게 9칸 색상 배열을 좌우 반전.
 * 비전 파이프라인은 원본 프레임 순서를 유지하고, UI 표시에만 적용한다.
 */
export function mirrorFaceCellsForSelfie(colors: StickerColor[]): StickerColor[] {
  if (colors.length !== 9) return colors;

  const mirrored: StickerColor[] = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 2; col >= 0; col--) {
      mirrored.push(colors[row * 3 + col]!);
    }
  }
  return mirrored;
}
