import React, { useEffect, useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      {/* Navigation Links */}
      <nav className="nav">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      {/* Resume Button (Moved to the right) */}
      <a href="/Sruthy_Resume.pdf" download="Sruthy_Resume.pdf" className="resume-btn">
        Download Resume
      </a>
    </header>
  );
};

export default Header;
