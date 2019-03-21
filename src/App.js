import React, { Component } from "react";
import NavBar from "./components/navbar";
import Bakgrunnur from "./components/bakgrunnur";
import "./components/cover.css";
//import Cottages from "./components/cottages";
import CardContainer from "./components/Cottage/CardContainer";
import styled, { createGlobalStyle } from "styled-components";
import SinglePageCottage from "./components/SinglePageCottage/SinglePageCottage";
import HorseRentalContainer from "./components/HorseRental/HorseRentalContainer";



// GlobalStyles er frá Styled-Components, er að nota það til að ákveða font fyrir alla síðuna.
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Raleway', serif !important;
  }
`;
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <NavBar />
        <Bakgrunnur />
        <SinglePageCottage />
      </React.Fragment>
    );
  }
}

export default App;
