// packages
import React, { useState } from "react";
import { Link } from "react-router-dom";

// styles & assets
import "./Nav.scss";
import logo from "../../styles/assets/logos/jaytlh.png";
import burger from "../../styles/assets/icons/icon-burger.svg";

export default function Nav(props) {
  const [burMenu, showBurger] = useState(false)

  const toggleBurger = (e) => {
    showBurger(!burMenu)
  }

  return (
    <>
      <nav className="nav">
        <Link to="/">
          <img className="nav__logo" src={logo} alt="logo" />
        </Link>
        <button className="nav__burger" onClick={toggleBurger}>
          <img className="nav__burger-img" src={burger} alt="burger" />
        </button>
        {burMenu ? <div className="burger"></div> : null}
      </nav>
    </>
  )
}
