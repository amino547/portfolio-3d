import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Book(props) {
  const { scene } = useGLTF('/book.glb')
  return <primitive object={scene} {...props} />
}

useGLTF.preload('/book.glb')
