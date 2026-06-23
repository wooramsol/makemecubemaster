import { useEffect, useRef } from 'react';
import type { CubePose, Move } from '../types';
import { CubeARRenderer } from '../lib/three/cubeArRenderer';

interface CubeAROverlayProps {
  pose: CubePose | null;
  move: Move | null;
  rotationProgress: number;
  frameWidth: number;
  frameHeight: number;
  active: boolean;
}

export function CubeAROverlay({
  pose,
  move,
  rotationProgress,
  frameWidth,
  frameHeight,
  active,
}: CubeAROverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<CubeARRenderer | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new CubeARRenderer(canvas);
    rendererRef.current = renderer;

    return () => {
      renderer.dispose();
      rendererRef.current = null;
    };
  }, []);

  useEffect(() => {
    rendererRef.current?.resize(frameWidth, frameHeight);
  }, [frameWidth, frameHeight]);

  useEffect(() => {
    rendererRef.current?.setMove(move);
  }, [move]);

  useEffect(() => {
    rendererRef.current?.setRotationProgress(rotationProgress);
  }, [rotationProgress]);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const tick = () => {
      rendererRef.current?.render(pose);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pose, active]);

  return (
    <canvas
      ref={canvasRef}
      className={`cube-ar-overlay${active ? ' active' : ''}`}
      aria-hidden="true"
    />
  );
}
