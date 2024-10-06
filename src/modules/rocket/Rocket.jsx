// src/modules/rocket/Rocket.js
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function Rocket() {
  const rocketRef = useRef();
  const { scene } = useGLTF("/assets/rocket.glb");

  const moveRocket = (event) => {
    switch (event.key) { 
      case "ArrowUp":
        rocketRef.current.position.z -= 0.1; // Move forward
        break;
      case "ArrowLeft":
        rocketRef.current.position.x -= 0.1; // Move left
        break;
      case "ArrowRight":
        rocketRef.current.position.x += 0.1; // Move right
        break;
      case "ArrowDown":
        rocketRef.current.position.z += 0.1; // Move right
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

const fixedPosition = [10, 5, 10];

return (
   <primitive ref={rocketRef} object={scene} position={fixedPosition} rotation={[Math.PI / 2, 4.7, Math.PI]} scale={[0.1, 0.1, 0.1]} />
);

}