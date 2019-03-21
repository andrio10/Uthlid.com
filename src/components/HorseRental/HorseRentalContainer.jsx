import React from "react";
import styled from "styled-components";
import BlackbarInformation from "../Reusable/BlackbarInformation/BlackbarInformation";
import Header from "../SinglePageCottage/Header";
import HorseRentalCard from "./HorseRentalCard";
import HorseRentInformation from "../../Assets/HorseRental"; /* Hérna fáum við upplýsingarnar um hverja ferð. 
                                                              Þurfum ekki að gera /index.js því að javascript leitar að henni automatískt. */

/*

  Horse Rental Container sýnir þær ferðir sem að boðið er upp á.

*/

const HorseRentalContainer = () => (
  <Container>
    <Header />
    <BlackbarInformation />
    <CardContainer>
      <HorseInformation>
        {/* Fyrir hverja ferð búum við til HorseRentalCard sem er með upplýsingum um hvern túr. */}
        {HorseRentInformation.map(values => {
          return <HorseRentalCard {...values} />;
        })}
      </HorseInformation>
      <FakeContainer />
    </CardContainer>
  </Container>
);

export default HorseRentalContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 80vw;
  margin: 5px auto;
  flex-direction: column;
`;

const HorseInformation = styled.div`
  height: 100%;
  width: 60%;
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

const FakeContainer = styled(HorseInformation)`
  width: 40%;
`;
