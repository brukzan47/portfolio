// Pricing.js
import React from 'react';
import './pricing.css'; // Import the CSS file for styling

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2>Our Pricing Plans</h2>
      <div className="pricing-item">
        <h3>Basic Plan</h3>
        <p>Perfect for small projects and personal use.</p>
        <span>$19.99/month</span>
      </div>
      <div className="pricing-item">
        <h3>Standard Plan</h3>
        <p>Great for medium-sized businesses with additional features.</p>
        <span>$49.99/month</span>
      </div>
      <div className="pricing-item">
        <h3>Premium Plan</h3>
        <p>For large enterprises with advanced functionalities and support.</p>
        <span>$99.99/month</span>
      </div>
    </div>
  );
};

export default Pricing;




