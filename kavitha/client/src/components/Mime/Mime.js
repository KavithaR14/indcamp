import React from 'react';
import './Mime.css';
import image from '../assets/image.png';

const Mime= () => {
  return (
    <div className="mime-container">
      <div className="image-section">
        <img src={image} alt="Program Scene 1" className="image" />
      </div>
    </div>
  );
};

export default Mime;

