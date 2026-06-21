import { useCallback, useEffect, useRef, useState } from 'react';

export interface WebcamState {
  stream: MediaStream | null;
  error: string | null;
  isReady: boolean;
}

export function useWebcam() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<WebcamState>({
    stream: null,
    error: null,
    isReady: false,
  });

  const start = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 },
          frameRate: { ideal: 60 },
        },
        audio: false,
      });

      const video = videoRef.current;
      if (video) {
        video.srcObject = stream;
        await video.play();
      }

      setState({ stream, error: null, isReady: true });
    } catch (error) {
      setState({
        stream: null,
        error: error instanceof Error ? error.message : '카메라 접근 실패',
        isReady: false,
      });
    }
  }, []);

  const stop = useCallback(() => {
    setState((prev) => {
      prev.stream?.getTracks().forEach((t) => t.stop());
      return { stream: null, error: null, isReady: false };
    });
    if (videoRef.current) videoRef.current.srcObject = null;
  }, []);

  useEffect(() => () => stop(), [stop]);

  return { videoRef, state, start, stop };
}
