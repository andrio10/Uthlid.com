import React from "react";
import {Header, Layout, TextContainer} from "../Reusable/";

// Import Assets
import Info from "../../Assets/Camping/index";

const CampingContainer = () => (
  <Layout>
    <Header CoverPhoto={Info.CoverPhoto} />
    <TextContainer {...Info} />
  </Layout>
);

export default CampingContainer;
