const BREAK_THRESHOLD = 0.19;
const SETTLE_THRESHOLD = 0.12;
const BREAK_FRAMES_NEEDED = 2;
const SETTLE_FRAMES_NEEDED = 3;

export interface LayerTurnShapeState {
  baselineDeformation: number;
  peakDeformation: number;
  sawShapeBreak: boolean;
  settledAfterBreak: boolean;
  deformationActive: boolean;
  breakFrames: number;
  settledFrames: number;
}

export function createLayerTurnShapeState(): LayerTurnShapeState {
  return {
    baselineDeformation: 0,
    peakDeformation: 0,
    sawShapeBreak: false,
    settledAfterBreak: false,
    deformationActive: false,
    breakFrames: 0,
    settledFrames: 0,
  };
}

export function resetLayerTurnShapeState(state: LayerTurnShapeState): void {
  Object.assign(state, createLayerTurnShapeState());
}

export interface LayerTurnShapeUpdate {
  sawShapeBreak: boolean;
  settledAfterBreak: boolean;
  deformationActive: boolean;
  layerTurnValidated: boolean;
  peakDeformation: number;
}

/**
 * Tracks the layer-turn arc: rigid cube → shape breaks mid-turn → settles again.
 * Whole-cube hand spins keep deformation low and never set sawShapeBreak.
 */
export function updateLayerTurnShape(
  state: LayerTurnShapeState,
  deformationScore: number,
  aligned: boolean,
): LayerTurnShapeUpdate {
  if (aligned && !state.sawShapeBreak) {
    state.baselineDeformation = state.baselineDeformation * 0.85 + deformationScore * 0.15;
  }

  const breakLevel = Math.max(BREAK_THRESHOLD, state.baselineDeformation + 0.08);
  const aboveBreak = deformationScore >= breakLevel;
  const belowSettle = deformationScore <= SETTLE_THRESHOLD;

  if (aboveBreak) {
    state.breakFrames++;
    state.peakDeformation = Math.max(state.peakDeformation, deformationScore);
    if (state.breakFrames >= BREAK_FRAMES_NEEDED) {
      state.sawShapeBreak = true;
    }
  } else {
    state.breakFrames = Math.max(0, state.breakFrames - 1);
  }

  state.deformationActive = deformationScore > SETTLE_THRESHOLD * 1.35;

  if (state.sawShapeBreak && belowSettle) {
    state.settledFrames++;
    if (state.settledFrames >= SETTLE_FRAMES_NEEDED) {
      state.settledAfterBreak = true;
    }
  } else if (!belowSettle) {
    state.settledFrames = 0;
  }

  const layerTurnValidated =
    state.sawShapeBreak && (state.settledAfterBreak || state.peakDeformation >= 0.28);

  return {
    sawShapeBreak: state.sawShapeBreak,
    settledAfterBreak: state.settledAfterBreak,
    deformationActive: state.deformationActive,
    layerTurnValidated,
    peakDeformation: state.peakDeformation,
  };
}
