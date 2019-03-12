import React, { Component } from "react";
import "./cover.css";

class NavBar extends Component {
  render() {
    return (
      <div className="cover">
        <div className="cover-container">
          <h1 className="cover-heading">Úthlíð</h1>
        </div>
        <nav>
          <ul>
            <li className="current">
              <a href="index.html">Cottages</a>
            </li>
            <li>
              <a href="index.html">Horse Rental</a>
            </li>
            <li>
              <a href="index.html">Golf</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
