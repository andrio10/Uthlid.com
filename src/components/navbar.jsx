import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./cover.css";

class NavBar extends Component {
  render() {
    return (
      <div className="cover">
        <div className="cover-container">
          <Link to="/" className="cover-heading">
            Úthlíð
          </Link>
        </div>
        <nav>
          <ul>
            <li className="current">
              <Link to="/cottages">Cottages</Link>
            </li>
            <li>
              <Link to="/horserental">Horse Rental</Link>
            </li>
            <li>
              <Link to="/golf"> Golf </Link>
            </li>
            <li>
              <Link to="/camping"> Camping</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
