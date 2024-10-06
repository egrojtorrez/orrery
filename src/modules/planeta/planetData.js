import { comment } from "postcss";

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
    color: 0x0066FF,
    comment: `Earth is the only planet that has a single moon. Our Moon is the brightest and most familiar object in the night sky. In many ways, the Moon is responsible for making Earth such a great home. It stabilizes our planet's wobble, which has made the climate less variable over thousands of years.
Earth sometimes temporarily hosts orbiting asteroids or large rocks. They are typically trapped by Earth's gravity for a few months or years before returning to an orbit around the Sun. Some asteroids will be in a long “dance” with Earth as both orbit the Sun.
`

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
    color: 0xCC3333,
    comment: `With a radius of 2,106 miles (3,390 kilometers), Mars is about half the size of Earth. If Earth were the size of a nickel, Mars would be about as big as a raspberry.
              From an average distance of 142 million miles (228 million kilometers), Mars is 1.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 13 minutes to travel from the Sun to Mars.`
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
    color: 0xFF0000,
    comment: `Mercury is the fastest planet in our solar system – traveling through space at nearly 29 miles (47 kilometers) per second. The closer a planet is to the Sun, the faster it travels. Since Mercury is the fastest planet and has the shortest distance to travel around the Sun, it has the shortest year of all the planets in our solar system – 88 days. `
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
    color: 0xFFFFFF,
    comment: `Venus is often called "Earth’s twin" because they’re similar in size and structure, but Venus has extreme surface heat and a dense, toxic atmosphere. If the Sun were as tall as a typical front door, Earth and Venus would each be about the size of a nickel.`
  },
  {
    id: 5,
    name: "Jupiter",
    xRadius: 1.88,
    zRadius: 1.88,
    size: 0.1898,
    argPerigee: 14.75385,
    sidereal: 11.8618,
    meanAnomoly: 0,
    raan: 100.464,
    semiMajorAxis: 5.2044,
    eccentricity: 0.0489,
    inclination: 1.299,
    color: 0xD4B8A3 
  },
  {
    id: 6,
    name: "Uranus",
    xRadius: 1.69, // Average radius in relation to Earth
    zRadius: 1.69, // Average radius in relation to Earth
    size: 0.0425, // Relative size compared to Earth
    argPerigee: 174.96, // Argument of perigee
    sidereal: 84.01, // Uranus' sidereal period in Earth years
    meanAnomoly: 0, // Can be set to 0 or a specific value at a reference time
    raan: 74.0, // Right Ascension of the Ascending Node
    semiMajorAxis: 19.181, // Semi-major axis in astronomical units (AU)
    eccentricity: 0.046, // Eccentricity of Uranus's orbit
    inclination: 0.77, // Inclination in degrees
    color: 0x4DA6E0 // Light blue color to represent Uranus
  },
  {
    id: 7,
    name: "Neptune",
    xRadius: 1.5, // Average radius in relation to Earth
    zRadius: 1.5, // Average radius in relation to Earth
    size: 0.0407, // Relative size compared to Earth
    argPerigee: 130.00, // Argument of perigee
    sidereal: 164.79, // Neptune's sidereal period in Earth years
    meanAnomoly: 0, // Can be set to 0 or a specific value at a reference time
    raan: 131.79, // Right Ascension of the Ascending Node
    semiMajorAxis: 30.070, // Semi-major axis in astronomical units (AU)
    eccentricity: 0.009, // Eccentricity of Neptune's orbit
    inclination: 1.77, // Inclination in degrees
    color: 0x4B0082 // Deep blue color to represent Neptune
  },
  {
    id: 9,
    name: "Pluto",
    xRadius: 0.18, // Average radius in relation to Earth
    zRadius: 0.18, // Average radius in relation to Earth
    size: 0.00218, // Relative size compared to Earth
    argPerigee: 113.29, // Argument of perigee
    sidereal: 248.00, // Pluto's sidereal period in Earth years
    meanAnomoly: 14.80, // Mean anomaly in degrees (approximate value at a reference time)
    raan: 110.29, // Right Ascension of the Ascending Node
    semiMajorAxis: 39.482, // Semi-major axis in astronomical units (AU)
    eccentricity: 0.248, // Eccentricity of Pluto's orbit
    inclination: 17.14, // Inclination in degrees
    color: 0xC2B280 // Color to represent Pluto (light brownish hue)
  }
];


export default planetData;
