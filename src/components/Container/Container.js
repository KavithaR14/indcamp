import React from 'react';
import './Container.css';
import image04 from '../assets/image04.PNG'; // Replace with the actual path to your image

function Container() {
  return (
    <div className="maincontainer">
      {/* About SRDS Section */}
      <section className="about-container">
        <h2>About SRDS</h2>
        <p>
          SRDS is a non-profit organization that focuses on <br/> Women, children, and underprivileged youth<br/> who experience some of the worst living conditions like<br/> malnutrition, illiteracy, child mortality, and all kinds of<br/>abuse due to the financial circumstances of their<br/> parents and family members.
        </p>
        <button className="learn-more-button-about">Learn More</button>
      </section>

      {/* Image Section */}
      <section className="image-container">
        <img src={image04} alt="Women Empowerment" />
      </section>

      {/* Our Projects Section */}
      <section className="projects-container">
        <h2>Our<br/> Projects</h2>
        <p>
          Each time a woman is empowered, a full circle <br/>of life is created, as she has the power to create, <br/> nurture, and transform a <br/>family, a community, and a country.
        </p>
        <button className="learn-more-button-projects">Learn More</button>
      </section>
    </div>
  );
}

export default Container;
