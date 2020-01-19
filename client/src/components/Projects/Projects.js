// packages
import React from "react";

// styles & assets
import "./Projects.scss";
import github from "../../styles/assets/icons/github.svg"
import liquorishHome from "../../styles/assets/images/liquorish-home.png";
import greatestPiano from "../../styles/assets/images/greatest-piano.png";

export default function Projects(props) {
  const projects = [
    {
      name: "Liquorish",
      image: liquorishHome,
      alt: "liquorish homepage",
      description: "A catalog of cocktails that lets you to  search, filter, favorite, and upload personalized recipes. You can check pricing, ingredients, and instructions on how to mix your own drink.",
      stack: "React, Node.js, Express.js, Multer, MongoDB",
      href: "https://github.com/JayTLH/liquorish"
    },
    {
      name: "Greatest Piano",
      image: greatestPiano,
      alt: "greatest piano homepage",
      description: "A piano web app that lets you play, record and playback!",
      stack: "React, Node.js, Express.js, Tone.js",
      link: "https://github.com/JayTLH/pair-programming-jv"
    }
  ]

  return (
    <div className="projects">
      <h1 className="projects__title">Projects</h1>

      {projects.map((project, index) => {
        let { name, image, alt, description, stack, link } = project

        if (index % 2 === 0) {
          return (
            <div className="projects__card" key={name}>
              <img className="projects__image" src={image} alt={alt} />
              <div className="projects__info">
                <div className="projects__text">
                  <h2 className="projects__name">{name}</h2>
                  <p className="projects__description">{description}<br />{stack}</p>
                </div>
                <div className="projects__links">
                  <a className="projects__github" href={link} target="_blank" rel="noopener noreferrer">
                    <img className="projects__github-icon" src={github} alt="github link to greatest piano repository" />
                  </a>
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
                <p className="projects__description">{description}<br />{stack}</p>
              </div>
              <div className="projects__links">
                <a className="projects__github" href={link} target="_blank" rel="noopener noreferrer">
                  <img className="projects__github-icon" src={github} alt="github link to greatest piano repository" />
                </a>
              </div>
            </div>
            <img className="projects__image" src={image} alt={alt} />
          </div>
        )
      })}

    </div>
  )
}
