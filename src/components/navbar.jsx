import React, { Component } from "react";
import "./cover.css";

class NavBar extends Component {
  render() {
    return (
      <div className="cover">
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">
                Úthlíð
              </a>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Cottages <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Camping
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Restaurant
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Horse Rental
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Golf
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
