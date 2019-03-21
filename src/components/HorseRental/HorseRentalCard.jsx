import React from "react";
import styled from "styled-components";


//Hver túr fær sitt eigið card.

const HorseRentalCard = ({ Title, Price, Info, BackgroundImg }) => (
  <Container CardImage={BackgroundImg}>
    <InformationContainer>
      <TitleInfo>
        <CardTitle>{Title}</CardTitle>
        <CardPrice>€{Price}</CardPrice>
      </TitleInfo>
      <TextInformation>{Info}</TextInformation>
    </InformationContainer>
    <BackgroundOpacity />
  </Container>
);
export default HorseRentalCard;
const Container = styled.div`
  height: 300px;
  width: 400px;
  display: flex;
  background-color: white;
  border-radius: 15px;
  background-image: url(${props => props.CardImage});
  background-position: center;
  color: #c0b283;
  position: relative;
  overflow: hidden;
  z-index: 50;
  margin: 20px;
`;
const BackgroundOpacity = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(55, 55, 55, 0.3);
  z-index: 1;
  transition: all 1s ease;
  ${Container}:hover & {
    background-color: rgba(55, 55, 55, 0.8);
  }
`;

const CardTitle = styled.h4`
  text-transform: uppercase;
  letter-spacing: -1px;
  font-weight: 800;
`;

const CardPrice = styled.h5`
  font-weight: 800;
`;
const TextInformation = styled.h5`
  font-weight: 800;
  font-size: 18px;
  z-index: 2;
`;
const TitleInfo = styled.div`
  z-index: 2;
`;
const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 20px;
  justify-content: space-between;
  height: 100%;
  transition: all 1s ease;
  margin-top: 200px;
  ${Container}:hover & {
    margin-top: 0px;
  }
`;
