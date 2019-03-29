import React from "react";
import styled from "styled-components";
import BlackbarInformation from "../Reusable/BlackbarInformation/BlackbarInformation";
import Header from "../SinglePageCottage/Header";
import Layout from "../Reusable/Layout";
import TextContainer from "../SinglePageCottage/TextContainer";

// Import Assets
import Info from "../../Assets/Restaurant/index";

const RestaurantContainer = () => (
  <Layout>
    <Header CoverPhoto={Info.CoverPhoto} />
    <TextContainer {...Info} />
  </Layout>
);

export default RestaurantContainer;
