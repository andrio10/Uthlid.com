import React, { Component } from "react";
import NavBar from "./components/navbar";
import Cottages from "./components/cottages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
      </React.Fragment>
    );
  }
}

export default App;
