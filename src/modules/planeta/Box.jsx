import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export function Box(props) {
  const meshRef = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [position, setPosition] = useState(5)
  const move = useRef(0.01)
  // useFrame((_, delta) => (meshRef.current.rotation.x += delta))
  useFrame(() => {
    if (meshRef.current && active) {
      meshRef.current.position.x = position
      let newPosition = position + move.current
      if (newPosition > 5 || newPosition < -5) {
        move.current = move.current * -1
      }
      setPosition(newPosition)

    }
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    // position={1,1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}