import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Hero.css'; // Create and style this CSS file for hero styling

const Hero = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleNavigation = () => {
        navigate('/take-action'); // Navigate to the "Take Action" page
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <button className="primary">empty</button>
                <h1 className="hero-title-srds">SRDS</h1>
                <h1 className="hero-title-transmogrify">TRANSMOGRIFY</h1>
                <p>
                    At SRDS, we empower the underprivileged through our education,
                    skilling, and livelihood programs...
                </p>
                <button className="button-primary" onClick={handleNavigation}>
                    GET INVOLVED
                </button>
            </div>
            <div className="hero-image"></div>
        </section>
    );
};

export default Hero;
