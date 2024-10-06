import { comment } from "postcss";

const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
  `rgb(${randomInt(180, 250)}, ${randomInt(180, 250)}, ${randomInt(180, 250)})`;

const planets = [
  {
    id: 1,
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
    rotationSpeed: 10.8,
    comment: `Mercury is the fastest planet in our solar system – traveling through space at nearly 29 miles (47 kilometers) per second. The closer a planet is to the Sun, the faster it travels. Since Mercury is the fastest planet and has the shortest distance to travel around the Sun, it has the shortest year of all the planets in our solar system – 88 days. `
  },
  {
    id: 2,
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
    rotationSpeed: 6.5,

    comment: `Venus is often called "Earth’s twin" because they’re similar in size and structure, but Venus has extreme surface heat and a dense, toxic atmosphere. If the Sun were as tall as a typical front door, Earth and Venus would each be about the size of a nickel.`
    
  },
  {
    id: 3,
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
    rotationSpeed: 1574,

    comment: `Earth is the only planet that has a single moon. Our Moon is the brightest and most familiar object in the night sky. In many ways, the Moon is responsible for making Earth such a great home. It stabilizes our planet's wobble, which has made the climate less variable over thousands of years.
    Earth sometimes temporarily hosts orbiting asteroids or large rocks. They are typically trapped by Earth's gravity for a few months or years before returning to an orbit around the Sun. Some asteroids will be in a long “dance” with Earth as both orbit the Sun.`
  },
  {
    id: 4,
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
    rotationSpeed: 866,

    comment: `With a radius of 2,106 miles (3,390 kilometers), Mars is about half the size of Earth. If Earth were the size of a nickel, Mars would be about as big as a raspberry.
              From an average distance of 142 million miles (228 million kilometers), Mars is 1.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 13 minutes to travel from the Sun to Mars.`
  },
  {
    id: 5,
    name: "Jupiter",
    xRadius: 1.88,
    zRadius: 1.88,
    size: 0.69911,
    argPerigee: 14.75385,
    sidereal: 11.8618,
    meanAnomoly: 0,
    raan: 100.464,
    semiMajorAxis: 5.2044,
    eccentricity: 0.0489,
    inclination: 1.299,
    color: 0xD4B8A3,
    rotationSpeed: 45583,

    comment: `Jupiter is the largest planet in our solar system. If Jupiter was a hollow shell, 1,000 Earths could fit inside. Jupiter also is the oldest planet, forming from the dust and gases left over from the Sun's formation 4.5 billion years ago. But it has the shortest day in the solar system, taking only 10.5 hours to spin around once on its axis.`
  },
  {
    id: 6,
    name: "Saturn",
    xRadius: 9.5826,
    zRadius: 9.5826,
    size: 0.58232,
    argPerigee: 92.43194,
    sidereal: 10.75922,
    meanAnomoly: 339.392,
    raan: 113.665,
    semiMajorAxis: 9.5826,
    eccentricity: 0.0565,
    inclination: 2.494,
    color: 0xFFFF00,
    rotationSpeed: 36840,

    comment: `Saturn has the second-shortest day in the solar system. One day on Saturn takes only 10.7 hours (the time it takes for Saturn to rotate or spin around once), and Saturn makes a complete orbit around the Sun (a year in Saturnian time) in about 29.4 Earth years (10,756 Earth days).
    Its axis is tilted by 26.73 degrees with respect to its orbit around the Sun, which is similar to Earth's ;23.5-degree tilt. This means that, like Earth, Saturn experiences seasons.`
  },
  {
    id: 7,
    name: "Uranus",
    xRadius: 1.69, // Average radius in relation to Earth
    zRadius: 1.69, // Average radius in relation to Earth
    size: 0.25362, // Relative size compared to Earth
    argPerigee: 174.96, // Argument of perigee
    sidereal: 84.01, // Uranus' sidereal period in Earth years
    meanAnomoly: 0, // Can be set to 0 or a specific value at a reference time
    raan: 74.0, // Right Ascension of the Ascending Node
    semiMajorAxis: 19.181, // Semi-major axis in astronomical units (AU)
    eccentricity: 0.046, // Eccentricity of Uranus's orbit
    inclination: 0.77, // Inclination in degrees
    color: 0x4DA6E0, // Light blue color to represent Uranus
    rotationSpeed: 14794,
    comment: `Uranus is the only planet whose equator is nearly at a right angle to its orbit, with a tilt of 97.77 degrees. This may be the result of a collision with an Earth-sized object long ago. This unique tilt causes Uranus to have the most extreme seasons in the solar system. For nearly a quarter of each Uranian year, the Sun shines directly over each pole, plunging the other half of the planet into a 21-year-long, dark winter.`
  },
  {
    id: 8,
    name: "Neptune",
    xRadius: 1.5, // Average radius in relation to Earth
    zRadius: 1.5, // Average radius in relation to Earth
    size: 0.24622, // Relative size compared to Earth
    argPerigee: 130.00, // Argument of perigee
    sidereal: 164.79, // Neptune's sidereal period in Earth years
    meanAnomoly: 0, // Can be set to 0 or a specific value at a reference time
    raan: 131.79, // Right Ascension of the Ascending Node
    semiMajorAxis: 30.070, // Semi-major axis in astronomical units (AU)
    eccentricity: 0.009, // Eccentricity of Neptune's orbit
    inclination: 1.77, // Inclination in degrees
    color: 0x4B0082, // Deep blue color to represent Neptune
    rotationSpeed: 9719,
    comment: `Neptune is one of two ice giants in the outer solar system (the other is Uranus). Most (80% or more) of the planet's mass is made up of a hot dense fluid of "icy" materials – water, methane, and ammonia – above a small, rocky core. Of the giant planets, Neptune is the densest.
              Scientists think there might be an ocean of super hot water under Neptune's cold clouds. It does not boil away because incredibly high pressure keeps it locked inside.`
  },
];
const totalPlanets = 8;
const models = [
  "/assets/mercurio.glb", 
  "/assets/venus.glb",
  "/assets/tierra.glb",
  "/assets/marte.glb",
  "/assets/jupiter.glb",
  "/assets/saturno.glb",
  "/assets/urano.glb",
  "/assets/neptuno.glb",
]

const planetData = planets.map((planet, index) => ({
  ...planet,
  modelUrl: models[index],
}));

// for (let index = 0; index < totalPlanets; index++) {
//   planetData.push({
//     id: index,
//     xRadius: (index + 1.5) * 600,
//     zRadius: (index + 1.5) * 450,
//     size: planets[index]["Radius"]/(2000*(index+1)),
//     modelUrl: models[index], 
//   });
// }

export default planetData;
