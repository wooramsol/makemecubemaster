import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

interface CameraViewProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  onDimensions?: (width: number, height: number) => void;
}

export function CameraView({ videoRef, onDimensions }: CameraViewProps) {
  const [mirrored, setMirrored] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const update = () => {
      if (video.videoWidth && video.videoHeight) {
        onDimensions?.(video.videoWidth, video.videoHeight);
      }
    };

    video.addEventListener('loadedmetadata', update);
    video.addEventListener('resize', update);
    return () => {
      video.removeEventListener('loadedmetadata', update);
      video.removeEventListener('resize', update);
    };
  }, [videoRef, onDimensions]);

  return (
    <video
      ref={videoRef}
      className={`camera-feed${mirrored ? ' mirrored' : ''}`}
      playsInline
      muted
      autoPlay
      onLoadedMetadata={() => setMirrored(true)}
    />
  );
}
