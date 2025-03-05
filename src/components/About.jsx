import React from "react";
import "../styles/About.css";
import profileImage from "../assets/profile_img.jpg"; // Add your image inside assets folder

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>

        {/* Right Side - Text */}
        <div className="about-content">
          <h2 className="about-title">About <span>Me</span></h2>
          <p>
            Hi! I'm <strong>Sruthy</strong>, a passionate <strong>Full-Stack Web Developer </strong> 
            with expertise in <strong>React, Django, JavaScript, Python, and PostgreSQL</strong>.
          </p>
          <p>
            I build stunning, functional websites and love crafting seamless user experiences.
          </p>
          <p>
            Let's create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
