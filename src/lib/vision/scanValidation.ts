import type { StickerColor } from '../../types';

const FACELETTERS = ['U', 'R', 'F', 'D', 'L', 'B'] as const;

export function colorsDifferEnough(a: StickerColor[], b: StickerColor[]): boolean {
  if (a.length !== 9 || b.length !== 9) return true;
  let diff = 0;
  for (let i = 0; i < 9; i++) {
    if (a[i] !== b[i]) diff++;
  }
  return diff >= 3;
}

export function validateFaceletString(facelet: string): string | null {
  if (facelet.length !== 54) {
    return '큐브 색상 데이터가 부족합니다. 6면을 다시 스캔해 주세요.';
  }

  const counts = new Map<string, number>();
  for (const letter of facelet) {
    counts.set(letter, (counts.get(letter) ?? 0) + 1);
  }

  for (const face of FACELETTERS) {
    if (counts.get(face) !== 9) {
      return '색상 인식이 맞지 않습니다. 조명을 밝게 하고 6면을 다시 스캔해 주세요.';
    }
  }

  return null;
}
