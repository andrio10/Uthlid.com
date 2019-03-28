import React from "react";
import styled from "styled-components";
import ContactInfo from "./ContactInfo";
import Map from './Map';
import Facebook from "./Facebook";


const RightSidebar = () => (
  <Container>
    <Row> <Facebook /> </Row>
    <Break />
    <Row> <Map /> </Row>
    <Break />
    <Row>
      <ContactInfo />
    </Row>
  </Container>
);

export default RightSidebar;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
  background-color: ${props => (props.color ? props.color : "transparent")};
  overflow: hidden;
  justify-content: center;
  align-items: center;

`;

const Break = styled.div`
  display: flex;
  margin: 0px auto;
  height: 2.5px;
  background-color: #c0b283;
  width: 80%;
`;
