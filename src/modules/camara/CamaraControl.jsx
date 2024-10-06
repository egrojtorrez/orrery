import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useCameraTarget } from "./hooks/useCameraTarget";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";


export function CamaraControl() {
  const controlsRef = useRef();
  const {cameraTarget, setCameraTarget, selectedObject } = useCameraTarget()

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.target.set(...cameraTarget);
      controlsRef.current.update();
    }
  }, [cameraTarget]);

  // Usamos useFrame para seguir al objeto seleccionado en cada frame
  useFrame(() => {
    if (selectedObject && selectedObject.current) {
      const { x, y, z } = selectedObject.current.position;
      setCameraTarget(x, y, z);
    }
  });

  return(
    <OrbitControls ref={controlsRef}/>
  )
}