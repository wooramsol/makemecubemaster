import {
  applyWhiteBalance,
  isWhiteBalanceCalibrated,
  resetWhiteBalance,
  setWhiteBalanceFromSample,
} from './whiteBalance';

let awaitingFirstWhiteCenter = true;

/** Reset per-scan white reference (first face center = white). */
export function resetScanWhiteCalibration(): void {
  awaitingFirstWhiteCenter = true;
  resetWhiteBalance();
}

export function isAwaitingFirstWhiteCenter(): boolean {
  return awaitingFirstWhiteCenter;
}

/** Calibrate from center cell RGB on first face, then apply WB gains to all medians. */
export function prepareMediansForClassification(
  medians: ReadonlyArray<readonly [number, number, number]>,
): [number, number, number][] {
  const center = medians[4];
  if (awaitingFirstWhiteCenter && center) {
    const [r, g, b] = center;
    const brightness = (r + g + b) / 3;
    const warmth = (r + g) / 2 - b;
    setWhiteBalanceFromSample({
      r,
      g,
      b,
      brightness,
      warmth,
      ready: brightness > 60,
    });
    awaitingFirstWhiteCenter = false;
  }

  if (!isWhiteBalanceCalibrated()) {
    return medians.map(([r, g, b]) => [r, g, b] as [number, number, number]);
  }

  return medians.map(([r, g, b]) => applyWhiteBalance(r, g, b));
}
