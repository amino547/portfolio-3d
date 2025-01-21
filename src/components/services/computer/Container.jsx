import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Compo } from "./Compo";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const Container = () => {
  // Check if device is mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <Canvas
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, isMobile ? 7 : 5], fov: isMobile ? 60 : 75 }}
    >
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <Compo 
            scale={isMobile ? 1.5 : 2} 
            position={[0, isMobile ? 0 : -1, 0]} 
            rotation={[0, Math.PI / 4, 0]} 
          />
        </Stage>
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Suspense>
    </Canvas>
  );
}

export default Container;
