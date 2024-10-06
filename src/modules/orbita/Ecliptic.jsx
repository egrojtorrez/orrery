import * as THREE from "three";

export function Ecliptic({ planeta }) {
  const { id, name, xRadius, zRadius, size, argPerigee, sidereal, meanAnomoly, raan, semiMajorAxis, eccentricity, inclination, color } = planeta;
 
  const points = [];
  
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI; //theta
    var sLR = semiMajorAxis * (1 - Math.pow(eccentricity, 2));
    var r = sLR/(1 + eccentricity * Math.cos(angle));  // Compute radial distance.
    const x = r * (Math.cos(argPerigee * 0.01745329 + angle) * Math.cos(raan * 0.01745329) - Math.cos(inclination * 0.01745329) * Math.sin(argPerigee * 0.01745329 + angle) * Math.sin(raan * 0.01745329));
    const y = r * (Math.cos(argPerigee * 0.01745329 + angle) * Math.sin(raan * 0.01745329) + Math.cos(inclination * 0.01745329) * Math.sin(argPerigee * 0.01745329 + angle) * Math.cos(raan * 0.01745329));
    const z = r * (Math.sin(argPerigee * 0.01745329 + angle) * Math.sin(inclination * 0.01745329));
    points.push(new THREE.Vector3(x, y, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}

function Trajectory(name, smA,oI,aP,oE,aN,mAe,Sidereal){
  this.name = name                          // name the object
  this.smA = smA                            // semi major axis
  this.oI = oI * 0.01745329                 // orbital inclination --> convert degrees to radians
  this.aP = aP * 0.01745329                 // argument of Perigee --> convert degrees to radians
  this.oE = oE                              // orbital eccentricity
  this.aN = aN * 0.01745329                 // ascending node --> convert degrees to radians
  this.period = Sidereal                    // siderial period as a multiple of Earth's orbital period
  this.epochMeanAnomaly = mAe * 0.01745329  // mean anomaly at epoch 
  this.trueAnomoly = 0                      // initialize to mean anomaly at epoch
  this.position = [0,0,0] 
  this.time = 0 
}