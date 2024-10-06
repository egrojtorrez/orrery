import React, { useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sun } from "@modules/sol/Sol";
import { Planet } from "@modules/planeta/Planet";
import { Lights } from "@modules/luces/Lights";
import planetData from "@modules/planeta/planetData";
import { OrbitControls } from "@react-three/drei";
import { Asteroid } from '../asteroides/Asteroid';
import { Rocket } from "../rocket/Rocket";
import { Button } from "@nextui-org/button";
import { PlannetCard } from "@modules/planeta/components/PlanetCard";
import { SliderTime } from "@modules/planeta/components/SliderTime";
import { gsap } from "gsap";

const NUM_ASTEROIDS = 10;

function ZoomController({ zoomToSunRef, controlsRef }) {
  const { camera } = useThree();

  useFrame(() => {
    if (zoomToSunRef.current) {
      gsap.to(camera.position, {
        x: 0,
        y: 1,
        z: 1,
        duration: 2,
        onUpdate: () => {
          camera.lookAt(0, 0, 0); // Assuming the Sun is at [0, 0, 0]
          if (controlsRef.current) {
            controlsRef.current.update(); // Update controls only if it's defined
          }
        },
      });
      zoomToSunRef.current = false; // Reset after zooming
    }
  });

  return null;
}

export function LayoutSolarSystem() {
  const [isRocketMode, setIsRocketMode] = useState(false);
  const [addAsteroids, setAddAsteroids] = useState(false);
  const zoomToSunRef = useRef(false); // Ref to track zoom state
  const controlsRef = useRef(); // Ref to store OrbitControls

  const toggleRocketMode = () => {
    setIsRocketMode((prevMode) => !prevMode);
  };

  const toggleAsteroids = () => {
    setAddAsteroids((prevMode) => !prevMode);
  };

  const triggerZoomToSun = () => {
    zoomToSunRef.current = true; // Trigger the zoom effect
  };

  return (
    <>
      <PlannetCard />
      <Button onClick={toggleRocketMode} color="primary" className="absolute bottom-4 right-4 rounded z-10">
        {isRocketMode ? "Switch to Normal Mode" : "Activate Rocket Mode"}
      </Button>
      <SliderTime />
      <Button onClick={toggleAsteroids} color="primary" className="absolute bottom-4 left-4 rounded z-10">
        {addAsteroids ? "Turn off asteroids" : "Activate asteroids"}
      </Button>

      <Button onClick={triggerZoomToSun} color="secondary" className="absolute bottom-16 left-4 rounded z-10">
        Zoom to Sun
      </Button>

      <div className="w-full h-screen bg-[length:1500px_1000px] bg-repeat bg-[url('/assets/background1.jpg')] opacity-97">
        <Canvas camera={{ position: isRocketMode ? [0, 0, 5] : [0, 20, 25], fov: 45, near: 0.1, far: 100000 }}>
          <ZoomController zoomToSunRef={zoomToSunRef} controlsRef={controlsRef} />
          <Sun />
          {planetData.map((planet) => (
            <Planet planet={planet} key={planet.id} />
          ))}
          <Lights />
          <OrbitControls ref={controlsRef} /> {/* Attach ref to OrbitControls */}
          {isRocketMode && <Rocket />}
          {addAsteroids && (Array.from({ length: NUM_ASTEROIDS }).map((_, index) => (
            <Asteroid
              key={index}
              position={[
                Math.random() * 20 - 10,
                Math.random() * 5,
                Math.random() * -50
              ]}
            />
          )))}
        </Canvas>
      </div>
    </>
  );
}
