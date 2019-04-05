import BruararskordImg from "./Bruararskord.jpg";
import BruarfossImg from "./Bruarfoss.jpg";
import HestaleigaImg from "./hestaleiga_uthlid.jpg";
import KolgrimshollImg from "./Kolgrimsholl.jpg";
import HorseBackground from "./k3_9089.jpg";
/*

  Allar upplýsingar sem að við ætlum að nota í HorseRental fara hingað inn. Myndir ásamt texta.

*/
const Price = [
  { Title: `.5 hours`, Price: `50` },
  { Title: `1  hours`, Price: `60` },
  { Title: `2  hours`, Price: `100` }
];


const HorseRentInformation = [
  {
    Title: `Kolgrímshóll`,
    Price: `120`,
    Info: `Riding tour to the mountains, ended on small hill, Kolgrímshóll – “Coal man-hill”.
    We hike to the top of the hill.`,
    BackgroundImg: `${KolgrimshollImg}`
  },
  {
    Title: `Miðfellshringur`,
    Price: `120`,
    Info: `About three hour trip
  around the mountain Miðfell.`,
  BackgroundImg: `${HestaleigaImg}`
  },
  {
    Title: `Brúarárskörð`,
    Price: `170`,
    Info: `One day trip to the beautiful canyon
  Brúarárskörð. Riding to the canyon around
  unspoiled nature of Úthlíð, stop once
  on the road to the canyon.`,
  BackgroundImg: `${BruararskordImg}`
  },
  {
    Title: `Brúarfoss`,
    Price: `120`,
    Info: `Approximately 3 hour trip
  to the waterfall Brúarárfoss.`,
  BackgroundImg: `${BruarfossImg}`
  }
];

export {
  Price,
  HorseBackground,
  HorseRentInformation
}
