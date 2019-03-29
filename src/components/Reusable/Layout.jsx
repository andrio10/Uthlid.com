import React from "react";
import styled from 'styled-components';

// Breidd síðunar svo að hún er jöfn yfir allar undirsíður.
const Layout = props => <Container myColor = {props.myColor}>{props.children}</Container>;

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 75vw;
  padding-bottom: 30px;
  margin: 0px auto;
  background-color: ${props => props.myColor ? props.myColor : "white!important" };
`;
