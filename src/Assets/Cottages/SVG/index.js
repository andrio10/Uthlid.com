/*

  Ef að við ætlum að kalla á þetta þurfum við bara að gera "Assets/Cottages/SVG" en ekki "Assets/Cottages/SVG/index.js"
  Þar sem að Javascript leitar alltaf fyrst af index.js í hverjum folder'i þá kalla ég þennan file index.js.
  Í öðru lagi er snyrtilegra að fá bara object sem er með öllum icon í stað þess að kalla á þau oft á mismunandi stöðum.

*/


import economyImage from "./img_0028_wide.jpg";
import oneBedroom from "./img_0021.jpg";
import twoBedroom from "./img_0011n.jpg";
import fourBedroom from "./img_8064.jpg";
import sqIcon from "./m2.svg";
import personIcon from "./persons.svg";
import bedIcon from "./bed.svg";
import MicrowaveIcon from "./microw.svg";
import discIcon from "./disks.svg";
import grillIcon from "./grill.svg";
import stereoIcon from "./stereo.svg";
import wifiIcon from "./wifi.svg";
import tvIcon from "./tv.svg";
import hottubIcon from "./hottub.svg";

const IconPackage = {
  economyImage,
  oneBedroom,
  twoBedroom,
  fourBedroom,
  sqIcon,
  personIcon,
  bedIcon,
  MicrowaveIcon,
  discIcon,
  grillIcon,
  stereoIcon,
  wifiIcon,
  tvIcon,
  hottubIcon
};

export default IconPackage;


