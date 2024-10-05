import { Canvas } from "@react-three/fiber";
import { Sun } from "@modules/sol/Sol";
import { Planet } from "@modules/planeta/Planet";
import { Lights } from "@modules/luces/Lights";
import planetData from "@modules/planeta/planetData";
import { OrbitControls } from "@react-three/drei";
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