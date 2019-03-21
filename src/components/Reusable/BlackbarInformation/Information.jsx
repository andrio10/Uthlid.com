import React from "react";
import styled from "styled-components";

/*

  Information er ljósbrúni kassinn.
  Þarf að breyta honum aðeins svo að hægt sé að nota hann fyrir Golf og hestaferðir. 
  Ferðin sem að Price, Title fer: Assets -> SinglePageCottage -> BlackbarInfo -> Information.jsx.

*/



const Information = ({Price, Title}) => (
  <Container>
    <H1>{Title}</H1>
    <Text>PRICES FROM</Text>
    <NumberSymbol>
      <Number> {Price} </Number>
      <Symbol>€</Symbol>
    </NumberSymbol>
    <EmailContainer>
      <EmailText>Email</EmailText>
      <EmailText fat>uthlid@uthlid.is</EmailText>
    </EmailContainer>
    <EmailContainer>
      <EmailText>Phone</EmailText>
      <EmailText fat>+354 699 5500</EmailText>
    </EmailContainer>
    <Button>Check Availability</Button>
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
`;

const Text = styled.h3`
  font-size: 26px;
  letter-spacing: -1px;
  font-weight: 100;
  display: flex;
  margin: 10px auto;
  text-transform: uppercase;
`;

const NumberSymbol = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const Number = styled.h3`
  font-size: 60px;
  font-weight: 600;
`;

const Symbol = styled(Number)`
  font-weight: 100;
  margin: 10px;
  font-size: 40px;
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
`;
