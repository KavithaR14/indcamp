import React from 'react';
import './Hero.css'; // Create and style this CSS file for hero styling

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <button className="primary">empty</button>
                <h1 className="hero-title-srds">SRDS</h1>
                <h1 className="hero-title-transmogrify">TRANSMOGRIFY</h1>
                <p>At SRDS, we empower the underprivileged through our education, skilling, and livelihood programs...</p>
                <button className="btn-primary">Get Involved</button>
            </div>
            {/* <div className="hero-image">
                <img src="path-to-your-image.jpg" alt="Smiling child" />
            </div> */}
        </section>
    );
};








export default Hero;
