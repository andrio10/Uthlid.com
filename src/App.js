import React, { Component } from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import styled, { createGlobalStyle } from "styled-components";

// Components
import {
  CardContainer,
  SinglePageCottage,
  HorseRentalContainer,
  Golf,
  Container,
  Sidebar,
  Camping,
  Restaurant
} from "./components";
import { Colors } from "./Assets/Variables";

// GlobalStyles er frá Styled-Components, er að nota það til að ákveða font fyrir alla síðuna.
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Raleway', serif !important;
    background-color: ${Colors.WHITE}!important;
    height: 100%;
    position: relative;
    overflow-x: hidden;
  }
`;
function mapStyles(styles) {
  return {
    opacity: styles.opacity
  };
}
class App extends Component {
  render() {
    return (
      <AppContainer>
        <GlobalStyles />
        <Sidebar Position={`left`} />
        <Sidebar Position={`right`} />

        <Animate
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          mapStyles={mapStyles}
        >
          <Route path="/cottages/:id" component={SinglePageCottage} />
          <Route exact={true} path="/cottages" component={CardContainer} />
          <Route path="/horserental" component={HorseRentalContainer} />
          <Route path="/golf" component={Golf} />
          <Route path="/camping" component={Camping} />
          <Route path="/restaurant" component={Restaurant} />
          <Route exact={true} path="/" component={Container} />
        </Animate>
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
`;

const Animate = styled(AnimatedSwitch)`
  position: relative;

  & > div {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
`;
