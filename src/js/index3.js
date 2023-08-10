import * as THREE from "three";

// 1. Scene : 화면에서 보여주려는 객체를 담는 공간
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe287);
// scenene.add(요소)

// 2. Camera: Scene을 바라볼 시점을 결정
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);

// 3. Renderer : Scene+Camera , 화면을 그려주는 역할
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(2, 4, 3);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x2e6ff2,
});
const box = new THREE.Mesh(geometry, material);
scene.add(box);
scene.add(light);
renderer.render(scene, camera);

function animate() {
  console.log(box.rotation.y);
  box.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  //  1. 카메라 종횡비
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix(); // 카메라 업데이트

  // 2. 렌더러의 크기
  renderer.setSize(window.innerWidth, window.innerHeight);
});
