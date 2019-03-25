import React from "react";
import styled from "styled-components";
import NumberSymbol from "./NumberSymbol";
/*

  Information er ljósbrúni kassinn.
  Þarf að breyta honum aðeins svo að hægt sé að nota hann fyrir Golf og hestaferðir. 
  Ferðin sem að Price, Title fer: Assets -> SinglePageCottage -> BlackbarInfo -> Information.jsx.

*/

const Information = ({ Price, Title, horseInformation }) => (
  <Container>
    <H1>{Title || `Bookings`}</H1>
    {horseInformation ? <Text>PRICELIST</Text> : <Text>PRICES FROM</Text>}
    <NumberSymbol Price={Price} />
    {horseInformation ? (
      <AboutText>
        All trips are great riding tours around the unspoiled and beautiful
        landscape of Úthlíð.
      </AboutText>
    ) : null}
    <EmailContainer>
      <EmailText>Email</EmailText>
      <EmailText fat>uthlid@uthlid.is</EmailText>
    </EmailContainer>
    <EmailContainer>
      <EmailText>Phone</EmailText>
      <EmailText fat>+354 699 5500</EmailText>
    </EmailContainer>
    {horseInformation ? null : <Button>Check Availability</Button>}
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

const EmailText = styled(Text)`
  margin: 0px 20px;
  text-transform: none;
  font-weight: ${props => (props.fat ? `900` : `100`)};
`;

const EmailContainer = styled.div`
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
