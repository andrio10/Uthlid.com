import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Bakgrunnur from "./components/bakgrunnur";
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
  }
`;
class App extends Component {
  render() {
    return (
      <AppContainer>
        <GlobalStyles />
        {/* <NavBar /> */}
        <Sidebar Position={`left`} />
        <Sidebar Position={`right`} />
        <Switch>
          {/* Nauðsynlegt að hafa path=/ neðst, annars fer React-Router alltaf á fyrstu heimasíðuna */}

          <Route path="/cottages/:id" component={SinglePageCottage} />
          <Route path="/cottages" component={CardContainer} />
          <Route path="/horserental" component={HorseRentalContainer} />
          <Route path="/golf" component={Golf} />

          <Route path="/camping" component={Camping} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/" component={Container} />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
`;
