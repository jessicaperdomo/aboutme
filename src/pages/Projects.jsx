import React from "react";
import "../App.css";

export default function Projects() {
  const projects = [
    {
      name: "Neural Decoding SDT",
      description: "This project simulates neural responses with noise and applies the Signal Detection Theory (SDT), inspired by the book Principles of Neural Science (Kandel) using Python.",
      url: "https://github.com/jessicaperdomo/NeuralDecodingSDT"
    },
    {
      name: "Job Board",
      description: "Board to find jobs using VueJS.",
      url: "https://github.com/jessicaperdomo/JobPanel"
    },
    {
      name: "App 8 Puzzle",
      description: "An app to solve the 8-puzzle game using search algorithms like A* and Hill Climbing.",
      url: "https://github.com/jessicaperdomo/8puzzleApp"
    }
  ];

  return (
    <div className="projects-page">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <a
            key={project.name}
            className="project-card"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <span className="project-link">View on GitHub →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
