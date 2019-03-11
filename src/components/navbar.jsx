import React, { Component } from "react";
import "./cover.css";

class NavBar extends Component {
  render() {
    return (
      <div className="mynd">
        <div className="cover">
          <div className="cover-container">
            <main role="main" className="inner cover">
              <h1 className="cover-heading">Úthlíð</h1>
              <p className="lead">
                Uthlid is a travel service center in largely unspoiled Icelandic
                landscape. It is centrally located in the Golden Circle, close
                to most key locations, only a 90 min drive from Reykjavik, 25
                min from the national park of Thingvellir, 10 min from the
                famous Geysir hot springs and only 15 min from the Gullfoss
                waterfall. You can see the location on map on the bottom of this
                page.
              </p>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
