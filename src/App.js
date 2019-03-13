import React, { Component } from "react";
import NavBar from "./components/navbar";
import Bakgrunnur from "./components/bakgrunnur";
import "./components/cover.css";
//import Cottages from "./components/cottages";
import CardContainer from './components/Cottage/CardContainer';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Bakgrunnur />
        <CardContainer />
      </React.Fragment>
    );
  }
}

export default App;
