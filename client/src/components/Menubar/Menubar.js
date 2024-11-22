import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Menubar.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

const Menubar = () => {
  const handleClose = () => {
    console.log('Close button clicked');
  };

  return (
    <div className="main-container">
      {/* Close Button */}
      <button className="close-button" onClick={handleClose}>
        &times; {/* HTML entity for multiplication sign (X) */}
      </button>
      
      <div className="app">
        <header className="header">
          <h1 className="logo">
            LAST CHANCE
          </h1>
          <nav className="nav">
            <Link to="/about">ABOUT</Link> {/* Change to navigate to '/about' */}
            <Link to="/whatwe">WHAT WE DO</Link> {/* Navigate to '/whatwedo' page */}
            <Link to="/theaterart">THEATER ART</Link>
            <Link to="/whoweare">WHO WE ARE</Link>
            <Link to="/contact">CONTACT</Link>
          </nav>
        </header>

        <div className="buttons">
          <button className="donate-now">Donate Now</button>
          <button className="take-action">Take Action</button>
        </div>

        <footer className="socials">
          <div className="social-icon">
            <img src={facebook} alt="Facebook Icon" />
            Facebook
          </div>
          <div className="social-icon">
            <img src={twitter} alt="Twitter Icon" />
            Twitter
          </div>
          <div className="social-icon">
            <img src={instagram} alt="Instagram Icon" />
            Instagram
          </div>
          <div className="social-icon">
            <img src={youtube} alt="YouTube Icon" />
            YouTube
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Menubar;
