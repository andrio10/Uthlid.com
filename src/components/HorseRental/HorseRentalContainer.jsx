import React from "react";
import styled from "styled-components";
import BlackbarInformation from "../Reusable/BlackbarInformation/BlackbarInformation";
import Header from "../SinglePageCottage/Header";
import HorseRentalCard from "./HorseRentalCard";
import Layout from "../Reusable/Layout";
import HorseRentInformation from "../../Assets/HorseRental"; /* Hérna fáum við upplýsingarnar um hverja ferð. 
                                                              Þurfum ekki að gera /index.js því að javascript leitar að henni automatískt. */
import HorseBackground from "../../Assets/HorseRental/k3_9089.jpg";

/*
  Horse Rental Container sýnir þær ferðir sem að boðið er upp á.
 */

const Price = [
  { Title: `.5 hours`, Price: `50` },
  { Title: `1  hours`, Price: `60` },
  { Title: `2  hours`, Price: `100` }
];

const HorseRentalContainer = () => (
  <Layout>
    <Header CoverPhoto={HorseBackground} />
    <BlackbarInformation horseInformation={true} Price={Price} />
    <CardContainer>
      <Row>
      <H1> Trips </H1>
      <HorseInformation>
        {/* Fyrir hverja ferð búum við til HorseRentalCard sem er með upplýsingum um hvern túr. */}
        {HorseRentInformation.map(values => {
          return <HorseRentalCard {...values} />;
        })}
      </HorseInformation>
      </Row>

      <FakeContainer />
    </CardContainer>
  </Layout>
);

export default HorseRentalContainer;

const HorseInformation = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: transparent;
  justify-content: space-around;
`;

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;
const Row = styled.div`
  display:flex;
  height: 100%;
  width: 60%;
  flex-direction: column;
`;

const FakeContainer = styled(HorseInformation)`
  width: 40%;
`;

const H1 = styled.h1`
  margin: 50px auto;
  color: #373737;
`;
