import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import "./About.css";

const About = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, proficiency: 100 },
    { name: "CSS", icon: <FaCss3Alt />, proficiency: 90 },
    { name: "JavaScript", icon: <FaJs />, proficiency: 80 },
    { name: "React", icon: <FaReact />, proficiency: 50 },
    { name: "PHP", icon: <FaPhp />, proficiency: 70 },
    { name: "MySQL", icon: <FaDatabase />, proficiency: 85 },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am a final-year computer science student with expertise in web
          development. I specialize in creating dynamic and responsive websites
          using HTML, CSS, JavaScript, React, PHP, and MySQL. Passionate about
          coding and problem-solving, I strive to deliver high-quality web
          solutions.
        </p>
        <h3>Skills</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-name">{skill.name}</div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
