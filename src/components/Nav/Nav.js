// packages
import React, { useState } from "react";
import { Link } from "gatsby";

// styles & assets
import "./Nav.scss";
import logo from "../../styles/assets/logos/jh.png";
import burger from "../../styles/assets/icons/icon-burger.svg";

export default function Nav(props) {
  const [burMenu, showBurger] = useState(false)

  const toggleBurger = (e) => {
    showBurger(!burMenu)
  }

  const scroll = (e) => {
    window.scrollTo({
      top: e.target.value,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <nav className="nav">
      <Link to="/">
        <img className="nav__logo" src={logo} alt="logo" />
      </Link>
      <button className="nav__burger" onClick={toggleBurger}>
        <img className="nav__burger-img" src={burger} alt="burger" />
      </button>
      {burMenu ? <div className="burger"></div> : null}

      <ul className="nav__list">
        <li className="nav__list-item"><button className="nav__list-button" onClick={scroll} value="0">Home</button></li>
        <li className="nav__list-item"><button className="nav__list-button" onClick={scroll} value="500">About</button></li>
        <li className="nav__list-item"><button className="nav__list-button" onClick={scroll} value="1080">Projects</button></li>
        <li className="nav__list-item"><button className="nav__list-button" onClick={scroll} value="10000">Contact</button></li>
      </ul>
    </nav>
  )
}
