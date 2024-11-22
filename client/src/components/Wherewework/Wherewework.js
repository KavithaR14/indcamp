import React, { useState } from 'react';
import './Wherewework.css';
import image1 from '../assets/image 11.png';
import image2 from '../assets/image 12.png';
import image3 from '../assets/image 13.png';
import image4 from '../assets/image 14.png';
import image5 from '../assets/image 15.png';
import image6 from '../assets/image16.png';
import image7 from '../assets/image17.png';
import image8 from '../assets/image 18.png';
import image9 from '../assets/image 19.png';
import image10 from '../assets/image 20.png';
import image11 from '../assets/image 21.png';
import image12 from '../assets/image 22.png';
import image13 from '../assets/image 23.png';
import image14 from '../assets/image 24.png';
import image15 from '../assets/image 25.png';


function WhereWeWork() {
  const images = [
    image1, image2, image3, image4, image5, image6, 
    image7, image8, image9, image10, image11, image12,image13,image14,image15
  ];

  const imageHistory = [
    "Time: 06-03-2023 18.01.18",
    "Time: 06-04-2023 18:03.41",
    "Time: 06-03-2023 18:00.49",
    "Time: 06-03-2023 18.00.15",
    "Time: 06-03-2023 17:15.13",
    "Time: 06-03-2023 17:15.15",
    "Time: 06-03-2023 17.41.44",
    "Time: 06-03-2023 17:46.09",
    "Time: 06-03-2023 17:39.50",
    "Time: 06-03-2023 17.38.40",
    "Time: 06-04-2023 18:38.41",
    "Time: 06-03-2023 18:39.49",
    "Time: 06-03-2023 18.38.18",
    "Time: 06-04-2023 18:37.41",
    "Time: 06-03-2023 18:34.49",
    
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);

  const showPrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      {/* Grid layout */}
      <div className="grid-container">
        {images.map((img, index) => (
          <div
            key={index}
            className="grid-item special-overlay"
            onClick={() => openModal(index)}
          >
            <img src={img} alt={`Event ${index + 1}`} className="grid-image" />
            <div className="overlay">
              <p>{imageHistory[index]}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div className="modal">
          <button className="nav-button left" onClick={showPrevious}>
            {"<"}
          </button>
          <div className="modal-content">
            <div className="modal-left">
              <img
                src={images[selectedImageIndex]}
                alt="Selected Event"
                className="modal-image"
              />
            </div>
            <div className="modal-right">
              <p>{imageHistory[selectedImageIndex]}</p>
            </div>
            <button className="close-button" onClick={closeModal}>
              X
            </button>
          </div>
          <button className="nav-button right" onClick={showNext}>
            {">"}
          </button>
        </div>
      )}
    </div>
  );
}

export default WhereWeWork;