import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Compo } from "./Compo";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const Container = () => {
  return (
    <Canvas style={{ width: "100%", height: "100%" }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <Compo scale={2} position={[0, -1, 0]} rotation={[0, Math.PI / 4, 0]} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      </Suspense>
    </Canvas>
  );
}

export default Container;
