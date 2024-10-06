import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Sun() {
  const { scene } = useGLTF("/assets/sol.glb");
  const sunRef = useRef();

  // Rotate the sun along its own axis
  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <primitive ref={sunRef} object={scene} scale={[0.05, 0.05, 0.05]} />
  );
}
