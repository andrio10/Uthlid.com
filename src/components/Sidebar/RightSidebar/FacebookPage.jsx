import React from "react";
import styled from "styled-components";

const FacebookPage = () => (
  <Container
    className="fb-page"
    data-href="https://www.facebook.com/Uthlid-Iceland-Cottages-312270718970655/"
  >
    <blockquote
      cite="https://www.facebook.com/Uthlid-Iceland-Cottages-312270718970655/"
      class="fb-xfbml-parse-ignore"
    >
      <a href="https://www.facebook.com/Uthlid-Iceland-Cottages-312270718970655/">
        Uthlid Iceland Cottages
      </a>
    </blockquote>
  </Container>
);

export default FacebookPage;

const Container = styled.div`
  display: flex;
  width: 320px;
  height: 200px;
`;
