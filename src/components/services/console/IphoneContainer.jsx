import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { IphoneModel } from "./Iphone";
import { OrbitControls, Stage } from "@react-three/drei";

const IphoneContainer = () => {
  return (
    <div style={{ width: "100%", height: "100%", minHeight: "500px" }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Stage
            environment="city"
            intensity={1}
            contactShadow
            shadows
          >
            <IphoneModel />
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

export default IphoneContainer;