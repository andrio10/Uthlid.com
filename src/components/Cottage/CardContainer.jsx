import React from "react";
import styled from "styled-components";
import Card from "./card";
import {CottageInfoArray} from "../../Assets/Cottages/";

const CardContainer = () => (
  <Container>
    {CottageInfoArray.map(values => {
      return <Card {...values} />;
    })}
  </Container>
);

export default CardContainer;

const Container = styled.div`
  height: 80vh;
  width: 70vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: auto;
`;
