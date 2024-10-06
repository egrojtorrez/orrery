import { comment } from "postcss";

const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
  `rgb(${randomInt(180, 250)}, ${randomInt(180, 250)}, ${randomInt(180, 250)})`;

const planets = [
  {
    id: 1,
    name: "Mercury",
    xRadius: 0.387098,
    zRadius: 0.387098,
    size: 0.024394,
    argPerigee: 77.45645,
    sidereal: 0.240846,
    meanAnomoly: 29.124,
    raan: 48.331,
    semiMajorAxis: 0.387098,
    eccentricity: 0.20563,
    inclination: 7,
    color: 0xFF0000,
    rotationSpeed: 10.8,
    comment: `Mercury is the fastest planet in our solar system – traveling through space at nearly 29 miles (47 kilometers) per second. The closer a planet is to the Sun, the faster it travels. Since Mercury is the fastest planet and has the shortest distance to travel around the Sun, it has the shortest year of all the planets in our solar system – 88 days. `
  },
  {
    id: 2,
    name: "Venus",
    xRadius: 0.723332,
    zRadius: 0.723332,
    size: 0.060518,
    argPerigee: 131.53298,
    sidereal: 0.615,
    meanAnomoly: 54.884,
    raan: 76.68,
    semiMajorAxis: 0.723332,
    eccentricity: 0.006772,
    inclination: 3.4,
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
    argPerigee: 102.94719,
    sidereal: 1,
    meanAnomoly: 114.20783,
    raan: -11.26064,
    semiMajorAxis: 1,
    eccentricity: 0.016708,
    inclination: 0,
    color: 0x0066FF,
    rotationSpeed: 1574,

    comment: `Earth is the only planet that has a single moon. Our Moon is the brightest and most familiar object in the night sky. In many ways, the Moon is responsible for making Earth such a great home. It stabilizes our planet's wobble, which has made the climate less variable over thousands of years.
    Earth sometimes temporarily hosts orbiting asteroids or large rocks. They are typically trapped by Earth's gravity for a few months or years before returning to an orbit around the Sun. Some asteroids will be in a long “dance” with Earth as both orbit the Sun.`
  },
  {
    id: 4,
    name: "Mars",
    xRadius: 1.523679,
    zRadius: 1.523679,
    size: 0.033895,
    argPerigee: 336.04084,
    sidereal: 0.881,
    meanAnomoly: 286.502,
    raan: 49.558,
    semiMajorAxis: 1.523679,
    eccentricity: 0.0934,
    inclination: 1.852,
    color: 0xCC3333,
    rotationSpeed: 866,

    comment: `With a radius of 2,106 miles (3,390 kilometers), Mars is about half the size of Earth. If Earth were the size of a nickel, Mars would be about as big as a raspberry.
              From an average distance of 142 million miles (228 million kilometers), Mars is 1.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 13 minutes to travel from the Sun to Mars.`
  },
  {
    id: 5,
    name: "Jupiter",
    xRadius: 5.2044,
    zRadius: 5.2044,
    size: 0.69911,
    argPerigee: 14.75385,
    sidereal: 4.33259,
    meanAnomoly: 273.867,
    raan: 100.464,
    semiMajorAxis: 5.2044,
    eccentricity: 0.0489,
    inclination: 1.299,
    color: 0xFFA500,
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
    comment: `Saturn has the second-shortest day in the solar system. One day on Saturn takes only 10.7 hours (the time it takes for Saturn to rotate or spin around once), and Saturn makes a complete orbit around the Sun (a year in Saturnian time) in about 29.4 Earth years (10,756 Earth days).
    Its axis is tilted by 26.73 degrees with respect to its orbit around the Sun, which is similar to Earth's ;23.5-degree tilt. This means that, like Earth, Saturn experiences seasons.`
  },
  {
    id: 7,
    name: "Uranus",
    xRadius: 19.2184,
    zRadius: 19.2184,
    size: 0.25362,
    argPerigee: 170.96424,
    sidereal: 30.6885,
    meanAnomoly: 96.998857,
    raan: 74.006,
    semiMajorAxis: 19.2184,
    eccentricity: 0.046381,
    inclination: 0.8,
    color: 0x00FFFF,
    comment: `Uranus is the only planet whose equator is nearly at a right angle to its orbit, with a tilt of 97.77 degrees. This may be the result of a collision with an Earth-sized object long ago. This unique tilt causes Uranus to have the most extreme seasons in the solar system. For nearly a quarter of each Uranian year, the Sun shines directly over each pole, plunging the other half of the planet into a 21-year-long, dark winter.`
  },
  {
    id: 8,
    name: "Neptune",
    xRadius: 30.110387,
    zRadius: 30.110387,
    size: 0.24622,
    argPerigee: 44.97135,
    sidereal: 60.182,
    meanAnomoly: 276.336,
    raan: 131.784,
    semiMajorAxis: 30.110387,
    eccentricity: 0.009456,
    inclination: 1.8,
    color: 0x0000FF,
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
