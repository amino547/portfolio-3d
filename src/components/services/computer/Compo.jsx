import { useGLTF } from "@react-three/drei";

export function Compo(props) {
  const { scene } = useGLTF("/compo.glb");
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/compo.glb");