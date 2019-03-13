import economyImage from "./img_0028.jpg";
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

const Array = [
  {
    image: `${economyImage}`,
    title: "ECONOMY TWO BEDROOM",
    LargeIcons: [
      { icon: `${sqIcon}`, text: `34` },
      { icon: `${personIcon}`, text: `4-6` },
      { icon: `${bedIcon}`, text: `2` },
      { icon: `${discIcon}`, text: `6` }
    ],
    SmallIcons: [
      { icon: `${wifiIcon}`, toolTip: `WiFi` },
      { icon: `${stereoIcon}`, toolTip: `Stereo` },
      { icon: `${grillIcon}`, toolTip: `Barbecue/Grill` }
    ]
  },
  {
    image: `${oneBedroom}`,
    title: "ONE BEDROOM COTTAGE",
    LargeIcons: [
      { icon: `${sqIcon}`, text: `38` },
      { icon: `${personIcon}`, text: `2` },
      { icon: `${bedIcon}`, text: `1` },
      { icon: `${discIcon}`, text: `4` }
    ],
    SmallIcons: [
      { icon: `${wifiIcon}`, toolTip: `WiFi` },
      { icon: `${stereoIcon}`, toolTip: `Stereo` },
      { icon: `${grillIcon}`, toolTip: `Barbecue/Grill` },
      { icon: `${tvIcon}`, toolTip: `Television` },
      { icon: `${hottubIcon}`, toolTip: `Hot Tub` }
    ]
  },
  {
    image: `${twoBedroom}`,
    title: "TWO BEDROOM COTTAGES",
    LargeIcons: [
      { icon: `${sqIcon}`, text: `50-60` },
      { icon: `${personIcon}`, text: `5-6` },
      { icon: `${bedIcon}`, text: `1` },
      { icon: `${discIcon}`, text: `6` }
    ],
    SmallIcons: [
      { icon: `${wifiIcon}`, toolTip: `WiFi` },
      { icon: `${stereoIcon}`, toolTip: `Stereo` },
      { icon: `${grillIcon}`, toolTip: `Barbecue/Grill` },
      { icon: `${tvIcon}`, toolTip: `Television` },
      { icon: `${hottubIcon}`, toolTip: `Hot Tub` },
      { icon: `${MicrowaveIcon}`, toolTip: `Microwave` }
    ]
  },
  {
    image: `${fourBedroom}`,
    title: "FOUR BEDROOM COTTAGES",
    LargeIcons: [
      { icon: `${sqIcon}`, text: `130` },
      { icon: `${personIcon}`, text: `8` },
      { icon: `${bedIcon}`, text: `4` },
      { icon: `${discIcon}`, text: `8` }
    ],
    SmallIcons: [
      { icon: `${wifiIcon}`, toolTip: `WiFi` },
      { icon: `${stereoIcon}`, toolTip: `Stereo` },
      { icon: `${grillIcon}`, toolTip: `Barbecue/Grill` },
      { icon: `${tvIcon}`, toolTip: `Television` },
      { icon: `${hottubIcon}`, toolTip: `Hot Tub` },
      { icon: `${MicrowaveIcon}`, toolTip: `Microwave` }
    ]
  }
];

export default Array;
