import { RGBFormat } from 'three';
import { color } from 'three/webgpu';
const random = (a, b) => a + Math.random() * b;
const randomInt = (a, b) => Math.floor(random(a, b));
const randomColor = () =>
  `rgb(${randomInt(180, 250)}, ${randomInt(180, 250)}, ${randomInt(180, 250)})`;
var planet="Earth";
 const satelliteData = [
    ...(planet=="Earth" ? (
    [{
      "Planet": "Earth",
      "Satellite": "Moon",
      "Radius": 1737.4
    }] ) : []),
    ...(planet=="Mars" ? (
    [{
      "Planet": "Mars",
      "Satellite": "Phobos",
      "Radius": 11.08
    },
    {
      "Planet": "Mars",
      "Satellite": "Deimos",
      "Radius": 6.2
    }] ) : []),
    ...(planet=="Jupiter" ? (
    [{
      "Planet": "Jupiter",
      "Satellite": "Io",
      "Radius": 1821.49
    },
    {
      "Planet": "Jupiter",
      "Satellite": "Europa",
      "Radius": 1560.8
    },
    {
      "Planet": "Jupiter",
      "Satellite": "Ganymede",
      "Radius": 2631.2
    },
    {
      "Planet": "Jupiter",
      "Satellite": "Callisto",
      "Radius": 2410.3
    },
    {
      "Planet": "Jupiter",
      "Satellite": "Amalthea",
      "Radius": 83.5
    },
    {
      "Planet": "Jupiter",
      "Satellite": "Himalia",
      "Radius": 85
    },
    {
      "Planet": "Jupiter",
      "Satellite": "Thebe",
      "Radius": 49.3
    },
    {
      "Planet": "Jupiter",
      "Satellite": "Adrastea",
      "Radius": 8.2
    },
    {
      "Planet": "Jupiter",
      "Satellite": "Metis",
      "Radius": 21.5
    }] ) : []),
    ...(planet=="Saturn" ? (
    [{
      "Planet": "Saturn",
      "Satellite": "Mimas",
      "Radius": 198.2
    },
    {
      "Planet": "Saturn",
      "Satellite": "Enceladus",
      "Radius": 252.1
    },
    {
      "Planet": "Saturn",
      "Satellite": "Tethys",
      "Radius": 531.1
    },
    {
      "Planet": "Saturn",
      "Satellite": "Dione",
      "Radius": 561.4
    },
    {
      "Planet": "Saturn",
      "Satellite": "Rhea",
      "Radius": 763.5
    },
    {
      "Planet": "Saturn",
      "Satellite": "Titan",
      "Radius": 2574.76
    },
    {
      "Planet": "Saturn",
      "Satellite": "Hyperion",
      "Radius": 135
    },
    {
      "Planet": "Saturn",
      "Satellite": "Iapetus",
      "Radius": 734.3
    },
    {
      "Planet": "Saturn",
      "Satellite": "Phoebe",
      "Radius": 106.5
    },
    {
      "Planet": "Saturn",
      "Satellite": "Janus",
      "Radius": 89.2
    },
    {
      "Planet": "Saturn",
      "Satellite": "Epimetheus",
      "Radius": 58.2
    },
    {
      "Planet": "Saturn",
      "Satellite": "Helene",
      "Radius": 18
    },
    {
      "Planet": "Saturn",
      "Satellite": "Atlas",
      "Radius": 15.1
    },
    {
      "Planet": "Saturn",
      "Satellite": "Prometheus",
      "Radius": 43.1
    },
    {
      "Planet": "Saturn",
      "Satellite": "Pandora",
      "Radius": 40.6
    },
    {
      "Planet": "Saturn",
      "Satellite": "Pan",
      "Radius": 14
    }] ) : []),
    ...(planet=="Uranus" ? (
    [{
      "Planet": "Uranus",
      "Satellite": "Ariel",
      "Radius": 578.9
    },
    {
      "Planet": "Uranus",
      "Satellite": "Umbriel",
      "Radius": 584.7
    },
    {
      "Planet": "Uranus",
      "Satellite": "Titania",
      "Radius": 788.9
    },
    {
      "Planet": "Uranus",
      "Satellite": "Oberon",
      "Radius": 761.4
    },
    {
      "Planet": "Uranus",
      "Satellite": "Miranda",
      "Radius": 235.8
    }] ) : []),
    ...(planet=="Neptune" ? (
    [{
      "Planet": "Neptune",
      "Satellite": "Triton",
      "Radius": 1352.6
    },
    {
      "Planet": "Neptune",
      "Satellite": "Nereid",
      "Radius": 170
    },
    {
      "Planet": "Neptune",
      "Satellite": "Naiad",
      "Radius": 29
    },
    {
      "Planet": "Neptune",
      "Satellite": "Thalassa",
      "Radius": 40
    },
    {
      "Planet": "Neptune",
      "Satellite": "Despina",
      "Radius": 74
    },
    {
      "Planet": "Neptune",
      "Satellite": "Galatea",
      "Radius": 79
    },
    {
      "Planet": "Neptune",
      "Satellite": "Larissa",
      "Radius": 96
    },
    {
      "Planet": "Neptune",
      "Satellite": "Proteus",
      "Radius": 208
    }] ) : []),
    ...(planet=="Pluto" ? (
    [{
      "Planet": "Pluto",
      "Satellite": "Charon",
      "Radius": 606
    },
    {
      "Planet": "Pluto",
      "Satellite": "Nix",
      "Radius": 18
    },
    {
      "Planet": "Pluto",
      "Satellite": "Hydra",
      "Radius": 18.5
    },
    {
      "Planet": "Pluto",
      "Satellite": "Kerberos",
      "Radius": 6
    },
    {
      "Planet": "Pluto",
      "Satellite": "Styx",
      "Radius": 5.2
    }] ) : []),
  ]; 

const totalPlanets = 8;
for (let index = 0; index < satelliteData.length; index++) {
  
  satelliteData.push({
    id: index,
    color: randomColor(),
    xRadius: (index + 1.5) * 60,
    zRadius: (index + 1.5) * 45,
    size: satelliteData[index]["Radius"]/10000
  });
}

export default satelliteData;
