// Blog.js
import React from 'react';
import './blog.css'; // Import the CSS file for styling

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>My Blog</h2>
      
      <div className="blog-post">
        <h3>Understanding React Hooks</h3>
        <p className="post-meta">
          Published on January 15, 2023 by Biruk Bekele
        </p>
        <p>
          React Hooks provide a way to use state and side effects in functional
          components. They were introduced in React 16.8 and have since become a
          fundamental part of modern React development.
        </p>
        <p>
          In this post, we'll explore the useState and useEffect hooks and how
          they can be used to manage state and perform side effects in React
          functional components.
        </p>
      </div>
    </div>
  );
};

export default Blog;
