import React from "react";

import Layout from "../Reusable/Layout";
import Card from "./Card";
import Bakgrunnur from "../bakgrunnur";

// Sækja myndir úr Assets fyrir hverja röð.
import CottagesImage from "../../Assets/Cottages/SVG/img_0021_middle.jpg";
import GolfImage from "../../Assets/Golf/img_4335_small.jpg";
import HorseRentalImage from "../../Assets/HorseRental/k3_9089_small.jpg";
import CampingImage from "../../Assets/Camping/orginal.jpg";
import RestaurantImage from "../../Assets/Restaurant/img_2546_small.jpg";

const RowInformation = [
  {
    Title: `Cottages`,
    Paragraph: `From this place is possible to visit the most popular tourist attractions in South and West Iceland within a day.`,
    Image: `${CottagesImage}`,
    Path: `/Cottages`
  },
  {
    Title: `Horse Rental`,
    Paragraph: `Skúmur, Svali, Blesi, Loki and the other horses in Úthlíð welcome all tourist to our Horse rental`,
    Image: `${HorseRentalImage}`,
    Path: `/Horserental`
  },
  {
    Title: `GOLF`,
    Paragraph: `In Uthlid is a nine hole golf course open in the summer time usually from the end of May to the beginning of October.  The course is par 35,  2470 meters on yellow tees and 2118 on red tees.`,
    Image: `${GolfImage}`,
    Path: `/Golf`
  },
  {
    Title: `Camping`,
    Paragraph: `The camping site in Uthlid is well located close to the main road and in walking distance from the restaurant, swimming pool and golf course.`,
    Image: `${CampingImage}`,
    Path: `/Camping`
  },
  {
    Title: `Restaurant`,
    Paragraph: `The restaurant Réttin is open from 16 – 20pm all days of the year except special holidays. We have a reasonable priced simple food and our guests can either sit inside or take-away to their cottages.`,
    Image: `${RestaurantImage}`,
    Path: `/Restaurant`
  }
];

const LoadingSiteContainer = () => (
  <>
  <Bakgrunnur />
    <Layout myColor={`transparent`}>
      {/* Ef að röð er slétt tala kemur svartur bakgrunnur, ef að það er oddatala verður hann hvítur. */}
      {RowInformation.map((values, index) => {
        if (index % 2 === 0) {
          return <Card {...values} Backgroundcolor />;
        } else {
          return <Card {...values} />;
        }
      })}
    </Layout>
  </>
);

export default LoadingSiteContainer;
