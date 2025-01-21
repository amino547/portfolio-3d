import React from 'react'
import { useGLTF } from '@react-three/drei'

export function CafeModel(props) {
  const { nodes, materials } = useGLTF('/cafe.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01} rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <mesh 
          geometry={nodes.beans_1_Mat_0.geometry} 
          material={materials.material} 
          position={[-0.551, 181.823, -0.799]}
          castShadow
          receiveShadow
        />
      </group>
    </group>
  )
}

useGLTF.preload('/cafe.glb')
