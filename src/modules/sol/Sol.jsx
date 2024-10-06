import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useStoreSlider } from "../planeta/hooks/sliderCardStore";

export function Sun() {
  const { scene } = useGLTF("/assets/sol.glb");
  const sunRef = useRef();
  const { speed } = useStoreSlider() 


  // Rotate the sun along its own axis
  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.x = 90;
      sunRef.current.rotation.z = 0;
      sunRef.current.rotation.y += 0.001*speed;
    }
  });

  return (
    <primitive ref={sunRef} object={scene} scale={[0.0005, 0.0005, 0.0005]} />
  );
}
