import React from "react";
import styled from "styled-components";
import ContactInfo from "./ContactInfo";
import Map from "./Map";
import Facebook from "./Facebook";
import Colors from "../../../Assets/Variables/Colors";

const RightSidebar = ({ ShowRightBar }) => (
  <Container ShowRightBar={ShowRightBar}>
    <Row>
      <Facebook />
    </Row>
    <Break />
    <Row>
      <Map />
    </Row>
    <Break />
    <Row>
      <ContactInfo />
    </Row>
  </Container>
);

export default RightSidebar;

const Container = styled.div`
  display: flex;
  width: 550px;
  height: 100vh;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  top: 0;
  transition: 0.4s all ease-out;
  right: ${props => (props.ShowRightBar ? `0px` : `-500px`)};
  background-color: ${Colors.BLACK};
`;

const Row = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const Break = styled.div`
  display: flex;
  margin: 0px auto;
  height: 2.5px;
  background-color: ${Colors.GOLD};
  width: 40%;
`;
