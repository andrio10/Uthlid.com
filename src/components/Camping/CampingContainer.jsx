import React from "react";
import styled from "styled-components";
import BlackbarInformation from "../Reusable/BlackbarInformation/BlackbarInformation";
import Header from "../SinglePageCottage/Header";
import Layout from "../Reusable/Layout";
import CampingBackground from "../../Assets/Camping/camping.jpg";

const CampingContainer = () => (
  <Layout>
    <Header CoverPhoto={CampingBackground} />
    <CampingInformation />
  </Layout>
);

export default CampingContainer;

const CampingInformation = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  background-color: transparent;
  justify-content: space-around;
`;
