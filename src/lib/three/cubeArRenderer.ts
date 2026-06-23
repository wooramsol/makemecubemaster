import * as THREE from 'three';
import type { CubePose, FaceId, Move } from '../../types';
import { CUBE_EDGES, CUBE_VERTICES } from '../vision/faceModels';
import { FACE_NORMALS, isDoubleMove, isPrimeMove, moveAngle, moveFace } from '../cube/moves';
import { configureCameraFromIntrinsics, poseToThreeMatrix } from './poseBridge';

const EDGE_COLOR = 0xffffff;
const FACE_TINT = 0x88ccff;
const MOVE_FACE_TINT = 0xffee55;
const ARROW_COLOR = 0xffffff;

const FACE_PLANE_TRANSFORMS: Record<
  FaceId,
  { position: [number, number, number]; rotation: [number, number, number] }
> = {
  F: { position: [0, 0, 0.501], rotation: [0, 0, 0] },
  B: { position: [0, 0, -0.501], rotation: [0, Math.PI, 0] },
  R: { position: [0.501, 0, 0], rotation: [0, Math.PI / 2, 0] },
  L: { position: [-0.501, 0, 0], rotation: [0, -Math.PI / 2, 0] },
  U: { position: [0, 0.501, 0], rotation: [-Math.PI / 2, 0, 0] },
  D: { position: [0, -0.501, 0], rotation: [Math.PI / 2, 0, 0] },
};

export class CubeARRenderer {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private cubeRoot: THREE.Group;
  private faceMeshes = new Map<FaceId, THREE.Mesh>();
  private arrowRoot: THREE.Group;
  private traceGroup: THREE.Group | null = null;
  private currentMove: Move | null = null;
  private traceProgress = 0;
  private frameWidth = 1;
  private frameHeight = 1;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
    this.camera.position.set(0, 0, 0);

    const ambient = new THREE.AmbientLight(0xffffff, 1.0);
    this.scene.add(ambient);

    this.cubeRoot = new THREE.Group();
    this.buildCubeWireframe();
    this.buildFacePlanes();
    this.scene.add(this.cubeRoot);

