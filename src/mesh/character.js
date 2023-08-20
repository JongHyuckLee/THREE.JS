import * as THREE from "three";
export default function printCharacter() {
  const character = new THREE.Group();
  const loader = new THREE.TextureLoader();
  const baseColor = loader.load("/src/textures/stone/stone_basecolor.jpg");
  const normal = loader.load("/src/textures/stone/stone_normal.jpg");
  const height = loader.load("/src/textures/stone/stone_height.png");
  const rough = loader.load("/src/textures/stone/stone_roughness.jpg");

  const stoneMaterial = new THREE.MeshStandardMaterial({
    color: 0x565656,
    map: baseColor,
    normalMap: normal,
    roughnessMap: rough,
    roughness: 0.8,
  });

  const headGeometry = new THREE.CylinderGeometry(1, 2, 4, 4);
  const head = new THREE.Mesh(headGeometry, stoneMaterial);
  character.add(head);

  const hatGeometry = new THREE.BoxGeometry(2, 0.2, 2);
  const hat = new THREE.Mesh(hatGeometry, stoneMaterial);
  hat.position.y = 1.5;
  hat.rotation.y = Math.PI / 4;
  character.add(hat);

  const eyeGeometry = new THREE.CapsuleGeometry(0.3, 0.2);
  const eyeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.4,
  });
  const eyeLeft = new THREE.Mesh(eyeGeometry, eyeMaterial);
  eyeLeft.position.set(-0.25, 0.8, 0.75);
  character.add(eyeLeft);

  const eyeRight = new THREE.Mesh(eyeGeometry, eyeMaterial);
  eyeRight.position.set(-0.75, 0.8, 0.25);
  character.add(eyeRight);

  const pupilGeometry = new THREE.SphereGeometry(0.1);
  const pupilMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
  const pupilRight = new THREE.Mesh(pupilGeometry, pupilMaterial);
  pupilRight.position.set(-0.45, 0.8, 0.9);
  character.add(pupilRight);
  const pupilLeft = new THREE.Mesh(pupilGeometry, pupilMaterial);
  pupilLeft.position.set(-0.9, 0.8, 0.45);
  character.add(pupilLeft);

  const noseGeometry = new THREE.CylinderGeometry(0.1, 0.2, 0.5, 6);
  const nose = new THREE.Mesh(noseGeometry, stoneMaterial);

  nose.position.set(-0.7, 0.4, 0.7);
  character.add(nose);

  const amrGeometry = new THREE.CylinderGeometry(0.3, 0.3, 2, 8);
  const armLeft = new THREE.Mesh(amrGeometry, stoneMaterial);
  armLeft.position.set(-1.4, 1, -0.8);
  armLeft.rotation.z = Math.PI / 3;
  character.add(armLeft);
  const armRight = new THREE.Mesh(amrGeometry, stoneMaterial);
  armRight.position.set(0.8, 1, 1.4);
  armRight.rotation.x = Math.PI / 3;
  armRight.rotation.y = Math.PI;
  character.add(armRight);

  for (const mesh of character.children) {
    mesh.castShadow = true;
    mesh.recieveShadow = true;
  }
  return character;
}
