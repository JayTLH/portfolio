import React, { Component } from "react";

import "./Projects.scss";
import newTab from "../../styles/assets/icons/newTab.png";
import github from "../../styles/assets/icons/github.svg";
import sudoku from "../../styles/assets/images/sudoku.png";
import liquorishHome from "../../styles/assets/images/liquorish-home.png";
import greatestPiano from "../../styles/assets/images/greatest-piano.png";

export default class Projects extends Component {
  projects = () => {
    return (
      [
        {
          name: "Sudoku",
          image: sudoku,
          alt: "sudoku page",
          description: "A Sudoku game that can play on four different difficulties and can provide the solution when prompt. It uses a backtracking algorithm to efficiently solve any grid.",
          stack: "React",
          repo: "https://github.com/JayTLH/sudoku",
          link: "https://sudoku-jay.netlify.app/"
        },
        {
          name: "Liquorish",
          image: liquorishHome,
          alt: "liquorish homepage",
          description: "A catalog of cocktails that lets you to  search, filter, favorite, and upload personalized recipes. You can check the ingredients and instructions on how to mix your own drink.",
          stack: "React, Node.js, Express.js, Multer, MongoDB",
          repo: "https://github.com/JayTLH/liquorish"
        },
        {
          name: "Greatest Piano",
          image: greatestPiano,
          alt: "greatest piano homepage",
          description: "A piano web app that lets you play, record and playback!",
          stack: "React, Node.js, Express.js, Tone.js",
          repo: "https://github.com/JayTLH/pair-programming-jv"
        }
      ]
    )
  }

  render() {
    return (
      <div className="projects" >
        <h1 className="projects__title">Projects</h1>

        {this.projects().map((project, index) => {
          let { name, image, alt, description, stack, repo, link } = project

          if (index % 2 === 0) {
            return (
              <div className="projects__card" key={name}>
                <img className="projects__image" src={image} alt={alt} />
                <div className="projects__info">
                  <div className="projects__text">
                    <h2 className="projects__name">{name}</h2>
                    <p className="projects__description">{description}<br />Stack: {stack}</p>
                  </div>
                  <div className="projects__links">
                    <a className="projects__link" href={repo} target="_blank" rel="noopener noreferrer">
                      <img className="projects__link-icon" src={github} alt="github link" />
                    </a>
                    {link ?
                      <a className="projects__link" href={repo} target="_blank" rel="noopener noreferrer">
                        <img className="projects__link-icon" src={newTab} alt="link to website" />
                      </a> :
                      null
                    }
                  </div>
                </div>
              </div>
            )
          }
          return (
            <div className="projects__card" key={name}>
              <div className="projects__info">
                <div className="projects__text">
                  <h2 className="projects__name">{name}</h2>
                  <p className="projects__description">{description}<br />Stack: {stack}</p>
                </div>
                <div className="projects__links">
                  <a className="projects__link" href={repo} target="_blank" rel="noopener noreferrer">
                    <img className="projects__link-icon" src={github} alt="github link" />
                  </a>
                  {link ?
                    <a className="projects__link" href={repo} target="_blank" rel="noopener noreferrer">
                      <img className="projects__link-icon" src={newTab} alt="link to website" />
                    </a> :
                    null
                  }
                </div>
              </div>
              <img className="projects__image" src={image} alt={alt} />
            </div>
          )
        })}

      </div >
    )
  }
}
