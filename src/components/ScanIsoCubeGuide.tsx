import { useEffect, useMemo, useRef, useState } from 'react';
import type { FaceId, StickerColor } from '../types';
import { COLOR_HEX } from '../lib/vision/colorReference';
import { pathFromPoints } from '../lib/cube/isoCubeSvg';
import {
  SCAN_VIEW_FOR_FACE,
  buildIsoScanCubeModel,
  scanCellColor,
} from '../lib/cube/isometricGuide';
import { mirrorFaceCellsHorizontally } from '../lib/vision/selfieView';

const WHITE_FACE = '#f8fafc';
const PREVIEW_FACE = 'rgba(248, 250, 252, 0.55)';
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
  const [yaw, setYaw] = useState(SCAN_VIEW_FOR_FACE.F.yaw);
  const [pitch, setPitch] = useState(SCAN_VIEW_FOR_FACE.F.pitch);
  const [showBackCaption, setShowBackCaption] = useState(false);
  const animRef = useRef<number>(0);
  const viewRef = useRef({ yaw: SCAN_VIEW_FOR_FACE.F.yaw, pitch: SCAN_VIEW_FOR_FACE.F.pitch });

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
      : SCAN_VIEW_FOR_FACE.F;
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
    () => buildIsoScanCubeModel({ yaw, pitch, size: 196 }),
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
      <svg
        className="iso-cube-guide-svg iso-cube-guide-svg--scan"
        viewBox={`0 0 ${model.size} ${model.size}`}
        width={model.size}
        height={model.size}
      >
        {model.faceOutlines.map((face) => (
          <path
            key={`bg-${face.faceId}`}
            d={pathFromPoints(face.points)}
            className="iso-cube-guide-face-bg"
          />
        ))}

        {model.cells.map((cell) => {
          const raw = scanCellColor(
            cell.faceId,
            cell.index,
            mirroredScanned,
            previewFace,
            mirroredPreview,
          );
          const isPreview =
            previewFace === cell.faceId && !mirroredScanned[cell.faceId] && raw !== null;
          const fill = raw ? COLOR_HEX[raw] : isPreview ? PREVIEW_FACE : WHITE_FACE;
          const scanned = Boolean(mirroredScanned[cell.faceId]);
          return (
            <path
              key={`${cell.faceId}-${cell.index}`}
              d={pathFromPoints(cell.points)}
              className={
                scanned
                  ? 'iso-cube-guide-cell iso-cube-guide-cell--scanned'
                  : isPreview
                    ? 'iso-cube-guide-cell iso-cube-guide-cell--preview'
                    : 'iso-cube-guide-cell iso-cube-guide-cell--empty'
              }
              fill={fill}
            />
          );
        })}

        {model.faceOutlines.map((face) => (
          <path
            key={`outline-${face.faceId}`}
            d={pathFromPoints(face.points)}
            className="iso-cube-guide-face-outline"
            fill="none"
          />
        ))}
      </svg>
      {showBackCaption && (
        <p className="iso-scan-cube-caption">Back face captured — cube rotated</p>
      )}
    </div>
  );
}
