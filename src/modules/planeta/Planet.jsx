import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Ecliptic } from "@modules/orbita/Ecliptic";
/* import { Satellite } from '../satellites/Satellite';
import satelliteData from '../satellites/satelliteData'; */

export function Planet({ planet: { color, xRadius, zRadius, size } }) {
  const planetRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()/50;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}