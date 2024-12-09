import React from 'react';
import './HelpAndKnowUs.css';

const HelpAndKnowUs = () => {
  return (
    <div className="help-know-container">
      {/* How You Can Help Section */}
      <div className="help-section">
        <h2>How You<br /> Can Help</h2>
        <p>
          Your support makes it possible<br />
          for us to create lasting, positive<br />
          change in the lives of many.
        </p>
        <button className="action-btn">Act Now</button>
      </div>

      {/* Get to Know Us Section */}
      <div className="know-us-section">
        <h2>Get to<br /> Know Us</h2>
        <p>
          When you contribute, you help<br />
          ensure that we can carry out<br />
          our mission effectively.
        </p>
        <button className="action-btn">Our Team</button>
      </div>
    </div>
  );
};

export default HelpAndKnowUs;