const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
  `rgb(${randomInt(180, 250)}, ${randomInt(180, 250)}, ${randomInt(180, 250)})`;

// const planetData = [
//   {
//     "Planet": "Mercury",
//     "Radius": 2439.4
//   },
//   {
//     "Planet": "Venus",
//     "Radius": 6051.8
//   },
//   {
//     "Planet": "Earth",
//     "Radius": 6371.0084
//   },
//   {
//     "Planet": "Mars",
//     "Radius": 3389.5
//   },
//   {
//     "Planet": "Jupiter",
//     "Radius": 69911
//   },
//   {
//     "Planet": "Saturn",
//     "Radius": 58232
//   },
//   {
//     "Planet": "Uranus",
//     "Radius": 25362
//   },
//   {
//     "Planet": "Neptune",
//     "Radius": 24622
//   }
// ];
// const totalPlanets = 8;

// for (let index = 0; index < totalPlanets; index++) {
//   planetData.push({
//     id: index,
//     color: randomColor(),
//     xRadius: (index + 1.5) * 60,
//     zRadius: (index + 1.5) * 45,
//     size: planetData[index]["Radius"]/(500*(index+1))
    
//   });
// }

const planetData = [
  {
    id: 1,
    name: "Earth",
    xRadius: 1,
    zRadius: 1,
    size: 0.063710084,
    argPerigee: 100.47,
    sidereal: 1,
    meanAnomoly: 100.47,
    raan: -11.26064,
    semiMajorAxis: 1.00000011,
    eccentricity: 0.01671022,
    inclination: 0.00005,
    color: 0x0066FF
  },
  {
    id: 2,
    name: "Mars",
    xRadius: 1.52,
    zRadius: 1.52,
    size: 0.033895,
    argPerigee: 336.04084084,
    sidereal: 0.881,
    meanAnomoly: 355.43,
    raan: 49.57854,
    semiMajorAxis: 1.5236623,
    eccentricity: 0.09341233,
    inclination: 1.85061,
    color: 0xCC3333
  },
  {
    id: 3,
    name: "Mercury",
    xRadius: 0.39,
    zRadius: 0.39,
    size: 0.024394,
    argPerigee: 77.46,
    sidereal: 0.240846,
    meanAnomoly: 252.25,
    raan: 48.33167,
    semiMajorAxis: 0.38709893,
    eccentricity: 0.20563069,
    inclination: 7.00487,
    color: 0xFF0000
  },
  {
    id: 4,
    name: "Venus",
    xRadius: 0.72,
    zRadius: 0.72,
    size: 0.060518,
    argPerigee: 131.77,
    sidereal: 0.615,
    meanAnomoly: 181.98,
    raan: 76.68069,
    semiMajorAxis: 0.72333199,
    eccentricity: 0.00677323,
    inclination: 3.39471,
    color: 0xFFFFFF
  },
  // Agrega más planetas aquí...
];


export default planetData;
