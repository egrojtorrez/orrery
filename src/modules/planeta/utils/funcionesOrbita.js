export function eccentricToTrueAnomaly(e, E) {
  return 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(E / 2));
}

export function meanToEccentricAnomaly(e, M) {
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