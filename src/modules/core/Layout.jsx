
import React, { useState } from "react"; // Add useState import
import { Canvas } from "@react-three/fiber";
import { Sun } from "../sol/Sol";
import { Planet } from "../planeta/Planet";
import { Lights } from "../luces/Lights";
import { OrbitControls } from "@react-three/drei";
import planetData from "../planeta/planetData";
import { Asteroid } from '../asteroides/Asteroid'; // Import Asteroid component
import { Rocket } from "../rocket/Rocket"; // Import Rocket component
import './styles.css'

const NUM_ASTEROIDS = 10; // Number of asteroids

export function LayoutSolarSystem() {
  const [isRocketMode, setIsRocketMode] = useState(false);

  const toggleRocketMode = () => {
    setIsRocketMode((prevMode) => !prevMode); // Toggle the mode
  };

  return (
    <>

      <button onClick={toggleRocketMode}>
        {isRocketMode ? "Switch to Normal Mode" : "Activate Rocket Mode"}
      </button>

      <Canvas camera={{ position: isRocketMode ? [0, 0, 5] : [0, 20, 25], fov: 45 }}>
        <Sun />
        {planetData.map((planet) => (
          <Planet planet={planet} key={planet.id} />
        ))}
        <Lights />
        <OrbitControls />
        {isRocketMode && <Rocket/>}
        {Array.from({ length: NUM_ASTEROIDS }).map((_, index) => (
        <Asteroid
          key={index}
          position={[
            Math.random() * 20 - 10, // Random X position
            Math.random() * 5, // Random Y position
            Math.random() * -50 // Random Z position
          ]}
        />
      ))}
      </Canvas>
    </>
  );
}