import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Ecliptic } from "../orbita/Ecliptic";

export function Satellite({ satellite: {planet, color, xRadius, zRadius, size} }) {
  const SatelliteRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()/50;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    SatelliteRef.current.position.x = x;
    SatelliteRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={SatelliteRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}