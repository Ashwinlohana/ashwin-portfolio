import React from "react";
import { FaDownload } from "react-icons/fa";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-content">
        <h2>Resume</h2>
        <p>Download my resume to learn more about my experience and skills.</p>
        <a
          href="https://drive.google.com/file/d/1_94IH7g4j8C9UR2Cy18AEvO37f4X-734/view?usp=drive_link"
          className="resume-link"
          download="Ashwin_Kumar_Resume.pdf"
        >
          <FaDownload className="download-icon" /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;