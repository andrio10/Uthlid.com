import React from "react";
import styled from "styled-components";
import NumberSymbol from "./NumberSymbol";
import ContactInfo from "./contactInfo";
/*

  Information er ljósbrúni kassinn.
  Þarf að breyta honum aðeins svo að hægt sé að nota hann fyrir Golf og hestaferðir. 
  Ferðin sem að Price, Title fer: Assets -> SinglePageCottage -> BlackbarInfo -> Information.jsx.

*/

const Information = ({
  Price,
  Title,
  horseInformation,
  InformationBoxPrice,
  golf
}) => (
  <Container>
    <H1>{Title || `Bookings`}</H1>
    {InformationBoxPrice ? (
      <Text>{InformationBoxPrice}</Text>
    ) : (
      <Text>Pricelist</Text>
    )}
    <NumberSymbol Price={Price} />
    {horseInformation ? (
      <AboutText>
        All trips are great riding tours around the unspoiled and beautiful
        landscape of Úthlíð.
      </AboutText>
    ) : null}
    {golf ? (
      <AboutText>
        Members of the Icelandic Golf Union can book tee times at www.golf.is
      </AboutText>
    ) : null}
    <ContactInfo />
    {horseInformation || golf ? null : <Button>Check Availability</Button>}
  </Container>
);
export default Information;
const Container = styled.div`
  display: flex;
  height: 500px;
  width: 500px;
  background-color: #c0b283;
  align-self: center;
  flex-direction: column;
  margin-top: 100px;
  justify-content: space-around;
  color: #373737;
  z-index: 5;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 28px;
  letter-spacing: -2px;
  margin: 10px auto;
  display: flex;
  font-weight: 900;
  text-transform: uppercase;
`;

const Text = styled.h3`
  font-size: 20px;
  letter-spacing: -1px;
  font-weight: 100;
  display: flex;
  margin: 0px auto;
  text-transform: uppercase;
`;

const AboutText = styled.h5`
  width: 80%;
  font-weight: 300;
  margin: 0px;
  padding: 0px;
`;

const Button = styled.button`
  background-color: #373737;
  color: white;
  height: 60px;
  font-size: 18px;
  font-weight: 100;
  width: 80%;
  display: flex;
  justify-content: center;
  border: none;
  text-transform: uppercase;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
  }
`;
