import { Ecliptic } from "../orbita/Ecliptic";
import { usePlanet } from "./hooks/usePlanet";
/* import { Satellite } from '../satellites/Satellite';
import satelliteData from '../satellites/satelliteData'; */

export function Planet({ planet, ecliptic}) {
  const { scene, planetRef, onClick} = usePlanet(planet);

  return (
    <>
      <primitive ref={planetRef}  object={scene} scale={[planet.size*0.003, planet.size*0.003, planet.size*0.003]} onClick={() => onClick()} />
      {ecliptic && <Ecliptic planeta={planet}/>}
    </>
  ); 
}