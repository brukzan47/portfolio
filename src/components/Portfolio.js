// Portfolio.js
import React from 'react';
import './portfolio.css'; // Import the CSS file for styling

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>

      <div className="project">
        <h3>Project 1: Personal Website</h3>
        <p>
          A responsive personal website showcasing my skills, projects, and
          contact information.
        </p>
        <a
          href="https://github.com/your-username/project-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>

      <div className="project">
        <h3>Project 2: React App</h3>
        <p>
          A React.js application demonstrating my proficiency in building
          modern web applications.
        </p>
        <a
          href="https://github.com/your-username/project-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>

      {/* Add more projects as needed */}
    </div>
  );
};

export default Portfolio;
