// packages
import React from "react";

// styles & assets
import "./Hero.scss";
import hero from "../../styles/assets/images/d20.png";

export default function Hero(props) {
  return (
    <>
      <div className="hero">
        <div className="hero__text">
          <h1 className="hero__name">JASON TL HUANG</h1>
          <h1 className="hero__title">FULL STACK DEVELOPER</h1>
          <h1 className="hero__slogan">placeholder</h1>
        </div>
        <img className="hero__image" src={hero} alt="d20" />
      </div>
    </>
  )
}
