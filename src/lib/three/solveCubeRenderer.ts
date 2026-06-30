import * as THREE from 'three';
import Cube from 'cubejs';
import type { FaceId, Move } from '../../types';
import { moveAngle, moveFace, MOVE_AXES } from '../cube/moves';
import {
  CUBIE_BODY_HEX,
  cubiesFromFacelet,
  STICKER_HEX,
  type CubieStickers,
} from '../cube/faceletColors';
import type { StickerColor } from '../../types';

const CUBIE_SIZE = 0.94;
const CUBIE_GAP = 1.02;
const ANIM_MS = 320;

interface CubieMesh {
  group: THREE.Group;
  coords: { x: number; y: number; z: number };
}

function stickerMaterial(color: StickerColor | null): THREE.Material {
  if (!color) {
    return new THREE.MeshStandardMaterial({
      color: CUBIE_BODY_HEX,
      metalness: 0.05,
      roughness: 0.85,
    });
  }
  return new THREE.MeshStandardMaterial({
    color: STICKER_HEX[color],
    metalness: 0.08,
    roughness: 0.55,
  });
}

function buildCubieMesh(data: CubieStickers): CubieMesh {
  const group = new THREE.Group();
  const geometry = new THREE.BoxGeometry(CUBIE_SIZE, CUBIE_SIZE, CUBIE_SIZE);
  const materials = data.faces.map((face) => stickerMaterial(face)) as THREE.Material[];
  const mesh = new THREE.Mesh(geometry, materials);
  group.add(mesh);

  group.position.set(
    data.coords.x * CUBIE_GAP,
    data.coords.y * CUBIE_GAP,
    data.coords.z * CUBIE_GAP,
  );

  return { group, coords: { ...data.coords } };
}

function layerFilter(face: FaceId, coords: { x: number; y: number; z: number }): boolean {
  switch (face) {
    case 'R':
      return coords.x === 1;
    case 'L':
      return coords.x === -1;
    case 'U':
      return coords.y === 1;
    case 'D':
      return coords.y === -1;
    case 'F':
      return coords.z === 1;
    case 'B':
      return coords.z === -1;
    default:
      return false;
  }
}

function rotateCoords(
  coords: { x: number; y: number; z: number },
  face: FaceId,
  angle: number,
): { x: number; y: number; z: number } {
  const v = new THREE.Vector3(coords.x, coords.y, coords.z);
  const axis = MOVE_AXES[face];
  v.applyAxisAngle(new THREE.Vector3(...axis), angle);
  return {
    x: Math.round(v.x),
    y: Math.round(v.y),
    z: Math.round(v.z),
  };
}

export class SolveCubeRenderer {
  private readonly scene = new THREE.Scene();
  private readonly camera: THREE.PerspectiveCamera;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly cubeRoot = new THREE.Group();
  private cubies: CubieMesh[] = [];
  private animating = false;
  private idleAngle = 0;
  private facelet = '';
  private rafId = 0;
  private disposed = false;

  constructor(canvas: HTMLCanvasElement) {
    this.scene.background = null;
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.72));
    const key = new THREE.DirectionalLight(0xffffff, 1.05);
    key.position.set(3, 5, 4);
    this.scene.add(key);
    const fill = new THREE.DirectionalLight(0x88aaff, 0.35);
    fill.position.set(-4, 1, -3);
    this.scene.add(fill);

    this.cubeRoot.rotation.x = -0.42;
    this.cubeRoot.rotation.y = 0.62;
    this.scene.add(this.cubeRoot);

    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    this.camera.position.set(4.2, 3.6, 4.8);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
  }

  resize(width: number, height: number): void {
    if (width <= 0 || height <= 0) return;
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  setFacelet(facelet: string): void {
    this.facelet = facelet;
    this.rebuildCubies();
  }

  getFacelet(): string {
    return this.facelet;
  }

  isAnimating(): boolean {
    return this.animating;
  }

  private rebuildCubies(): void {
    for (const cubie of this.cubies) {
      this.cubeRoot.remove(cubie.group);
      cubie.group.traverse((obj) => {
        const mesh = obj as THREE.Mesh;
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          for (const m of mats) m.dispose();
        }
      });
    }

    this.cubies = cubiesFromFacelet(this.facelet).map(buildCubieMesh);
    for (const cubie of this.cubies) {
      this.cubeRoot.add(cubie.group);
    }
  }

  animateMove(move: Move): Promise<void> {
    if (this.animating) return Promise.resolve();
    const face = moveFace(move);
    const angle = moveAngle(move);
    const layer = this.cubies.filter((c) => layerFilter(face, c.coords));
    if (layer.length === 0) return Promise.resolve();

    this.animating = true;
    const pivot = new THREE.Group();
    this.cubeRoot.add(pivot);

    for (const cubie of layer) {
      pivot.add(cubie.group);
      cubie.group.position.sub(pivot.position);
    }

    const axis = new THREE.Vector3(...MOVE_AXES[face]);
    const start = performance.now();

    return new Promise((resolve) => {
      const tick = (now: number) => {
        if (this.disposed) {
          resolve();
          return;
        }
        const t = Math.min(1, (now - start) / ANIM_MS);
        const eased = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
        pivot.setRotationFromAxisAngle(axis, angle * eased);
        this.renderFrame();

        if (t < 1) {
          requestAnimationFrame(tick);
        } else {
          pivot.setRotationFromAxisAngle(axis, angle);
          for (const cubie of layer) {
            this.cubeRoot.add(cubie.group);
            cubie.coords = rotateCoords(cubie.coords, face, angle);
            cubie.group.position.set(
              cubie.coords.x * CUBIE_GAP,
              cubie.coords.y * CUBIE_GAP,
              cubie.coords.z * CUBIE_GAP,
            );
            cubie.group.rotation.set(0, 0, 0);
          }
          this.cubeRoot.remove(pivot);
          this.applyMoveToFacelet(move);
          this.rebuildCubies();
          this.animating = false;
          resolve();
        }
      };
      requestAnimationFrame(tick);
    });
  }

  private applyMoveToFacelet(move: Move): void {
    try {
      const cube = Cube.fromString(this.facelet);
      cube.move(move);
      this.facelet = cube.asString();
    } catch {
      // Keep visual state from geometry if facelet invalid.
    }
  }

  startIdleSpin(): void {
    const spin = () => {
      if (this.disposed) return;
      if (!this.animating) {
        this.idleAngle += 0.004;
        this.cubeRoot.rotation.y = 0.62 + this.idleAngle;
      }
      this.renderFrame();
      this.rafId = requestAnimationFrame(spin);
    };
    cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(spin);
  }

  stopIdleSpin(): void {
    cancelAnimationFrame(this.rafId);
    this.rafId = 0;
  }

  renderFrame(): void {
    this.renderer.render(this.scene, this.camera);
  }

  dispose(): void {
    this.disposed = true;
    this.stopIdleSpin();
    this.rebuildCubies();
    this.renderer.dispose();
  }
}
