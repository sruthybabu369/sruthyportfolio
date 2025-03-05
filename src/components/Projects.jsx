import React from "react";
import projects from "../projectsData"; // Importing the project data
import "../styles/Projects.css"; // Import the CSS file

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">
        My <span>Projects</span>
      </h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack">
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                  GitHub
                </a>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-demo-link">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
