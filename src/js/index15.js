import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import printTangerine from "/src/mesh/texturedTangerine.js";
import printTree from "/src/mesh/texturedTree.js";
import printMountain from "/src/mesh/mountail.js";

// 장면 생성
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe187);

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(20, 20, 20);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

// 빛 - DirectionalLight, PointLight, SpotLight
const dl = new THREE.DirectionalLight(0xffffff, 2);
dl.position.set(2, 4, 3);
dl.castShadow = true;
dl.lookAt(0, 0, 0);
dl.target.position.set(0, 0, 0);
// 해상도
dl.shadow.mapSize.width = 1024;
dl.shadow.mapSize.height = 1024;

//  blur
dl.shadow.radius = 5;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

renderer.shadowMap.enabled = true;
scene.add(dl);

const fruit = printTangerine();
fruit.scale.set(0.3, 0.3, 0.3);
fruit.position.z = 3;
scene.add(fruit);

const tree = printTree();
tree.position.z = 9;
scene.add(tree);

const mountain = printMountain();
scene.add(mountain);
renderer.render(scene, camera);
controls.update();
function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}
animate();
