import type { Point2 } from './isometricGuide';

export function pathFromPoints(points: Point2[]): string {
  const [first, ...rest] = points;
  return `M ${first!.x.toFixed(1)} ${first!.y.toFixed(1)} ${rest.map((p) => `L ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ')} Z`;
}

export function arrowHead(tip: Point2, angle: number, size: number): string {
  const ux = Math.cos(angle);
  const uy = Math.sin(angle);
  const px = -uy;
  const py = ux;
  return `M ${tip.x.toFixed(1)} ${tip.y.toFixed(1)} L ${(tip.x - ux * size + px * size * 0.55).toFixed(1)} ${(tip.y - uy * size + py * size * 0.55).toFixed(1)} L ${(tip.x - ux * size - px * size * 0.55).toFixed(1)} ${(tip.y - uy * size - py * size * 0.55).toFixed(1)} Z`;
}
