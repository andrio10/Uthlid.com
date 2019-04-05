import React from "react";
import styled from "styled-components";

// Assets
import { Media, MediaHeight } from "../../../Assets/Variables/";

const FacebookPage = () => (
  <Container
    className="fb-page"
    data-href="https://www.facebook.com/Uthlid-Iceland-Cottages-312270718970655/"
  >
    <blockquote
      cite="https://www.facebook.com/Uthlid-Iceland-Cottages-312270718970655/"
      className="fb-xfbml-parse-ignore"
    />
  </Container>
);

export default FacebookPage;

const Container = styled.div`
  display: flex;
  width: 320px;
  height: 200px;
  z-index: 501;
  ${Media.tablet`display: none !important;`};
  ${MediaHeight.phone`display: none !important;`};
`;