    this.arrowRoot = new THREE.Group();
    this.cubeRoot.add(this.arrowRoot);
  }

  resize(frameWidth: number, frameHeight: number): void {
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.renderer.setSize(frameWidth, frameHeight, false);
  }

  setMove(move: Move | null): void {
    if (move === this.currentMove) return;
    this.currentMove = move;
    this.traceProgress = 0;
    this.highlightMoveFace(move ? moveFace(move) : null);
    this.rebuildArrow(move);
  }

  setRotationProgress(progress: number): void {
    const clamped = Math.max(0, Math.min(1, progress));
    if (Math.abs(clamped - this.traceProgress) < 0.01) return;
    this.traceProgress = clamped;
    this.updateTrace();
  }

  render(pose: CubePose | null): void {
    if (!pose) {
      this.renderer.render(this.scene, this.camera);
      return;
    }

    configureCameraFromIntrinsics(this.camera, pose, this.frameWidth, this.frameHeight);

    const matrix = poseToThreeMatrix(pose);
    this.cubeRoot.matrixAutoUpdate = false;
    this.cubeRoot.matrix.copy(matrix);
    this.cubeRoot.matrixWorldNeedsUpdate = true;

    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.renderer.dispose();
    this.cubeRoot.traverse(disposeObject);
  }

  private buildCubeWireframe(): void {
    const verts = CUBE_VERTICES.map((v) => new THREE.Vector3(v[0], v[1], v[2]));
    const positions: number[] = [];
    for (const [a, b] of CUBE_EDGES) {
      positions.push(verts[a]!.x, verts[a]!.y, verts[a]!.z);
      positions.push(verts[b]!.x, verts[b]!.y, verts[b]!.z);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const material = new THREE.LineBasicMaterial({
      color: EDGE_COLOR,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(geometry, material);
    this.cubeRoot.add(lines);
  }

  private buildFacePlanes(): void {
    const geometry = new THREE.PlaneGeometry(0.98, 0.98);
    for (const faceId of Object.keys(FACE_PLANE_TRANSFORMS) as FaceId[]) {
      const spec = FACE_PLANE_TRANSFORMS[faceId]!;
      const material = new THREE.MeshBasicMaterial({
        color: FACE_TINT,
        transparent: true,
        opacity: 0.12,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geometry.clone(), material);
      mesh.position.set(...spec.position);
      mesh.rotation.set(...spec.rotation);
      mesh.userData.faceId = faceId;
      this.faceMeshes.set(faceId, mesh);
      this.cubeRoot.add(mesh);
    }
  }

  private highlightMoveFace(face: FaceId | null): void {
    for (const [faceId, mesh] of this.faceMeshes) {
      const mat = mesh.material as THREE.MeshBasicMaterial;
      if (faceId === face) {
        mat.color.setHex(MOVE_FACE_TINT);
        mat.opacity = 0.38;
      } else {
        mat.color.setHex(FACE_TINT);
        mat.opacity = 0.1;
      }
    }
  }

  private rebuildArrow(move: Move | null): void {
    this.clearArrow();
    if (!move) return;

    const face = moveFace(move);
    const normal = new THREE.Vector3(...FACE_NORMALS[face]);
    const up = new THREE.Vector3(0, 1, 0);
    if (Math.abs(normal.dot(up)) > 0.9) up.set(0, 0, 1);

    const tangent = new THREE.Vector3().crossVectors(up, normal).normalize();
    const bitangent = new THREE.Vector3().crossVectors(normal, tangent).normalize();

    const group = new THREE.Group();
    group.position.copy(normal.clone().multiplyScalar(0.52));
    group.userData = { tangent, bitangent, move, segments: 32 };

    const angle = moveAngle(move);
    const arcRadius = 0.34;
    const segments = 32;
    const start = isPrimeMove(move) ? angle : 0;
    const end = isPrimeMove(move) ? 0 : angle;
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= segments; i++) {
      const t = start + ((end - start) * i) / segments;
      points.push(
        tangent
          .clone()
          .multiplyScalar(Math.cos(t) * arcRadius)
          .add(bitangent.clone().multiplyScalar(Math.sin(t) * arcRadius)),
      );
    }
    group.userData.points = points;

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.36, 0.43, 48),
      new THREE.MeshBasicMaterial({
        color: ARROW_COLOR,
        transparent: true,
        opacity: 0.55,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    group.add(ring);

    if (isDoubleMove(move)) {
      const mirror = ring.clone();
      mirror.rotation.z = Math.PI;
      group.add(mirror);
    }

    this.traceGroup = group;
    this.arrowRoot.add(group);
    this.updateTrace();
  }

  private updateTrace(): void {
    if (!this.traceGroup || !this.currentMove) return;

    for (const child of [...this.traceGroup.children]) {
      if (child.name === 'trace') {
        this.traceGroup.remove(child);
        disposeObject(child);
      }
    }

    const points = this.traceGroup.userData.points as THREE.Vector3[];
    const segments = this.traceGroup.userData.segments as number;
    if (!points?.length) return;

    const endIdx = Math.max(2, Math.floor(segments * this.traceProgress));
    const partial = points.slice(0, endIdx + 1);
    if (partial.length < 2) return;

    const curve = new THREE.CatmullRomCurve3(partial);
    const tube = new THREE.TubeGeometry(curve, endIdx, 0.035, 10, false);
    const material = new THREE.MeshBasicMaterial({
      color: ARROW_COLOR,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(tube, material);
    mesh.name = 'trace';
    this.traceGroup.add(mesh);

    const headPoint = partial[partial.length - 1]!;
    const prevPoint = partial[partial.length - 2] ?? headPoint;
    const dir = new THREE.Vector3().subVectors(headPoint, prevPoint).normalize();
    const head = new THREE.Mesh(
      new THREE.ConeGeometry(0.08, 0.18, 12),
      material.clone(),
    );
    head.name = 'trace';
    head.position.copy(headPoint);
    head.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    this.traceGroup.add(head);
  }

  private clearArrow(): void {
    this.traceGroup = null;
    while (this.arrowRoot.children.length > 0) {
      const child = this.arrowRoot.children[0]!;
      this.arrowRoot.remove(child);
      disposeObject(child);
    }
  }
}

function disposeObject(obj: THREE.Object3D): void {
  obj.traverse((node) => {
    if (node instanceof THREE.Mesh || node instanceof THREE.LineSegments) {
      node.geometry.dispose();
      if (Array.isArray(node.material)) {
        node.material.forEach((m) => m.dispose());
      } else {
        node.material.dispose();
      }
    }
  });
}
