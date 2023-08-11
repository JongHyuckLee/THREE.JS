import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import printTree from "../mesh/tree.js";
import printTangerine from "../mesh/tangerine.js";

// 장면 생성
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe187);

const makeTree = (scene) => {};
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
const tree = printTree();
const tangerine = printTangerine();
scene.add(tree);
scene.add(tangerine);
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
