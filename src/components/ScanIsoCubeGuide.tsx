import { useEffect, useMemo, useRef, useState } from 'react';
import type { FaceId, StickerColor } from '../types';
import {
  SCAN_VIEW_FOR_FACE,
  REFERENCE_CORNER_VIEW,
  buildCornerCubeModel,
} from '../lib/cube/isometricGuide';
import { mirrorFaceCellsHorizontally } from '../lib/vision/selfieView';
import { PerspectiveCubeSvg, scanCellStyle } from './PerspectiveCubeSvg';

const ANIM_MS = 720;

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function shortestYawDelta(from: number, to: number): number {
  let delta = to - from;
  while (delta > Math.PI) delta -= Math.PI * 2;
  while (delta < -Math.PI) delta += Math.PI * 2;
  return delta;
}

interface ScanIsoCubeGuideProps {
  scannedFaces: Partial<Record<FaceId, StickerColor[]>>;
  lastCapturedFace: FaceId | null;
  currentVisibleFace: FaceId | null;
  previewColors: StickerColor[] | null;
}

export function ScanIsoCubeGuide({
  scannedFaces,
  lastCapturedFace,
  currentVisibleFace,
  previewColors,
}: ScanIsoCubeGuideProps) {
  const [yaw, setYaw] = useState(REFERENCE_CORNER_VIEW.yaw);
  const [pitch, setPitch] = useState(REFERENCE_CORNER_VIEW.pitch);
  const [showBackCaption, setShowBackCaption] = useState(false);
  const animRef = useRef<number>(0);
  const viewRef = useRef({ yaw: REFERENCE_CORNER_VIEW.yaw, pitch: REFERENCE_CORNER_VIEW.pitch });

  useEffect(() => {
    if (lastCapturedFace === 'B') {
      setShowBackCaption(true);
      const timer = setTimeout(() => setShowBackCaption(false), ANIM_MS + 120);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [lastCapturedFace]);

  useEffect(() => {
    const target = lastCapturedFace
      ? SCAN_VIEW_FOR_FACE[lastCapturedFace]
      : REFERENCE_CORNER_VIEW;
    const startYaw = viewRef.current.yaw;
    const startPitch = viewRef.current.pitch;
    const deltaYaw = shortestYawDelta(startYaw, target.yaw);
    const deltaPitch = target.pitch - startPitch;
    const startMs = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - startMs) / ANIM_MS);
      const eased = easeOutCubic(t);
      const nextYaw = startYaw + deltaYaw * eased;
      const nextPitch = startPitch + deltaPitch * eased;
      viewRef.current = { yaw: nextYaw, pitch: nextPitch };
      setYaw(nextYaw);
      setPitch(nextPitch);
      if (t < 1) {
        animRef.current = requestAnimationFrame(tick);
      }
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [lastCapturedFace]);

  const mirroredScanned = useMemo(() => {
    const result: Partial<Record<FaceId, StickerColor[]>> = {};
    for (const [faceId, colors] of Object.entries(scannedFaces)) {
      if (colors && colors.length === 9) {
        result[faceId as FaceId] = mirrorFaceCellsHorizontally(colors);
      }
    }
    return result;
  }, [scannedFaces]);

  const model = useMemo(
    () => buildCornerCubeModel({ yaw, pitch, size: 196, faceIds: ['U', 'F', 'R'] }),
    [yaw, pitch],
  );

  const previewFace =
    previewColors && previewColors.length === 9 ? currentVisibleFace : null;
  const mirroredPreview =
    previewColors && previewFace ? mirrorFaceCellsHorizontally(previewColors) : null;

  return (
    <div
      className={`iso-scan-cube-wrap${showBackCaption ? ' iso-scan-cube-wrap--back' : ''}`}
      aria-label="Scan progress cube"
    >
      <PerspectiveCubeSvg
        model={model}
        className="iso-cube-guide-svg iso-cube-guide-svg--scan"
        ariaLabel="Cube scan progress"
        cellStyle={(faceId, index) =>
          scanCellStyle(faceId, index, mirroredScanned, previewFace, mirroredPreview)
        }
      />
      {showBackCaption && (
        <p className="iso-scan-cube-caption">Back face captured — cube rotated</p>
      )}
    </div>
  );
}
