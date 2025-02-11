import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me via email or social media.</p>
        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>ashwinkumar7374354@gmail.com</p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>03347374354</p>
          </div>
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/ashwin-kumar-050224292/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a
            href="https://github.com/ashwinlohana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/ashwinluhana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
