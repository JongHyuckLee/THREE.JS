import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
console.log(OrbitControls);
// 장면 생성
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe187);

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(3, 3, 3);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

// 빛 - DirectionalLight, PointLight, SpotLight
const dl = new THREE.DirectionalLight(0xffffff, 1);
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
const geometry2 = new THREE.PlaneGeometry(10, 10);
const material2 = new THREE.MeshStandardMaterial({
  color: 0x81a8f7,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(geometry2, material2);
plane.rotation.x = Math.PI / 2;
plane.position.y = -1;
plane.receiveShadow = true;
scene.add(plane);

const materials = [
  new THREE.MeshStandardMaterial({ color: 0xff0000 }),
  new THREE.MeshStandardMaterial({ color: 0xff8c00 }),
  new THREE.MeshStandardMaterial({ color: 0xffee00 }),
  new THREE.MeshStandardMaterial({ color: 0x4de94c }),
  new THREE.MeshStandardMaterial({ color: 0x3783ff }),
  new THREE.MeshStandardMaterial({ color: 0x4815aa }),
];


// 박스
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0xffaaaa });
const cube = new THREE.Mesh(geometry, materials);
cube.castShadow = true;
scene.add(cube);

renderer.render(scene, camera);
controls.update();
function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}
animate();
