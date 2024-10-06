const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
  `rgb(${randomInt(180, 250)}, ${randomInt(180, 250)}, ${randomInt(180, 250)})`;

const planets = [
  {
    "Planet": "Mercury",
    "Radius": 2439.4
  },
  {
    "Planet": "Venus",
    "Radius": 6051.8
  },
  {
    "Planet": "Earth",
    "Radius": 6371.0084
  },
  {
    "Planet": "Mars",
    "Radius": 3389.5
  },
  {
    "Planet": "Jupiter",
    "Radius": 69911
  },
  {
    "Planet": "Saturn",
    "Radius": 58232
  },
  {
    "Planet": "Uranus",
    "Radius": 25362
  },
  {
    "Planet": "Neptune",
    "Radius": 24622
  }
];

const planetData = [];
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
for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    xRadius: (index + 1.5) * 600,
    zRadius: (index + 1.5) * 450,
    size: planets[index]["Radius"]/(2000*(index+1)),
    modelUrl: models[index], 
  });
}

export default planetData;
