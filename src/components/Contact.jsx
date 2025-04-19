import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("https://formsubmit.co/ajax/sruthycb0@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        _captcha: false
      })
    });

    const result = await response.json();

    if (result.success === "true") {
      setFormData({ name: "", email: "", message: "" });
      setShowModal(true); // show modal
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="4" 
            required 
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button 
          type="submit" 
          className={`contact-button ${loading ? "loading" : ""}`} 
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Success Modal */}
      {showModal && (
        <div className="success-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowModal(false)}>&times;</span>
            <h3>✅ Message Sent!</h3>
            <p>Your message has been delivered successfully.</p>
          </div>
        </div>
      )}

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
