import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Neural Network Visualizer",
      description: "An interactive web application that visualizes neural network architectures in real-time. Built with React and D3.js, it allows users to explore different layer configurations and see how data flows through the network. Features include custom architecture design, training visualization, and performance metrics.",
      tags: ["React", "D3.js", "Machine Learning", "WebGL"],
      link: "#"
    },
    {
      id: 2,
      title: "Cloud Infrastructure Manager",
      description: "A comprehensive dashboard for managing multi-cloud infrastructure across AWS, Azure, and GCP. Provides unified monitoring, cost optimization suggestions, and automated scaling policies. Includes real-time alerts, resource utilization graphs, and predictive analytics for capacity planning.",
      tags: ["Node.js", "AWS", "Docker", "Kubernetes"],
      link: "#"
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="card-glow"></div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
