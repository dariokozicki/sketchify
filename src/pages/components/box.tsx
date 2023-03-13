import { useFrame, Vector3 } from "@react-three/fiber";
import { useRef, useState } from "react";
import { BufferGeometry, Material, Mesh } from "three";

type BoxProps = {
  position: Vector3;
};

const Box: React.FC<BoxProps> = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef<Mesh>(null!);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (!!mesh.current) mesh.current.rotation.x += delta;
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box;
