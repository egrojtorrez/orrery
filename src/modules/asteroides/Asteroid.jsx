import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export function Asteroid({ position }) {
  const asteroidRef = useRef();
  
  useFrame(() => {
    // Move the asteroid forward in the Z direction
    asteroidRef.current.position.z += 0.05; 

    // Reset position if it moves out of view
    if (asteroidRef.current.position.z > 50) {
      asteroidRef.current.position.z = -50;
      asteroidRef.current.position.x = Math.random() * 20 - 10; // Random X position
      asteroidRef.current.position.y = Math.random() * 5; // Random Y position
    }
  });

  return (
    <mesh ref={asteroidRef} position={position}>
      <icosahedronGeometry args={[0.3, 0]} /> {/* Simple asteroid shape */}
      <meshStandardMaterial color="#8B4513" /> {/* Brown color for asteroids */}
    </mesh>
  );
}
