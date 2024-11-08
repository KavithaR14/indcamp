import React from 'react';
import './SubscribeSection.css'; // Import a CSS file for styling

const SubscribeSection = () => {
  return (
    <div className="subscribe-section">
      <h1>JOIN THE MOVEMENT!</h1>
      <p>Get the Latest News & Updates</p>
      <div className="subscribe-form">
        <input type="email" placeholder="Enter your email here" />
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default SubscribeSection;
