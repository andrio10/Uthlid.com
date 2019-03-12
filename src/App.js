import React, { Component } from "react";
import NavBar from "./components/navbar";
import Bakgrunnur from "./components/bakgrunnur";
import "./components/cover.css";
import Cottages from "./components/cottages";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Bakgrunnur />
        <Cottages />
      </React.Fragment>
    );
  }
}

export default App;
