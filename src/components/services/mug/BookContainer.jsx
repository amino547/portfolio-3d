import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Book } from "./Book";
import { OrbitControls, Stage } from "@react-three/drei";

const BookContainer = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{ width: "100%", height: "100%", minHeight: "500px" }}>
      <Canvas
        camera={{ 
          position: [0, 0, isMobile ? 5 : 4], 
          fov: isMobile ? 60 : 50 
        }}
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
            <Book 
              scale={isMobile ? 0.8 : 1}
              position={[0, isMobile ? 0 : -0.5, 0]}
              rotation={[0, Math.PI / 3, 0]} 
            />
          </Stage>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={2}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default BookContainer;