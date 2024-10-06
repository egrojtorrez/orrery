const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
  `rgb(${randomInt(180, 250)}, ${randomInt(180, 250)}, ${randomInt(180, 250)})`;

const planetData = [
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
const totalPlanets = 8;
for (let index = 0; index < totalPlanets; index++) {
  planetData.push({
    id: index,
    color: randomColor(),
    xRadius: (index + 1.5) * 60,
    zRadius: (index + 1.5) * 45,
    size: planetData[index]["Radius"]/5000
  });
}

export default planetData;
