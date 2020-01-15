// packages
import React from "react";

// styles & assets
import "./Contact.scss";
import email from "../../styles/assets/icons/email.png";
import github from "../../styles/assets/icons/github.png";
import linkedin from "../../styles/assets/icons/linkedin.png";

export default function Contact(props) {
  return (
    <div className="contact">
      <h1 className="contact__title">Contact</h1>
      <div className="contact__info">
        <p className="contact__text">You can reach me through email or find me using the links below!</p>
        <div className="contact__logos">
          <a className="contact__link" href="mailto:jasonjdh94@gmail.com?subject=Hi%20Jason!"><img className="contact__link-img" src={email} alt="email logo" /></a>
          <a className="contact__link" href="https://github.com/JayTLH" target="_blank" rel="noopener noreferrer"><img className="contact__link-img" src={github} alt="github logo" /></a>
          <a className="contact__link" href="https://www.linkedin.com/in/jason-tlh/" target="_blank" rel="noopener noreferrer"><img className="contact__link-img" src={linkedin} alt="linkedin logo" /></a>
        </div>
      </div>
    </div>
  )
}
