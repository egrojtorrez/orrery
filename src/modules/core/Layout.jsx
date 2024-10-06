
import React, { useState } from "react"; // Add useState import
import { Canvas } from "@react-three/fiber";
import { Sun } from "@modules/sol/Sol";
import { Planet } from "@modules/planeta/Planet";
import { Lights } from "@modules/luces/Lights";
import planetData from "@modules/planeta/planetData";
import { OrbitControls } from "@react-three/drei";
import { Asteroid } from '../asteroides/Asteroid'; // Import Asteroid component
import { Rocket } from "../rocket/Rocket"; // Import Rocket component
import {Button} from "@nextui-org/button";
import { PlannetCard } from "@modules/planeta/components/PlanetCard";
import { useStoreCard } from "@modules/planeta/hooks/planetCardStore";

const NUM_ASTEROIDS = 10; // Number of asteroids

export function LayoutSolarSystem() {
  const [isRocketMode, setIsRocketMode] = useState(false);
  const [addAsteroids, setAddAsteroids] = useState(false);
  const toggleRocketMode = () => {
    setIsRocketMode((prevMode) => !prevMode); // Toggle the mode
  };

  const toggleAsteroids = () => {
    setAddAsteroids((prevMode) => !prevMode); // Toggle the mode
  };

  return (
    <>
      <PlannetCard/>
      <Button onClick={toggleRocketMode} color="primary" className="absolute bottom-4 right-4 rounded z-10">
        {isRocketMode ? "Switch to Normal Mode" : "Activate Rocket Mode"}
      </Button>
      {/* <Button onPress={onOpen} className="absolute bottom-4 right-1/2 rounded z-10">Open Modal</Button> */}
      <Button onClick={toggleAsteroids} color="primary" className="absolute bottom-4 left-4 rounded z-10">
        {addAsteroids ? "Turn off asteroids" : "Activate asteroids"}
      </Button>

      <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: isRocketMode ? [0, 0, 5] : [0, 20, 25], fov: 45 }}>
      
        <Sun />
        {planetData.map((planet) => (
          <Planet planet={planet} key={planet.id} />
        ))}
        <Lights />
        <OrbitControls />
        {isRocketMode && <Rocket/>}
        {addAsteroids && (Array.from({ length: NUM_ASTEROIDS }).map((_, index) => (
        <Asteroid
          key={index}
          position={[
            Math.random() * 20 - 10, // Random X position
            Math.random() * 5, // Random Y position
            Math.random() * -50 // Random Z position
          ]}
        />
      )))}
      </Canvas>
      </div>
    </>
  );
}