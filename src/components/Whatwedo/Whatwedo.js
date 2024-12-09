import React from 'react';
import './Whatwedo.css';
import image from '../assets/IMAGE0.PNG'; // Correct import for the image

function Whatwedo() {
  return (
    <div>
      <div
        className="Whatwedo"
        style={{
          backgroundImage: `url(${image})`, // Correct usage of template literals
          backgroundAttachment: 'fixed', // Keeps the background fixed during scroll and zoom
          backgroundSize: 'cover', // Ensures the background covers the full section
          backgroundPosition: 'center', // Centers the background image
        }}
      >
        <div className="rect-box"></div> {/* Blue rectangle box above title */}
        <h1>
          <span className="WHAT">WHAT</span>
          <span className="WE-DO"> WE DO</span>
        </h1>
      </div>
    </div>
  );
}

export default Whatwedo;