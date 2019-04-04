import React from "react";
import styled from "styled-components";
import Card from "./card";
import Layout from "../Reusable/Layout";
import Media from '../../Assets/Media/media';

import { CottageInfoArray } from "../../Assets/Cottages/";

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


  ${Media.phone`
      margin-top: 100px;
  
  `}
  
`;

const MapCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
