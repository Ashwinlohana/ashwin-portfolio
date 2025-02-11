import React, { useState, useEffect } from "react";
import profileImage from "../assets/prfile.jpg"; // Adjust the path to your image
import "./Home.css";

const Home = () => {
  const [text, setText] = useState("");
  const phrases = [
    "Website Developer",
    "Full-Stack Enthusiast",
    "Problem Solver",
  ];
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    const typeText = () => {
      const currentPhrase = phrases[index];
      const currentText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(currentText);

      // Typing speed: 150ms per character, 50ms when deleting
      const typingSpeed = isDeleting ? 50 : 50;

      if (!isDeleting && currentText === currentPhrase) {
        // Wait for 2 seconds before starting to delete
        timeoutId = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        // Move to the next phrase after deleting
        setIsDeleting(false);
        setIndex((index + 1) % phrases.length);
      } else {
        // Continue typing or deleting
        timeoutId = setTimeout(typeText, typingSpeed);
      }
    };

    typeText();

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, [text, index, isDeleting, phrases]);

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="text-content">
          <h1>Ashwin Kumar</h1>
          <h2>
            {text}
            <span className="cursor"></span>
          </h2>
          <p>Transforming ideas into interactive web experiences.</p>
          <div className="home-buttons">
            <a href="#portfolio" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="profile-image-container">
          <img
            src={profileImage}
            alt="Ashwin Kumar"
            className="profile-image"
          />
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Home;
