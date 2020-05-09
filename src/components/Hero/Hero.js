import React, { Component } from "react";

import "./Hero.scss";
import hero from "../../styles/assets/images/d20.png";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__name">JASON TL HUANG</h1>
          <h1 className="hero__slogan"><span className="hero__slogan--bolder">FULL STACK DEVELOPER</span><br />TEACHER<br />MUSICIAN</h1>
        </div>
        <img className="hero__image" src={hero} alt="d20" />
      </div>
    )
  }
}
