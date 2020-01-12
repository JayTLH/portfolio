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
          <p className="projects__description">Liquorish is a cocktail database that helps the user check pricing, ingredients, and instructions to mix their own drinks.</p>
          <div className="projects__links">
            <a className="projects__github" href="https://github.com/JayTLH/liquorish" target="_blank" rel="noopener noreferrer">
              <img className="projects__github-icon" src={github} alt="github link to liquorish repository" />
            </a>
          </div>
        </div>
      </div>
      <div className="projects__card">
        <img className="projects__image" src={greatestPiano} alt="greatest piano homepage" />
        <div className="projects__info">
          <p className="projects__description">Greatest Piano is a cocktail database that helps the user check pricing, ingredients, and instructions to mix their own drinks.</p>
          <div className="projects__links">
            <a className="projects__github" href="https://github.com/JayTLH/pair-programming-jv" target="_blank" rel="noopener noreferrer">
              <img className="projects__github-icon" src={github} alt="github link to greatest piano repository" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
