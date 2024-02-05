import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei/native";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0: THREE.Mesh;
    Mesh_2: THREE.Mesh;
    Mesh_3: THREE.Mesh;
    Mesh_36: THREE.Mesh;
    Mesh_4: THREE.Mesh;
    Mesh_5: THREE.Mesh;
    Mesh_63: THREE.Mesh;
    Mesh_64: THREE.Mesh;
    Mesh_65: THREE.Mesh;
  };
  materials: {
    lambert1: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(require('../assets/Model.glb')) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={10} position={[0,-2,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_2.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_3.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_36.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_4.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_5.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_63.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_64.geometry}
        material={materials.lambert1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_65.geometry}
        material={materials.lambert1}
      />
    </group>
  );
}

useGLTF.preload(require('../assets/Model.glb'));