
// Services.js
import React from 'react';
import './services.css'; // Import the CSS file for styling

const Services = () => {
  return (
    <div className="services-container">
      <h2>Our Services</h2>
      <div className="service-item">
        <h3>Web Development</h3>
        <p>
          We specialize in creating responsive and user-friendly websites using
          the latest web technologies.
        </p>
      </div>
      <div className="service-item">
        <h3>Mobile App Development</h3>
        <p>
          Build powerful and scalable mobile applications for iOS and Android
          platforms with our expertise.
        </p>
      </div>
      <div className="service-item">
        <h3>UI/UX Design</h3>
        <p>
          Create visually stunning and intuitive user interfaces to enhance the
          overall user experience.
        </p>
      </div>
      <div className="service-item">
        <h3>SEO Optimization</h3>
        <p>
          Improve your website's visibility on search engines and drive more
          organic traffic with our SEO services.
        </p>
      </div>
      <div className="service-item">
        <h3>E-commerce Solutions</h3>
        <p>
          Develop customized e-commerce solutions tailored to meet your business
          needs and goals.
        </p>
      </div>
    </div>
  );
};

export default Services;
