import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';
import { useStoreSlider } from "@modules/planeta/hooks/sliderCardStore";
import { eccentricToTrueAnomaly, meanToEccentricAnomaly } from "../../planeta/utils/funcionesOrbita";


export const useSmallObjects = (smallObjects) => {
  const { speed } = useStoreSlider() 
  const speed_factor = smallObjects.speed_factor ?? speed ?? 0.001;
  const smallObjectsRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed_factor * 0.001;
    const meanMotion = (2 * Math.PI) / (smallObjects.sidereal * 365.25);
    
    // Calculate Mean Anomaly (M)
    const meanAnomaly = THREE.MathUtils.degToRad(smallObjects.meanAnomoly) + meanMotion * t; // M = M0 + n * t
    
    // Solve Kepler's equation for Eccentric Anomaly (E)
    let eccentricAnomaly = meanToEccentricAnomaly(smallObjects.eccentricity, meanAnomaly); 

    // Calculate True Anomaly (ν)
    const trueAnomaly = eccentricToTrueAnomaly(smallObjects.eccentricity, eccentricAnomaly);

    // Convert angles to radians
    const argPerigeeRad = THREE.MathUtils.degToRad(smallObjects.argPerigee);  // Argument of Periapsis (ω)
    const raanRad = THREE.MathUtils.degToRad(smallObjects.raan);  // Right Ascension of Ascending Node (Ω)
    const inclinationRad = THREE.MathUtils.degToRad(smallObjects.inclination);  // Inclination (i)

    // Calculate the radial distance (r)
    const radialDistance = smallObjects.semiMajorAxis * (1 - smallObjects.eccentricity ** 2) / 
                          (1 + smallObjects.eccentricity * Math.cos(trueAnomaly));  // r = a(1-e^2) / (1 + e cos(ν))

    // Calculate 3D coordinates using orbital parameters and true anomaly
    const x = radialDistance * (Math.cos(argPerigeeRad + trueAnomaly) * Math.cos(raanRad) - 
                                Math.cos(inclinationRad) * Math.sin(argPerigeeRad + trueAnomaly) * Math.sin(raanRad));

    const y = radialDistance * (Math.cos(argPerigeeRad + trueAnomaly) * Math.sin(raanRad) + 
                                Math.cos(inclinationRad) * Math.sin(argPerigeeRad + trueAnomaly) * Math.cos(raanRad));

    const z = radialDistance * Math.sin(argPerigeeRad + trueAnomaly) * Math.sin(inclinationRad);

    // Set position
    smallObjectsRef.current.position.set(x, y, z);
    smallObjectsRef.current.rotation.x = 90;
    smallObjectsRef.current.rotation.z = 0;

    // Optional: Use the velocity to adjust the motion or properties as needed
    // e.g., adjusting color or size based on velocity
    // smallObjectsRef.current.scale.set(velocity * someFactor, velocity * someFactor, velocity * someFactor);

    smallObjectsRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
  });
  return { smallObjectsRef};
}