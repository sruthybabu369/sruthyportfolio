import React from "react";
import "../styles/services.css";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>Building responsive and dynamic websites using modern technologies.</p>
        </div>
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>Crafting visually appealing and user-friendly interfaces.</p>
        </div>
        <div className="service-card">
          <h3>SEO Optimization</h3>
          <p>Enhancing website visibility with strategic SEO techniques.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
