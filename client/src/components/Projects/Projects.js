// packages
import React from "react";

// styles & assets
import "./Projects.scss";
import github from "../../styles/assets/icons/github.svg"
import liquorishHome from "../../styles/assets/images/liquorish-home.png";
import greatestPiano from "../../styles/assets/images/greatest-piano.png";

export default function Projects(props) {
  return (
    <div className="projects">
      <h1 className="projects__title">Projects</h1>
      <div className="projects__card">
        <img className="projects__image" src={liquorishHome} alt="liquorish homepage" />
        <div className="projects__info">
          <div className="projects__text">
            <h2 className="projects__name">Liquorish</h2>
            <p className="projects__description">A catalog of cocktails that lets you to  search, filter, favorite, and upload personalized recipes. You can check pricing, ingredients, and instructions on how to mix your own drink.<br/>React, Node.js, Express.js, Multer, MongoDB</p>
          </div>
          <div className="projects__links">
            <a className="projects__github" href="https://github.com/JayTLH/liquorish" target="_blank" rel="noopener noreferrer">
              <img className="projects__github-icon" src={github} alt="github link to liquorish repository" />
            </a>
          </div>
        </div>
      </div>
      <div className="projects__card">
        <div className="projects__info">
          <div className="projects__text">
            <h2 className="projects__name">Greatest Piano</h2>
            <p className="projects__description">A piano web app that lets you play, record and playback!<br/>React, Node.js, Express.js, Tone.js</p>
          </div>
          <div className="projects__links">
            <a className="projects__github" href="https://github.com/JayTLH/pair-programming-jv" target="_blank" rel="noopener noreferrer">
              <img className="projects__github-icon" src={github} alt="github link to greatest piano repository" />
            </a>
          </div>
        </div>
        <img className="projects__image" src={greatestPiano} alt="greatest piano homepage" />
      </div>
    </div>
  )
}
