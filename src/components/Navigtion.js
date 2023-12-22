// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navigtion.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <i className="fas fa-user"></i> About
          </Link>
        </li>
        <li>
          <Link to="/resume">
            <i className="fas fa-file-alt"></i> Resume
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <i className="fas fa-briefcase"></i> Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="fas fa-envelope"></i> Contact
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <i className="fas fa-blog"></i> Blog
          </Link>
        </li>
        <li>
          <Link to="/services">
            <i className="fas fa-cogs"></i> Services
          </Link>
        </li>
        <li>
          <Link to="/pricing">
            <i className="fas fa-dollar-sign"></i> Pricing
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
