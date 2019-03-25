import React, { Component } from "react";
import BackgroundImg from '../Assets/MainSite/coverphoto.jpg';
import "./cover.css";


// Tók myndina í cover.css út því að hún er alltof stór til að vera að refresha í hvert skipti sem að þú prufar eh.

class Bakgrunnur extends Component {
  render() {
    return (
      <section className="Bakgrunnur">
        <img src={BackgroundImg} />
      </section>
    );
  }
}
export default Bakgrunnur;
