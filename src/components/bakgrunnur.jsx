import React, { Component } from "react";
import "./cover.css";


// Tók myndina í cover.css út því að hún er alltof stór til að vera að refresha með í hvert skipti sem að þú prufar eh.

class Bakgrunnur extends Component {
  render() {
    return (
      <section className="cover">
        <div className="mynd" />
      </section>
    );
  }
}
export default Bakgrunnur;
