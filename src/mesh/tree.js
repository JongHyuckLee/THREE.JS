import * as THREE from "three";

export default function printTree() {
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
  return treeGroup;
}
