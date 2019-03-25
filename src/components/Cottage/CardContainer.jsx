import React from "react";
import styled from "styled-components";
import Card from "./card";
import { CottageInfoArray } from "../../Assets/Cottages/";

const CardContainer = () => (
  <Container>
    <H1> Cottages </H1>
    <MapCardContainer>
      {CottageInfoArray.map(values => {
        return <Card {...values} />;
      })}
    </MapCardContainer>
  </Container>
);

export default CardContainer;

const Container = styled.div`
  height: 80vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
`;

const H1 = styled.h1`
  font-size: 40px;
`;

const MapCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
