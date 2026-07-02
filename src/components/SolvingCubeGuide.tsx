import { useEffect, useRef } from 'react';
import type { Move } from '../types';
import { SolveCubeRenderer } from '../lib/three/solveCubeRenderer';

interface SolvingCubeGuideProps {
  /** Cube state BEFORE the current expected move. */
  facelet: string;
  /** Full solution and progress — a completed physical move animates the cube. */
  moves: Move[];
  currentIndex: number;
  wrongMove: Move | null;
}

/**
 * Solid 3D cube guide for the solving phase. Mirrors the selfie preview
 * (CSS scaleX(-1)) and only advances when a physical move is recognized:
 * the completed move animates, then the next rotation arrow appears.
 */
export function SolvingCubeGuide({
  facelet,
  moves,
  currentIndex,
  wrongMove,
}: SolvingCubeGuideProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<SolveCubeRenderer | null>(null);
  const playedIndexRef = useRef(currentIndex);
  const queueRef = useRef<Promise<void>>(Promise.resolve());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new SolveCubeRenderer(canvas);
    renderer.setGuideView();
    rendererRef.current = renderer;
    playedIndexRef.current = -1;

    return () => {
      renderer.dispose();
      rendererRef.current = null;
    };
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const sync = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (w < 8 || h < 8) return;
      rendererRef.current?.resize(w, h);
      rendererRef.current?.renderFrame();
    };

    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const renderer = rendererRef.current;
    if (!renderer) return;

    const currentMove = moves[currentIndex] ?? null;
    const prevIndex = playedIndexRef.current;
    playedIndexRef.current = currentIndex;

    const finish = () => {
      if (rendererRef.current !== renderer) return;
      if (renderer.getFacelet() !== facelet) {
        renderer.setFacelet(facelet);
      }
      if (currentMove) {
        renderer.orientForMove(currentMove);
        renderer.setMoveArrow(currentMove, false);
      } else {
        renderer.setMoveArrow(null);
      }
      renderer.renderFrame();
    };

    // A physical move was recognized — animate it before showing the next arrow.
    if (prevIndex >= 0 && currentIndex > prevIndex && currentIndex - prevIndex <= 2) {
      const completed = moves.slice(prevIndex, currentIndex);
      queueRef.current = queueRef.current.then(async () => {
        if (rendererRef.current !== renderer) return;
        renderer.setMoveArrow(null);
        for (const move of completed) {
          renderer.orientForMove(move);
          await renderer.animateMove(move);
        }
        finish();
      });
      return;
    }

    queueRef.current = queueRef.current.then(() => {
      finish();
    });
  }, [facelet, moves, currentIndex]);

  useEffect(() => {
    const renderer = rendererRef.current;
    const currentMove = moves[currentIndex] ?? null;
    if (!renderer || !currentMove) return;
    queueRef.current = queueRef.current.then(() => {
      if (rendererRef.current !== renderer) return;
      renderer.setMoveArrow(currentMove, Boolean(wrongMove));
      renderer.renderFrame();
    });
  }, [wrongMove, moves, currentIndex]);

  return (
    <div ref={wrapRef} className="solving-cube-guide">
      <canvas ref={canvasRef} className="solving-cube-guide-canvas" />
    </div>
  );
}
