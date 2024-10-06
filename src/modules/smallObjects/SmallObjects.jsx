import { Ecliptic } from "../orbita/Ecliptic";
import { useSmallObjects } from "./hooks/useSmallObjects";
/* import { Satellite } from '../satellites/Satellite';
import satelliteData from '../satellites/satelliteData'; */

export function SmallObjects({ smallObjects, ecliptic }) {
    const { smallObjectsRef } = useSmallObjects(smallObjects);
    return (
        <>
            <mesh ref={smallObjectsRef}>
                <sphereGeometry args={[smallObjects.size*0.05, 0, smallObjects.size*0.05]} />
                <meshStandardMaterial color={smallObjects.color} />
            </mesh>
            {/* <primitive ref={smallObjectsRef} scale={[smallObjects.size*0.005, smallObjects.size*0.005, smallObjects.size*0.005]}/> */}
            {ecliptic && <Ecliptic planeta={smallObjects}/>}
        </>
    ); 
}