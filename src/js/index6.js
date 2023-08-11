import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// 장면 생성
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe187);

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
// 빛
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(0, 2, 4);
scene.add(pointLight);

const geometry = new THREE.DodecahedronGeometry(1);
const material = new THREE.MeshStandardMaterial({
  color: 0xffaaaa,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
controls.update();

// 1. 위치
mesh.position.x = 2;
mesh.position.y = 1;
mesh.position.set(0, 2, 1);

// 2. 회전
mesh.rotation.y = 360;
mesh.rotation.y = THREE.MathUtils.degToRad(360);

// 3. 크기
mesh.scale.x = 1.2;

// axesHelper
const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}
animate();
