import React from 'react';
import './Mime.css';
import image1 from '../assets/image 22.png';
import image2 from '../assets/image 21.png';
import image3 from '../assets/image 22.png';

const Mime = () => {
  return (
    <div className="mime-container">
      <div className="image-section">
        <img src={image1} alt="Scene 1" className="image1" />
      </div>
      <div className="image-section">
        <img src={image2} alt="Scene 2" className="image2" />
      </div>
      <div className="image-section">
        <img src={image3} alt="Scene 3" className="image3" />
      </div>
    </div>
  );
};

export default Mime;
