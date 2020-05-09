import React, { Component } from "react";

import "./Home.scss";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Divider from "../../components/Divider/Divider";

export default class Home extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="home">
          <Hero />
          <Divider />
          <About />
          <Divider />
          <Projects />
          <Divider />
          <Contact />
        </div>
      </>
    )
  }
}
