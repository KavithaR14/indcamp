import React from 'react';
import './Section.css';
import image03 from '../assets/image03.png'; // Ensure the image path is correct

function Section() {
  return (
    <div>
      <div
        className="section"
        style={{ backgroundImage: `url(${image03})` }} // Correct usage of template literals
      >
        <div className="rectangles-box"></div> {/* Blue rectangle box above title */}
        <h1>
          <span className="get-involved">GET INVOLVED</span>
          <span className="today"> TODAY!</span>
        </h1>
        <p className="Section-paragraph">
        I'm a paragraph. Click here to add your own<br/> text and edit me. It’s easy. Just click “Edit Text” <br/>or double click me to add your own content <br/>and make changes to the font.
        </p>
      </div>
      <div className="content-below">
        {/* Additional content that wi I'm a paragrapll scroll below the hero section */}
        
      </div>
    </div>
  );
}

export default Section;