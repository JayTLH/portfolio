import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Nav.scss";
import logo from "../../styles/assets/logos/jh.png";

export default class Nav extends Component {
  scroll = (e) => {
    window.scrollTo({
      top: e.target.value,
      left: 0,
      behavior: "smooth"
    })
  }

  render() {
    return (
      <nav className="nav">
        <Link to="/">
          <img className="nav__logo" src={logo} alt="logo" />
        </Link>

        <ul className="nav__list">
          <li className="nav__list-item"><button className="nav__list-button" onClick={this.scroll} value="0">Home</button></li>
          <li className="nav__list-item"><button className="nav__list-button" onClick={this.scroll} value="500">About</button></li>
          <li className="nav__list-item"><button className="nav__list-button" onClick={this.scroll} value="1080">Projects</button></li>
          <li className="nav__list-item"><button className="nav__list-button" onClick={this.scroll} value="100000">Contact</button></li>
        </ul>
      </nav>
    )
  }
}
