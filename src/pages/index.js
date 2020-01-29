// import React from "react"
// import { Link } from "gatsby"

// import SEO from "../components/seo"

// export default function Home() {
//   return (
//     <>
//       <SEO title="Home" />
//       hello world
//     </>
//   )
// }

// packages
import React from "react";

// components
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
