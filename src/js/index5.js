import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// 장면 생성
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe187);

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(2, 4, 3);
scene.add(light);

const geometry = new THREE.BoxGeometry(1, 1, 1);
// const basic = new THREE.MeshBasicMaterial({
//   color: 0x2e6ff2,
//   // wireframe: true
//   transparent: true,
//   opacity: 0.5,
// });

// const standard = new THREE.MeshStandardMaterial({
//   color: 0x2e6ff2,
//   roughness: 0.2,
//   metalness: 0.8,
//   // map
//   side: THREE.DoubleSide,
// });

const physical = new THREE.MeshPhysicalMaterial({
  color: 0xffaaaa,
  metalness: 0.8,
  clearcoat: 1,
  clearcoatRoughness: 0.2,
});
const phong = new THREE.MeshPhongMaterial({
  color: 0xffaaaa,
  shininess: 30,
  specular: 0x2e6ff2,
});

// const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), standard);
// scene.add(plane);

const mesh = new THREE.Mesh(geometry, phong);
scene.add(mesh);

renderer.render(scene, camera);
controls.update();

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}
animate();
