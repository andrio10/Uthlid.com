import React from "react";
import styled from 'styled-components';

// Breidd síðunar svo að hún er jöfn yfir allar undirsíður.
const Layout = props => <Container>{props.children}</Container>;

export default Layout;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 75vw;
  margin: 30px auto;
`;
