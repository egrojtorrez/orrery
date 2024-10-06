import { gsap } from "gsap";
import { useFrame, useThree } from "@react-three/fiber";
import { useCameraTarget } from "../hooks/useCameraTarget";

export function ZoomController({ controlsRef }) {
  const { camera } = useThree();
  const { selectedObject, isZooming, setZooming } = useCameraTarget()
  
  useFrame(() => {
    if (!selectedObject?.current) return;
    const { x, y, z } = selectedObject.current.position
    if (isZooming) {
      gsap.to(camera.position, {
        x: 0.5,
        y: 0.5,
        z: 0.5,
        duration: 2,
        onUpdate: () => {
          camera.lookAt(x, y, z); // Assuming the Sun is at [0, 0, 0]
          if (controlsRef.current) {
            controlsRef.current.update(); // Update controls only if it's defined
          }
        },
      });
      setZooming(false); // Reset after zooming
    }
  });

  return null;
}