import React from "react";
import "../styles/HireMe.css"; // Import CSS

const HireMe = () => {
  return (
    <section id="hire-me">
      <div className="hire-me-container">
        <h2 className="hire-me-title">Let's Work Together!</h2>
        <p className="hire-me-text">I'm open to exciting opportunities. Feel free to reach out!</p>
        <p className="hire-me-text">Let's discuss your project today.</p>
        <a href="mailto:sruthycb0@gmail.com" className="hire-me-button">Hire Me</a>
      </div>
    </section>
  );
};

export default HireMe;
