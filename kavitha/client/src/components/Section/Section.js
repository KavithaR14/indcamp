// src/components/HeroSection.js
import React from 'react';
import './Section.css';
import image1 from '../assets/image1.jpeg'; // Ensure the image path is correct

function Section() {
  return (
    <div>
      <div
        className="section"
        style={{ backgroundImage: `url(${image1})` }}  // Correct usage of template literals
      >
        <div className="rectangle-box"></div> {/* Blue rectangle box above title */}
        <h1>
          <span className="get-involved">GET INVOLVED</span>
          <span className="today"> TODAY!</span>
        </h1>
        <p className="Section-paragraph">
         h. Click here to add your own text and edit me. It’s easy. Just click "Edit Text" or double-click me to add your content and make changes to the font.
        </p>
      </div>
      <div className="content-below">
        {/* Additional content that wi I'm a paragrapll scroll below the hero section */}
        
      </div>
    </div>
  );
}

export default Section;