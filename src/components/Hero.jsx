import React from "react"; 
import "../styles/Hero.css"; 
import { motion } from "framer-motion";
import profileImg from "../assets/sruthy_img.png"; // Update with your actual image path

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left side - Profile Image */}
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profileImg} alt="Sruthy C B" />
        </motion.div>

        {/* Divider */}
        <div className="vertical-divider" />
        
        {/* Right side - Job Titles */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">Hi, I'm Sruthy C B</h1>
          <p className="hero-subtitle">A Full-Stack Developer specializing in React & Django</p>
          <a href="#projects" className="hero-button">View My Work</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
