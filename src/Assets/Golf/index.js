import CoverPhoto from "./img_4335.jpg";

// SVG IMPORT
import golf from "./svg/001-golf.svg";
import yellowTees from './svg/005-tee.svg';
import redTees from './svg/006-tee.svg';
import open from './svg/004-open.svg';


const BlackbarInfo = [
  { Icon: `${golf}`, Text: `Par 35` },
  { Icon: `${yellowTees}`, Text: `2470m` },
  { Icon: `${redTees}`, Text: `2118m` },
  { Icon: `${open}`, Text: `June Sept` }
];

const TextInformation = [
  {
    Title: `Information`,
    Text: `In Uthlid is a nine hole golf course open in the summer time usually from the end of May to the beginning of October.  The course is par 35,  2470 meters on yellow tees and 2118 on red tees.`
  },
  {
    Title: `Golf Course`,
    Text: `The golf course is friendly and easy to play but nevertheless provides a challenge for all level of golfers.`
  },
  {
    Title: `Available for Rent`
  }
];

const Includes = [`Golf Clubs`, `Trolleys`, `Buggies`];

const Info = {
  CoverPhoto,
  TextInformation,
  Includes,
  BlackbarInfo
};

export default Info;
