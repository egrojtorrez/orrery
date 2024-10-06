import { Ecliptic } from "../orbita/Ecliptic";
import { usePlanet } from "./hooks/usePlanet";
/* import { Satellite } from '../satellites/Satellite';
import satelliteData from '../satellites/satelliteData'; */

export function Planet({ planet}) {
  const { scene, planetRef} = usePlanet(planet);

  return (
    <>
      <primitive ref={planetRef} object={scene} scale={[planet.size*0.005, planet.size*0.005, planet.size*0.005]} />
      <Ecliptic planeta={planet}/>
    </>
  );

 
}