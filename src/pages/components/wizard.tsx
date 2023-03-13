import { Canvas } from "@react-three/fiber";
import React from "react";
import Box from "./box";

const Wizard: React.FC = () => {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <mesh>
          <lineBasicMaterial />
          <bufferGeometry />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Wizard;
