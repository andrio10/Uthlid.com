import React from "react";
import styled from "styled-components";

// Assets
import { Colors, Media, MediaHeight } from "../../../Assets/Variables/";

const ContactInfo = () => (
  <Container>
    <h1> Contact Info </h1>
    <h5> Úthlíð Travel Service </h5>
    <h5> Úthlíð, 801 Selfoss, Iceland </h5>
    <h5> Email: uthlid@uthlid.is</h5>
    <h5> Phone +354 699 5500</h5>
  </Container>
);

export default ContactInfo;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${Colors.GOLD};
  background-color: inherit;

  & > h1 {
    ${Media.tablet`font-size: 17px;`}
    ${MediaHeight.phone`font-size: 17px;`};
  }

  & > h5 {
    ${Media.tablet`font-size: 10px;`}
    ${MediaHeight.phone`font-size: 10px;`};
  }
`;
