import React from "react";
import styled from "styled-components";

// Components
import HorseRentalCard from "./HorseRentalCard"
import {Layout, Header, BlackbarInformation} from '../Reusable';

// Assets
import {Colors, Media} from "../../Assets/Variables/";
import {Price, HorseBackground, HorseRentInformation} from '../../Assets/HorseRental';


/*
  Horse Rental Container sýnir þær ferðir sem að boðið er upp á.
*/

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
  display: flex;
  height: 100%;
  width: 60%;
  flex-direction: column;
  ${Media.desktop`width: 100vw;`};
`;

const FakeContainer = styled(HorseInformation)`
  width: 40%;
  ${Media.desktop`display: none;`};
`;

const H1 = styled.h1`
  margin: 50px auto;
  color: ${Colors.BLACK};
`;
