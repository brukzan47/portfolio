// About.js

import React from 'react';
//import './animations.css'; // Import the CSS file for animations
import './about.css'; // Import the custom CSS file


const About = () => {
  return (
    <div>
      {/* First Navigation */}
      <nav className="first-navigation">
        <ul>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          {/* Add more links as needed */}
        </ul>
      </nav>

      {/* About Me Section */}
      <div className="fadeIn about-container">
        <h1>About Me</h1>
        <p>
          Hi, I'm Biruk Bekele, a passionate front-end developer with a love for creating
          engaging and responsive web applications. I specialize in turning design concepts
          into user-friendly interfaces and have a strong foundation in HTML, CSS, and
          JavaScript.
        </p>
        <p>
          My goal is to build visually appealing and functional websites that provide
          seamless user experiences. I stay up-to-date with the latest web development
          trends and technologies to deliver high-quality and modern solutions.
        </p>
        <p>
          Let's collaborate and bring your ideas to life! Feel free to explore my portfolio
          and get in touch with me for exciting web development projects.
        </p>
      </div>

      {/* Second Navigation */}
      <nav className="second-navigation">
        <ul>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          {/* Add more links as needed */}
        </ul>
      </nav>

      {/* Additional Content Section */}
      <div className="fadeIn additional-content-container">
        <p>
          Hi, I'm Biruk Bekele, a passionate front-end developer with expertise in React.js.
          I also have experience working with Node.js and Express for server-side development.
          My skills extend to C++, Python, and I enjoy tackling a variety of programming challenges.
        </p>
        <div className="additional-info-box">
          <h2>Technical Expertise</h2>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>C++</li>
            <li>Python</li>
          </ul>
        </div>
        <p>
          My goal is to build visually appealing and functional websites that provide
          seamless user experiences. I stay up-to-date with the latest web development
          trends and technologies to deliver high-quality and modern solutions.
        </p>
        <p>
          Let's collaborate and bring your ideas to life! Feel free to explore my portfolio
          and get in touch with me for exciting web development projects.
        </p>
      </div>
    </div>
  );
};

export default About;
