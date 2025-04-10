import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 2000); // Simulate form submission delay
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      {!submitted ? (
        <form 
          action="https://formsubmit.co/sruthycb0@gmail.com" 
          method="POST" 
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_captcha" value="false" />

          <div className="input-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your Name" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Your Email" required />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
          </div>

          <button type="submit" className={`contact-button ${loading ? "loading" : ""}`} disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <div className="success-message">
          ✅ Thank you! Looking forward to connecting. ✨
        </div>
      )}

      {/* Social Media Links */}
      <div className="social-links">
        <h3>Connect with me</h3>
        <div className="icons">
          <a href="https://github.com/sruthybabu369" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sruthy-c-b-557313222/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:sruthycb0@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
