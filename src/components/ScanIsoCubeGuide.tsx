import type { FaceId, StickerColor } from '../types';
import { ScanCubeGuide } from './ScanCubeGuide';

interface ScanIsoCubeGuideProps {
  scannedFaces: Partial<Record<FaceId, StickerColor[]>>;
  lastCapturedFace: FaceId | null;
  currentVisibleFace: FaceId | null;
  previewColors: StickerColor[] | null;
}

export function ScanIsoCubeGuide({
  scannedFaces,
  currentVisibleFace,
  previewColors,
}: ScanIsoCubeGuideProps) {
  const previewFace =
    previewColors && previewColors.length === 9 ? currentVisibleFace : null;

  return (
    <div className="iso-scan-cube-wrap" aria-label="Scan progress cube">
      <ScanCubeGuide
        scannedFaces={scannedFaces}
        previewFace={previewFace}
        previewColors={previewColors}
      />
    </div>
  );
}
