import * as THREE from "three";

export default function printTangerine() {
  const group = new THREE.Group();
  // 한라봉
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0xff7f00,
  });
  const bottomGeometry = new THREE.DodecahedronGeometry(2, 1);
  const bottom = new THREE.Mesh(bottomGeometry, bodyMaterial);
  group.add(bottom);

  const topGeometry = new THREE.TetrahedronGeometry(0.8, 3);
  const top = new THREE.Mesh(topGeometry, bodyMaterial);
  top.position.y = 1.8;
  group.add(top);

  const leafMaterial = new THREE.MeshStandardMaterial({
    color: 0x008000,
    side: THREE.DoubleSide,
  });
  const stemGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.3);
  const stem = new THREE.Mesh(stemGeometry, leafMaterial);
  stem.position.y = 2.6;
  group.add(stem);

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
  group.add(leaf);
  return group;
}
