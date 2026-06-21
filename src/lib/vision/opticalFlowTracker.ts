import type { Point2D } from '../../types';

const MAX_LOST_FRAMES = 45;

export class OpticalFlowTracker {
  private prevGray: import('../../types/opencv').OpenCVMat | null = null;
  private trackedCorners: [Point2D, Point2D, Point2D, Point2D] | null = null;
  private lostFrames = 0;

  getLostFrames(): number {
    return this.lostFrames;
  }

  reset(): void {
    this.prevGray?.delete();
    this.prevGray = null;
    this.trackedCorners = null;
    this.lostFrames = 0;
  }

  update(
    gray: import('../../types/opencv').OpenCVMat,
    detectedCorners: [Point2D, Point2D, Point2D, Point2D] | null,
  ): [Point2D, Point2D, Point2D, Point2D] | null {
    const cv = window.cv;

    if (detectedCorners) {
      this.trackedCorners = detectedCorners;
      this.lostFrames = 0;
      this.prevGray?.delete();
      this.prevGray = gray.clone();
      return detectedCorners;
    }

    if (!this.prevGray || !this.trackedCorners) {
      return null;
    }

    const prevPts = cv.matFromArray(4, 1, cv.CV_32FC2, flattenCorners(this.trackedCorners));
    const nextPts = new cv.Mat();
    const status = new cv.Mat();
    const err = new cv.Mat();

    cv.calcOpticalFlowPyrLK(this.prevGray, gray, prevPts, nextPts, status, err);

    const updated: Point2D[] = [];
    let validCount = 0;
    for (let i = 0; i < 4; i++) {
      const ok = status.data[i] === 1;
      const x = nextPts.data32F[i * 2]!;
      const y = nextPts.data32F[i * 2 + 1]!;
      if (ok && Number.isFinite(x) && Number.isFinite(y)) {
        updated.push({ x, y });
        validCount++;
      } else {
        updated.push(this.trackedCorners[i]!);
      }
    }

    prevPts.delete();
    nextPts.delete();
    status.delete();
    err.delete();
    this.prevGray.delete();
    this.prevGray = gray.clone();

    if (validCount < 2) {
      this.lostFrames++;
      if (this.lostFrames > MAX_LOST_FRAMES) {
        this.reset();
        return null;
      }
      return this.trackedCorners;
    }

    this.trackedCorners = updated as [Point2D, Point2D, Point2D, Point2D];
    this.lostFrames++;
    if (this.lostFrames > MAX_LOST_FRAMES) {
      this.reset();
      return null;
    }

    return this.trackedCorners;
  }
}

function flattenCorners(corners: [Point2D, Point2D, Point2D, Point2D]): number[] {
  return corners.flatMap((p) => [p.x, p.y]);
}
