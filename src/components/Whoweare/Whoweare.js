import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './Whoweare.css';
import bannerImage from '../assets/teamimage.jpg'; // Replace with your actual image path

const Whoweare = () => {
  const teamMembers = [
    { name: "Mark Palmer", role: "Wildlife Educator", email: "info@mysite.com" },
    { name: "Joanie Davis", role: "Executive Director", email: "info@mysite.com" },
    { name: "Debbie Stillman", role: "Conservation Director", email: "info@mysite.com" },
    { name: "Sharon Feldman", role: "Program Manager", email: "info@mysite.com" },
    { name: "Brian Wang", role: "Secretary", email: "info@mysite.com" },
    { name: "Danny Williams", role: "Restoration Coordinator", email: "info@mysite.com" },
  ];

  return (
    <div className="whoweare-container">
      {/* Banner Section */}
      <div className="banner">
        <img src={bannerImage} alt="Who We Are Banner" />
        <div className="banner-text">
          <span className="line"></span>
          <h1>WHO</h1> {/* Fixed closing tag */}
          <h2>WE ARE</h2>
        </div>
      </div>

      
      </div>
   
  );
};

export default Whoweare;