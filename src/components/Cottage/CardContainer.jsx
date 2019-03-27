import React from "react";
import styled from "styled-components";
import Card from "./card";
import { CottageInfoArray } from "../../Assets/Cottages/";
import Layout from "../Reusable/Layout";

const CardContainer = () => (
  <Layout>
    <H1> Cottages </H1>
    <MapCardContainer>
      {CottageInfoArray.map(values => {
        return <Card {...values} />;
      })}
    </MapCardContainer>
  </Layout>
);

export default CardContainer;

const H1 = styled.h1`
  font-size: 40px;
  margin: 30px auto;
`;

const MapCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
