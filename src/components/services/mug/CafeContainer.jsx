import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { CafeModel } from "./Cafe";
import { OrbitControls, Stage } from "@react-three/drei";

const CafeContainer = () => {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "500px" }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Stage
            environment="sunset"
            intensity={1}
            contactShadow
            shadows
          >
            <CafeModel />
          </Stage>
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            autoRotate={false}
            maxDistance={10}
            minDistance={2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CafeContainer;