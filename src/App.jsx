import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Box } from './modules/planeta/Box'
import { OrbitControls } from '@react-three/drei'
import { PruebaBlender } from './modules/planeta/Prueba'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Canvas style={{ width: 2000, height: 2000 }}>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <PruebaBlender />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App