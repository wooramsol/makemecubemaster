import type { StickerColor } from '../../types';

export function colorsDifferEnough(a: StickerColor[], b: StickerColor[]): boolean {
  if (a.length !== 9 || b.length !== 9) return true;
  let diff = 0;
  for (let i = 0; i < 9; i++) {
    if (a[i] !== b[i]) diff++;
  }
  return diff >= 3;
}
