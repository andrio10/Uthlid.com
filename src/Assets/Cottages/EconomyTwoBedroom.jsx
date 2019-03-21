import IconPackage from "./SVG"; // Fæ öll icon og myndir héðan.


const Title = `ECONOMY TWO BEDROOM`;
const Price = `138`;
const CoverPhoto = IconPackage.economyImage;

const BlackbarInfo = [
  { Icon: `${IconPackage.sqIcon}`, Text: `34` },
  { Icon: `${IconPackage.personIcon}`, Text: `4-6` },
  { Icon: `${IconPackage.discIcon}`, Text: `6` },
  { Icon: `${IconPackage.bedIcon}`, Text: `2` }
];

const TextInformation = [
  {
    Title: `Description`,
    Text: `Cozy cottage that houses 4-6 people. The cottage has two bedrooms each equipped with a queen size bed, pillows and comforters. The living room in the middle of the cottage can easily be converted into sleeping quarters for 2 kids or juniors. The living room includes a studio couch, wifi and a stereo. The adjacent kitchen is fully equipped, includes tableware for 6 people and comes with a coal barbecue grill.`
  }
];

const Includes = [
  `WiFi`,
  `Coal Barbecue Grill`,
  `Fully Equipped Kitchen`,
  `Stereo`
];

const SmallIcons = [
  { icon: `${IconPackage.wifiIcon}`, toolTip: `WiFi` },
  { icon: `${IconPackage.stereoIcon}`, toolTip: `Stereo` },
  { icon: `${IconPackage.grillIcon}`, toolTip: `Barbecue/Grill` }
];


// Allt info fyrir þennan Cottage er export'að hér. Engin þörf að kalla annað til að fá upplýsingar eða icon um hann.
const Info = {
  Title,
  Price,
  CoverPhoto,
  BlackbarInfo,
  TextInformation,
  Includes,
  SmallIcons
};
export default Info;
