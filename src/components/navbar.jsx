import React, { Component } from "react";
import {Link} from 'react-router-dom';
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
              <Link to="/cottages">Cottages</Link>
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
