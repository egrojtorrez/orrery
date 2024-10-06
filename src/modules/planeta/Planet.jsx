import { Ecliptic } from "../orbita/Ecliptic";
import { usePlanet } from "./hooks/usePlanet";
import useStore from "@modules/store/useStore"; // Import the store

export function Planet({ planet }) {
  const { scene, planetRef, onClick } = usePlanet(planet);
  const { isRealisticSize } = useStore(); // Get the realistic size state

  const scaleValue = isRealisticSize ? planet.size*.0005 : planet.size * 0.005; // Set scale based on toggle

  return (
    <>
      <primitive ref={planetRef} object={scene} scale={[scaleValue, scaleValue, scaleValue]} onClick={() => onClick()} />
      <Ecliptic planeta={planet} />
    </>
  ); 
}
