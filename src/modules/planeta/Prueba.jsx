import { useGLTF } from '@react-three/drei';

export function PruebaBlender() {
  const { scene } = useGLTF('http://localhost:53821/test.glb');
  return <primitive object={scene} scale={1} />;
}