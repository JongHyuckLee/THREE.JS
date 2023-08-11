import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// 장면 생성
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe187);

const makeFruit = (scene) => {
  // 한라봉
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0xff7f00,
  });
  const bottomGeometry = new THREE.DodecahedronGeometry(2, 1);
  const bottom = new THREE.Mesh(bottomGeometry, bodyMaterial);
  scene.add(bottom);

  const topGeometry = new THREE.TetrahedronGeometry(0.8, 3);
  const top = new THREE.Mesh(topGeometry, bodyMaterial);
  scene.add(top);
  top.position.y = 1.8;

  const leafMaterial = new THREE.MeshStandardMaterial({
    color: 0x008000,
    side: THREE.DoubleSide,
  });
  const stemGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.3);
  const stem = new THREE.Mesh(stemGeometry, leafMaterial);
  scene.add(stem);
  stem.position.y = 2.6;

  const leafGeometry = new THREE.SphereGeometry(
    0.5,
    32,
    16,
    Math.PI / 3,
    Math.PI / 3,
  );
  const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
  leaf.position.y = 3.1;
  leaf.position.x = 0.1;
  leaf.position.z = 0;

  scene.add(leaf);
};
const makeTree = (scene) => {
  // 나무
  const treeGroup = new THREE.Group();
  const trunkGroup = new THREE.Group();
  const trunkMaterial = new THREE.MeshStandardMaterial({
    color: 0xa38049,
  });
  const trunkGeometry = new THREE.CylinderGeometry(0.8, 1, 1.5);
  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunkGroup.add(trunk);
  const trunk1 = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk1.position.set(0.1, 1.3, 0);
  trunk1.rotation.z = THREE.MathUtils.degToRad(-5);
  trunk1.scale.set(0.9, 0.9, 0.9);
  trunkGroup.add(trunk1);
  const trunk2 = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk2.position.set(0.2, 2.5, 0);
  trunk2.scale.set(0.8, 0.8, 0.8);
  trunkGroup.add(trunk2);
  const trunk3 = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk3.position.set(0.4, 3.5, 0);
  trunk3.scale.set(0.7, 0.7, 0.7);
  trunkGroup.add(trunk3);
  // trunkGroup.position.x = 2;
  treeGroup.add(trunkGroup);

  const leafGroup = new THREE.Group();
  const leafMaterial = new THREE.MeshStandardMaterial({
    color: 0x84ad88,
    side: THREE.DoubleSide,
  });
  const leafGeometry = new THREE.SphereGeometry(
    2,
    32,
    16,
    Math.PI / 3,
    Math.PI / 3,
  );
  const leaf1 = new THREE.Mesh(leafGeometry, leafMaterial);
  leaf1.rotation.x = -Math.PI / 2;
  leaf1.position.set(0.4, 3.2, 2);
  leafGroup.add(leaf1);

  const leaf2 = new THREE.Mesh(leafGeometry, leafMaterial);
  leaf2.rotation.x = -Math.PI / 2;
  leaf2.rotation.z = -Math.PI / 2;
  leaf2.position.set(2.4, 3.2, 0);
  leafGroup.add(leaf2);

  const leaf3 = new THREE.Mesh(leafGeometry, leafMaterial);
  leaf3.rotation.x = -Math.PI / 2;
  leaf3.rotation.z = Math.PI;
  leaf3.position.set(0.4, 3.2, -2);
  leafGroup.add(leaf3);

  const leaf4 = new THREE.Mesh(leafGeometry, leafMaterial);
  leaf4.rotation.x = -Math.PI / 2;
  leaf4.rotation.z = Math.PI / 2;
  leaf4.position.set(-2, 3.2, 0);
  leafGroup.add(leaf4);
  // leafGroup.position.x = 2;
  // leafGroup.rotation.z = THREE.MathUtils.degToRad(-10);
  treeGroup.add(leafGroup);
  treeGroup.position.x = 3;
  scene.add(treeGroup);
};
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(10, 10, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

// 빛
const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(2, 4, 3);
scene.add(light);
// makeFruit(scene);
makeTree(scene);
const axes = new THREE.AxesHelper(10);
scene.add(axes);
renderer.render(scene, camera);
controls.update();
function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}
animate();
