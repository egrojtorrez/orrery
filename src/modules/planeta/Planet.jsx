import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Ecliptic } from "../orbita/Ecliptic";
import { useGLTF } from "@react-three/drei";
/* import { Satellite } from '../satellites/Satellite';
import satelliteData from '../satellites/satelliteData'; */

export function Planet({ planet: {xRadius, zRadius, size, modelUrl} }) {
  
  const { scene } = useGLTF(modelUrl);
  

  const planetRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()/50;
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    planetRef.current.rotation.y += 0.001;
  });

  return (
    <>
      <primitive ref={planetRef} object={scene} scale={[size*0.05, size*0.05, size*0.05]} />

      <Ecliptic xRadius={xRadius} zRadius={zRadius} />

    </>
  );
}