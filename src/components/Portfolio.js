import React, { useState } from "react";
import EcommerceImg from "../assets/e-commerce.png";
import HospitalImg from "../assets/Hospital.png";
import MeatImg from "../assets/meat.png";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./Portfolio.css";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce website with product listings, a shopping cart, and a checkout system.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: EcommerceImg,
      liveLink: "ogani-web.42web.io",
      category: "Full Stack",
    },
    {
      title: "White Meat - Fresh & Organic Meat Delivery",
      description:
        "A modern and responsive website design for White Meat, a brand specializing in fresh and organic meat delivery. Features include product showcase, online ordering, and a fully responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: MeatImg,
      liveLink: "https://ashwinlohana.github.io/internship-task2",
      category: "Frontend",
    },
    {
      title: "Hospital Management System",
      description:
        "A comprehensive web-based application to streamline hospital operations, including patient management, appointment scheduling, doctor management, and billing.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      image: HospitalImg,
      liveLink: "https://ashwinlohana.github.io/hospital-management-system/",
      category: "Full Stack",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-content">
        <h2>Projects</h2>
        <div className="filter-buttons">
          <button
            onClick={() => setFilter("All")}
            className={filter === "All" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Frontend")}
            className={filter === "Frontend" ? "active" : ""}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("Full Stack")}
            className={filter === "Full Stack" ? "active" : ""}
          >
            Full Stack
          </button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <h3>{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.description}</p>
            <p>
              <strong>Technologies:</strong>{" "}
              {selectedProject.technologies.join(", ")}
            </p>
            <div className="modal-links">
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
