import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About <span>Me</span></h2>
        <p className="about-description">
          Hi! I'm <strong>Sruthy</strong>, a passionate <strong>Full-Stack Web Developer </strong> 
          with expertise in <strong>React, Django, JavaScript, Python, and PostgreSQL</strong>.
        </p>
        <p className="about-highlight">
          I love building stunning, functional websites and crafting seamless user experiences.
        </p>
        <p className="about-footer">
          Let's create something <span className="glow-text">amazing</span> together! 
        </p>
      </div>
    </section>
  );
};

export default About;
