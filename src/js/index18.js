import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import printIsland from "/src/mesh/island.js";
import printTangerine from "/src/mesh/texturedTangerine.js";
import printTree from "/src/mesh/texturedTree.js";
import printMountain from "/src/mesh/mountail.js";
import printCharacter from "/src/mesh/character.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const scene = new THREE.Scene();

scene.background = new THREE.Color(0x7ccad5);
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(0, 20, 20);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshStandardMaterial({
//   color: 0xffe272,
// });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(-10, 10, 10);
directionalLight.castShadow = true;
scene.add(directionalLight);

const pl1 = new THREE.PointLight(0xff8c00, 1.5);
pl1.position.set(5, 0, 0);
scene.add(pl1);

const pl2 = new THREE.PointLight(0xffe287, 2);
pl2.position.set(-3, 2, 0);
scene.add(pl2);

const control = new OrbitControls(camera, renderer.domElement);
const modelLoader = new GLTFLoader();
modelLoader.load("/src/models/Lycat-3d.glb", (gltf) => {
  const model = gltf.scene;
  model.position.set(-3, -1.3, 1);
  model.rotation.y = Math.PI / 8;
  for (const mesh of model.children) {
    mesh.castShadow = true;
    mesh.recieveShadow = true;
  }
  scene.add(model);
});
const island = printIsland();
island.position.y = -1.5;
scene.add(island);

const tangerine = printTangerine();
tangerine.position.set(-5, 0, -1);
scene.add(tangerine);
const miniTan = printTangerine();
miniTan.scale.set(0.7, 0.7, 0.7);
miniTan.position.set(-6, 0, 1.5);
scene.add(miniTan);

const tree = printTree();
tree.position.set(5, -0.5, -1);
tree.rotation.y = Math.PI / -3;
scene.add(tree);
const miniTree = printTree();
miniTree.position.set(6, -1, 2);
miniTree.scale.set(0.6, 0.6, 0.6);
scene.add(miniTree);

const mountain = printMountain();
mountain.scale.set(1.2, 1.6, 1);
mountain.position.set(0, 1, -2);
mountain.castShadow = true;
mountain.recieveShadow = true;
scene.add(mountain);

const myChar = printCharacter();
myChar.position.set(3, -0.5, 1);
myChar.scale.set(0.9, 0.9, 0.9);
myChar.rotation.y = Math.PI / -8;
scene.add(myChar);
control.autoRotate = true;
control.autoRotateSpeed = -1;
control.minDistance = 10;
control.maxDistance = 20;
function animate() {
  control.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
