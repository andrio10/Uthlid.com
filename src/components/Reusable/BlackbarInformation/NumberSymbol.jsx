import React from "react";
import styled from "styled-components";

/* Ef að Price er Array, sem er tilvikið fyrir HorseRental þá loopum við yfir það. */
/* Ef að Price er stök tala setjum við það beint inn. Sem er tilvikið fyrir Cottages*/
const NumberSymbol = ({ Price, golf }) => (
  <Container>
    <TextContainer>
      {Array.isArray(Price) ? (
        Price.map(values => {
          return (
            <Row>
              <h5> {values.Title} </h5>
              <Number small>
                {values.Price} {golf ? "" : "€"}{" "}
              </Number>
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
