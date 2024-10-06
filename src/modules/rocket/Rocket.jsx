import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Make sure to import THREE

export function Rocket() {
  const rocketRef = useRef();
  const { scene } = useGLTF("/assets/rocket.glb");

  const [rotationY, setRotationY] = useState(0);

  const moveRocket = (event) => {
    switch (event.key) {
      case "ArrowUp":
        // Move forward along the local X-axis
        if (rocketRef.current) {
          const direction = new THREE.Vector3(); // Create a vector for direction
          rocketRef.current.getWorldDirection(direction); // Get the direction the rocket is facing
          rocketRef.current.position.add(direction.multiplyScalar(0.1)); // Move forward
        }
        break;
      case "ArrowLeft":
        setRotationY((prev) => prev + 0.1); // Rotate left
        break;
      case "ArrowRight":
        setRotationY((prev) => prev - 0.1); // Rotate right
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", moveRocket);
    return () => {
      window.removeEventListener("keydown", moveRocket);
    };
  }, []);

  useFrame(() => {
    if (rocketRef.current) {
      rocketRef.current.rotation.y = rotationY; // Apply the Y-axis rotation
    }
  });

  const fixedPosition = [10, 5, 10];

  return (
    <primitive ref={rocketRef} object={scene} position={fixedPosition} rotation={[4.7, 0, 0]} scale={[0.1, 0.1, 0.1]} />
  );
}
