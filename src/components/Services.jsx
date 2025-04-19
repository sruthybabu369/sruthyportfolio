import React from "react";
import "../styles/services.css";
import { FaCode, FaPaintBrush, FaLaptopCode } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Services</h2>
      <div className="services-container">
        <div className="service-card">
          <FaCode className="service-icon" />
          <h3>Web Development</h3>
          <p>Building fully responsive websites with clean, semantic, and optimized code.</p>
        </div>
        <div className="service-card">
          <FaPaintBrush className="service-icon" />
          <h3>UI/UX Design</h3>
          <p>Crafting visually engaging and user-friendly interfaces.</p>
        </div>
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Frontend Development</h3>
          <p>Creating user-focused, scalable frontend solutions with smooth interactions and optimized performance</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
