import React from "react";
import styled from "styled-components";

const NumberSymbol = ({ Price }) => (
  <Container>
    <TextContainer>
    {/* Ef að Price er Array, sem er tilvikið fyrir HorseRental þá loopum við yfir það. */}
    {/* Ef að Price er stök tala setjum við það beint inn. Sem er tilvikið fyrir Cottages*/}
      {Array.isArray(Price) ? (
        Price.map(values => {
          return (
            <Row>
              <Text> {values.Title} </Text>
              <Number small> {values.Price}€ </Number>
            </Row>
          );
        })
      ) : (
        <Row center>
          <Number> {Price} </Number>
          <Symbol>€</Symbol>
        </Row>
      )}
    </TextContainer>
  </Container>
);

export default NumberSymbol;

const Container = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Number = styled.h3`
  font-size: ${props => (props.small ? "20" : "60")}px;
  font-weight: 900;
`;

const Symbol = styled(Number)`
  font-weight: 100;
  margin: 10px;
  font-size: ${props => (props.small ? "20" : "40")}px;
`;

const Text = styled.h5``;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${props => (props.center ? "center" : "space-around")};
`;
