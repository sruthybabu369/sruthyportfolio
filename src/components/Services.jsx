import React from "react";
import "../styles/services.css";
import { FaCode, FaPaintBrush, FaSearch } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="services-title">Services</h2>
      <div className="services-container">
        <div className="service-card">
          <FaCode className="service-icon" />
          <h3>Web Development</h3>
          <p>Building responsive and dynamic websites using modern technologies.</p>
        </div>
        <div className="service-card">
          <FaPaintBrush className="service-icon" />
          <h3>UI/UX Design</h3>
          <p>Crafting visually appealing and user-friendly interfaces.</p>
        </div>
        <div className="service-card">
          <FaSearch className="service-icon" />
          <h3>SEO Optimization</h3>
          <p>Enhancing website visibility with strategic SEO techniques.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
