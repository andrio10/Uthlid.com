import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import "./components/cover.css";
import CardContainer from "./components/Cottage/CardContainer";
import styled, { createGlobalStyle } from "styled-components";
import SinglePageCottage from "./components/SinglePageCottage/SinglePageCottage";
import HorseRentalContainer from "./components/HorseRental/HorseRentalContainer";
import Golf from "./components/Golf/Golf";

import Container from "./components/LoadingSite/Container";
import Sidebar from "./components/Sidebar/Container";
import Camping from "./components/Camping/CampingContainer";
import Restaurant from "./components/Restaurant/RestaurantContainer";

// GlobalStyles er frá Styled-Components, er að nota það til að ákveða font fyrir alla síðuna.
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Raleway', serif !important;
    background-color: #F4F4F4!important;
    height: 100%;
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
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
          atEnter={{opacity: 0}}
          atLeave={{opacity: 0}}
          atActive={{opacity: 1 }}
          mapStyles={mapStyles}
        >
          {/* Nauðsynlegt að hafa path=/ neðst, annars fer React-Router alltaf á fyrstu heimasíðuna */}

          <Route
            exact={true}
            path="/cottages/:id"
            component={SinglePageCottage}
          />
          <Route exact={true} path="/cottages" component={CardContainer} />
          <Route path="/horserental" component={HorseRentalContainer} />
          <Route path="/golf" component={Golf} />

          <Route path="/camping" component={Camping} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/" component={Container} />
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
