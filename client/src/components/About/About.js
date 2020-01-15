// packages
import React from "react";

// styles & assets
import "./About.scss";
import dragon from "../../styles/assets/images/smoke-dragon-0.png";

export default function About(props) {
  return (
    <div className="about">
      <h1 className="about__title">About</h1>
      <div className="about__info">
        <a className="about__credit" href='https://pngtree.com/so/domineering' target="_blank" rel="noopener noreferrer"><img className="about__image" src={dragon} alt="placeholder" /></a>
        <p className="about__text">Toronto based web developer with a knack for solving problems<br />Constantly seeking new challenges, learning new development technologies<br />Fan of D&D, Critical Role</p>
      </div>
    </div>
  )
}
