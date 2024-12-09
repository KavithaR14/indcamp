import React from 'react';
import './About.css';
import airimages from '../assets/airimage.png'; // Ensure the correct path to the image

const About = () => {
  return (
    <div className="about-section">
      {/* Image Section */}
      <div className="images-container">
        <div className="image-wrapper">
          <img src={airimages} alt="About SRDS" className="about-img" />

          {/* Rectangle Box */}
          <div className="highlight-box"></div>

          {/* Overlay Heading */}
          <div className="overlay-text">
            <h1 className="heading-main">
              ABOUT<br /> <span className="highlighted-text">SRDS</span>
            </h1>
            <p className="overlay-paragraph">
              We work in close coordination at various levels – National, State, and District.
              We conduct <br /> skilling programs, child welfare projects, and the formation of
              Self-Help Groups (SHGs).
            </p>
          </div>
        </div>
      </div>

      {/* Description Below the Image */}
      <p className="description-one">
        Social Rural Development Society (SRDS) is a non-profit organisation established in Tamil <br />
        Nadu to uplift the welfare of women, children, youth, farmers, and the marginalised <br />
        community, particularly the dalits and tribes in Tamil Nadu. Since its inception in 1991, SRDS <br />
        been committed to playing a significant role in uplifting women and children by organizing various<br />
        community development programmes.
      </p>
      <p className="description-two">
        SRDS is one of the training partners of the State Institute of Rural Development and Panchayat Raj,<br />
        Tamil Nadu, and mainly organises and conducts training programmes in Villupuram and <br />
        Kallakurichi districts of Tamil Nadu.
      </p>

      {/* Mission & Vision Section */}
      <div className="mv-section">
        {/* Left Side: Heading */}
        <div className="mv-heading">
          <h2>MISSION& VISION.</h2>
        </div>
{/* Right Side: Paragraphs */}
  <div className="mission-vision-paragraphs">
          {/* Mission Section */}
          <h3 className="sub-heading">Mission:</h3>
          <p>
            To improve the socio-economic, political empowerment of SC/ST and other minority people,
            paving them toward an egalitarian society and facilitating them to lead dignified lives.
          </p>

          {/* Vision Section */}
          <h3 className="sub-heading">Vision:</h3>
          <p>
            To remove the underprivileged dalit minority people (people with disabilities, children
            with disabilities), transgender individuals, HIV/AIDS victims, and others living vulnerable
            lives from health hazards and empower them through the process of socialization, helping them
            achieve dignity in life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

