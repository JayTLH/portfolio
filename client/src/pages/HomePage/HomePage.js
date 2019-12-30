// packages
import React from "react";

// components
import Nav from "../../components/Nav";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Divider from "../../components/Divider";

// styles & assets
import "./HomePage.scss";

export default function HomePage(props) {
  return (
    <>
      <Nav />
      <div className="main">
        <Hero />
        <Divider />
        <Projects />
        <Divider />
      </div>
    </>
  )
}
