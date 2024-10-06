import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';
import { eccentricToTrueAnomaly, meanToEccentricAnomaly } from "../utils/funcionesOrbita";
import { useStoreCard, useStoreDataCard } from "./planetCardStore";
import { useStoreSlider } from "./sliderCardStore";
import { useCameraTarget } from "@modules/camara/hooks/useCameraTarget";

export const usePlanet = (planetData) => {
  const { scene } = useGLTF(planetData.modelUrl);
  const { speed } = useStoreSlider() 
  const {followObject} = useCameraTarget()
  const speed_factor = planetData.speed_factor ?? speed ?? 40
  const planetRef = useRef();

  const {onOpen} = useStoreCard()
  const {setData} = useStoreDataCard()
  
  const onClick = () => {
    followObject(planetRef)
    onOpen()
    setData({
      title: planetData.name,
      description: planetData.comment
    })
  }

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed_factor;
    var meanMotion = (2 * Math.PI) / (planetData.sidereal * 365.25);
      // Calcular la anomalía media (Mean Anomaly, M)
    const meanAnomaly = THREE.MathUtils.degToRad(planetData.meanAnomoly) + meanMotion * t; // M = M0 + n * t
    
    // Resolver la ecuación de Kepler para obtener la Anomalía Excéntrica (E)
    let eccentricAnomaly = meanToEccentricAnomaly(planetData.eccentricity, meanAnomaly);  // E = Newton-Raphson para encontrar E a partir de M

    // Calcular la Anomalía Verdadera (True Anomaly, ν) desde la Anomalía Excéntrica (E)
    const trueAnomaly = eccentricToTrueAnomaly(planetData.eccentricity, eccentricAnomaly);

    // Convertir a radianes los ángulos orbitales
    const argPerigeeRad = THREE.MathUtils.degToRad(planetData.argPerigee);  // Argumento del Perigeo (ω)
    const raanRad = THREE.MathUtils.degToRad(planetData.raan);  // Ascensión Recta del Nodo Ascendente (Ω)
    const inclinationRad = THREE.MathUtils.degToRad(planetData.inclination);  // Inclinación (i)

    // Calcular la distancia radial (r) desde el cuerpo central
    const radialDistance = planetData.semiMajorAxis * (1 - planetData.eccentricity ** 2) / 
                          (1 + planetData.eccentricity * Math.cos(trueAnomaly));  // r = a(1-e^2) / (1 + e cos(ν))

    // Calcular las coordenadas 3D en el espacio utilizando los parámetros orbitales y la anomalía verdadera
    const x = radialDistance * (Math.cos(argPerigeeRad + trueAnomaly) * Math.cos(raanRad) - 
                                Math.cos(inclinationRad) * Math.sin(argPerigeeRad + trueAnomaly) * Math.sin(raanRad));

    const y = radialDistance * (Math.cos(argPerigeeRad + trueAnomaly) * Math.sin(raanRad) + 
                                Math.cos(inclinationRad) * Math.sin(argPerigeeRad + trueAnomaly) * Math.cos(raanRad));

    const z = radialDistance * Math.sin(argPerigeeRad + trueAnomaly) * Math.sin(inclinationRad);

    planetRef.current.position.set(x, y, z);
    planetRef.current.rotation.x = 90;
    planetRef.current.rotation.z = 0;

    planetRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
  });
  return { planetRef, scene, onClick };
}