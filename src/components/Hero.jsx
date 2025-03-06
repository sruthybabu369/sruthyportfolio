import React from "react";
import "../styles/Hero.css"; 
// Importing the separate CSS file
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Sruthy C B
      </motion.h1>
      
      <motion.p 
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        A Full-Stack Developer specializing in React & Django
      </motion.p>

      <motion.a 
        href="#projects" 
        className="hero-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
