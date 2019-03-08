import React, { Component } from "react";
import NavBar from "./components/navbar";
import Cottages from "./components/cottages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <NavBar />
        </div>
        <div className="container">
          <Cottages />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
