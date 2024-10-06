import { useSun } from "./hooks/useSun";

export function Sun() {
  const {sunRef, scene} = useSun();

  return (
    <primitive ref={sunRef} object={scene} scale={[0.0003, 0.0003, 0.0003]} />
  );
}
