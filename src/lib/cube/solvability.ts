/** Minimal cube state needed for physical-solvability checks (Kociemba parity laws). */
export interface CubeParityState {
  cornerParity(): number;
  edgeParity(): number;
  co: number[];
  eo: number[];
}

/** Returns false for sticker layouts that cannot occur on a real 3x3 cube. */
export function isCubePhysicallySolvable(cube: CubeParityState): boolean {
  if (cube.cornerParity() !== cube.edgeParity()) {
    return false;
  }

  const cornerOrientationSum = cube.co.reduce((sum, value) => sum + value, 0);
  if (cornerOrientationSum % 3 !== 0) {
    return false;
  }

  const edgeOrientationSum = cube.eo.reduce((sum, value) => sum + value, 0);
  if (edgeOrientationSum % 2 !== 0) {
    return false;
  }

  return true;
}
