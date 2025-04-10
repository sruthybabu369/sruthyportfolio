import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About <span>Me</span></h2>
        <p className="about-description">
          Hi! I'm <strong>Sruthy</strong>, a dedicated <strong>Full-Stack Web Developer</strong> who enjoys crafting clean, functional, and modern web solutions that deliver real impact.
        </p>
        <p className="about-highlight">
          I’m always learning, evolving, and exploring new ways to push the boundaries of what the web can do.
        </p>
        <p className="about-footer">
          Let's create something <span className="glow-text">amazing</span> together! 
        </p>
      </div>
    </section>
  );
};

export default About;
