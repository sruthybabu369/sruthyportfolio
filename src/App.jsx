import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import HireMe from "./components/HireMe";
import About from "./components/About";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Skills />
      <HireMe />
      <Contact />
    </div>
  );
}

export default App;
