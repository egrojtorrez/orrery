import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sun } from "@modules/sol/Sol";
import { Planet } from "@modules/planeta/Planet";
import { SmallObjects } from "@modules/smallObjects/SmallObjects";
import { Lights } from "@modules/luces/Lights";
import planetData from "@modules/planeta/planetData";
import smallObjectsData from "@modules/smallObjects/hooks/smallObjectsData";
import { OrbitControls } from "@react-three/drei";
import { Asteroid } from '../asteroides/Asteroid';
import { Rocket } from "../rocket/Rocket";
import { Button } from "@nextui-org/button";
import { PlannetCard } from "@modules/planeta/components/PlanetCard";
import { SliderTime } from "@modules/planeta/components/SliderTime"
import { CamaraControl } from "@modules/camara/CamaraControl";
import { Ecliptic } from '@modules/orbita/Ecliptic';
import { ZoomController } from "@modules/camara/components/ZoomController";
import { useZoomSun } from "@modules/sol/hooks/useSun";

const NUM_ASTEROIDS = 10;

export function LayoutSolarSystem() {
  const [isRocketMode, setIsRocketMode] = useState(false);
  const [addAsteroids, setAddAsteroids] = useState(false);
  const [paintEliptics, setEliptics] = useState(false);
  const controlsRef = useRef(); // Ref to store OrbitControls

  const toggleRocketMode = () => {
    setIsRocketMode((prevMode) => !prevMode);
  };

  const toggleAsteroids = () => {
    setAddAsteroids((prevMode) => !prevMode);
  };

  const {onClick: SunClick} = useZoomSun()
  const toggleEliptics = () => {
    setEliptics((prevMode) => !prevMode);
  };

  return (
    <>
      <PlannetCard />
      <Button onClick={toggleRocketMode} color="primary" className="absolute bottom-4 right-4 rounded z-10">
        {isRocketMode ? "Switch to Normal Mode" : "Activate Rocket Mode"}
      </Button>

      <Button onClick={toggleEliptics} color="primary" className="absolute bottom-16 left-4 rounded z-10">
        {paintEliptics ? "Turn off eliptics" : "Activate eliptics"}
      </Button>

      <SliderTime />
      <Button onClick={toggleAsteroids} color="primary" className="absolute bottom-4 left-4 rounded z-10">
        {addAsteroids ? "Turn off asteroids" : "Activate asteroids"}
      </Button>
      <Button onClick={() => SunClick()} color="danger" variant="light" className="absolute top-4 left-4 rounded z-10">
        Volver al Sol
      </Button>

      <div className="w-full h-screen bg-[length:1500px_1000px] bg-repeat bg-[url('/assets/background2.jpg')] ">
      <Canvas camera={{ position: isRocketMode ? [0, 0, 5] : [0, 20, 25], fov: 45, near: 0.1, far: 100000 }}>

      <ZoomController controlsRef={controlsRef} />
        <OrbitControls ref={controlsRef} /> {/* Attach ref to OrbitControls */}

        <Sun />
        {planetData.map((planet) => (
          <Planet planet={planet} ecliptic={paintEliptics} key={planet.id} />
        ))}

        {smallObjectsData.map((smallObjects) => (
          <SmallObjects smallObjects={smallObjects} ecliptic={paintEliptics} key={smallObjects.id} />
        ))}
        
        <Lights />
        <CamaraControl/>
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
