import React from 'react'
import { useGLTF } from '@react-three/drei'

export function AndroidPhone(props) {
  const { nodes, materials } = useGLTF('/android-phone.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, 0]} position={[0, 0, 0]} scale={0.30}>
        <mesh geometry={nodes.Body.geometry} material={materials.PhoneBody} />
        <mesh geometry={nodes.Screen.geometry} material={materials.Screen} />
        <mesh geometry={nodes.Camera.geometry} material={materials.Camera} />
        <mesh geometry={nodes.Details.geometry} material={materials.Details} />
      </group>
    </group>
  )
}

useGLTF.preload('/android-phone.glb')
