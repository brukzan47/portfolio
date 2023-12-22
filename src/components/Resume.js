
// Resume.js
import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>Biruk Bekele - Front End Developer</h2>

      <h3>Skills:</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        {/* Add more skills as needed */}
      </ul>

      <h3>Experience:</h3>
      <p>
        <strong>Company ABC</strong> - Front End Developer (2020-2022)
        <br />
        Worked on building responsive and user-friendly web applications using React.js.
      </p>

      <p>
        <strong>Freelance Projects</strong> - Front End Developer (2018-2020)
        <br />
        Collaborated with clients to create custom websites, focusing on design and functionality.
      </p>

      <h3>Education:</h3>
      <p>
        <strong>University XYZ</strong> - Bachelor's Degree in Computer Science (2018)
      </p>
    </div>
  );
};

export default Resume;
