import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Ecliptic } from "../orbita/Ecliptic";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';
/* import { Satellite } from '../satellites/Satellite';
import satelliteData from '../satellites/satelliteData'; */

export function Planet({ planet: {xRadius, zRadius, size, modelUrl, speed_factor=40, ...planet } }) {
  const { scene } = useGLTF(modelUrl);
  
  const planetRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed_factor;
    var meanMotion = (2 * Math.PI) / (planet.sidereal * 365.25);
    
      // Calcular la anomalía media (Mean Anomaly, M)
    const meanAnomaly = THREE.MathUtils.degToRad(planet.meanAnomoly) + meanMotion * t; // M = M0 + n * t
    
    // Resolver la ecuación de Kepler para obtener la Anomalía Excéntrica (E)
    let eccentricAnomaly = meanToEccentricAnomaly(planet.eccentricity, meanAnomaly);  // E = Newton-Raphson para encontrar E a partir de M

    // Calcular la Anomalía Verdadera (True Anomaly, ν) desde la Anomalía Excéntrica (E)
    const trueAnomaly = eccentricToTrueAnomaly(planet.eccentricity, eccentricAnomaly);

    // Convertir a radianes los ángulos orbitales
    const argPerigeeRad = THREE.MathUtils.degToRad(planet.argPerigee);  // Argumento del Perigeo (ω)
    const raanRad = THREE.MathUtils.degToRad(planet.raan);  // Ascensión Recta del Nodo Ascendente (Ω)
    const inclinationRad = THREE.MathUtils.degToRad(planet.inclination);  // Inclinación (i)

    // Calcular la distancia radial (r) desde el cuerpo central
    const radialDistance = planet.semiMajorAxis * (1 - planet.eccentricity ** 2) / 
                          (1 + planet.eccentricity * Math.cos(trueAnomaly));  // r = a(1-e^2) / (1 + e cos(ν))

    // Calcular las coordenadas 3D en el espacio utilizando los parámetros orbitales y la anomalía verdadera
    const x = radialDistance * (Math.cos(argPerigeeRad + trueAnomaly) * Math.cos(raanRad) - 
                                Math.cos(inclinationRad) * Math.sin(argPerigeeRad + trueAnomaly) * Math.sin(raanRad));

    const y = radialDistance * (Math.cos(argPerigeeRad + trueAnomaly) * Math.sin(raanRad) + 
                                Math.cos(inclinationRad) * Math.sin(argPerigeeRad + trueAnomaly) * Math.cos(raanRad));

    const z = radialDistance * Math.sin(argPerigeeRad + trueAnomaly) * Math.sin(inclinationRad);

    planetRef.current.position.set(x, y, z);
    planetRef.current.rotation.y += 0.001;
  });

  return (
    <>
      <primitive ref={planetRef} object={scene} scale={[size*0.005, size*0.005, size*0.005]} />

      <Ecliptic planeta={planet}/>

    </>
  );

  // Función para convertir la Anomalía Excéntrica (E) a Anomalía Verdadera (ν)
  function eccentricToTrueAnomaly(e, E) {
    return 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));
  }

  // Función para resolver la Anomalía Excéntrica (E) a partir de la Anomalía Media (M) usando el método de Newton-Raphson
  function meanToEccentricAnomaly(e, M) {
    const tol = 0.0001;  // Tolerancia
    let eccentricAnomaly = M;  // Inicialización con M como primera aproximación
    let ratio = 1;

    while (Math.abs(ratio) > tol) {
      const f_E = eccentricAnomaly - e * Math.sin(eccentricAnomaly) - M;
      const f_Eprime = 1 - e * Math.cos(eccentricAnomaly);
      ratio = f_E / f_Eprime;
      eccentricAnomaly -= ratio;  // Ajustar el valor de E
    }
    
    return eccentricAnomaly;
  }
}