import { Canvas } from "@react-three/fiber";
import { Sun } from "../sol/Sol";
import { Planet } from "../planeta/Planet";
import { Lights } from "../luces/Lights";
import { OrbitControls } from "@react-three/drei";
import planetData from "../planeta/planetData";
import './styles.css'
export function LayoutSolarSystem() {
  return (
    <>
      <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
        <Sun />
        {planetData.map((planet) => (
          <Planet planet={planet} key={planet.id} />
        ))}
        <Lights />
        <OrbitControls />
      </Canvas>
    </>
  );
}