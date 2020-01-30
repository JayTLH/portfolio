// packages
import React from "react";
import Helmet from "react-helmet";

// components
// import SEO from "../components/seo"
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Divider from "../components/Divider";

// styles & assets
import "./index.scss";

export default function HomePage(props) {
  return (
    <>
      <Helmet title="JayTLH" />
      {/* <SEO /> */}
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
