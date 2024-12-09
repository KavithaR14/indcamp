import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Menubar.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

const Menubar = () => {
  const handleClose = () => {
    console.log("Close button clicked");
    // You can add more logic here, like hiding the menu
  };

  return (
    <div className="main-container">
      {/* Close Button */}
      <button className="close-button" onClick={handleClose}>
        &times; {/* HTML entity for multiplication sign (X) */}
      </button>

      <div className="app">
        <header className="header">
          <h1 className="name">LAST CHANCE</h1>
          <nav className="nav">
            <Link to="/Mainabout">ABOUT</Link>
            <Link to="/whatwe">WHAT WE DO</Link> {/* Navigate to '/whatwe' page */}
            <Link to="/Mainthreaterart">THEATER ART</Link>
            <Link to="/Mainwhoweare">WHO WE ARE</Link>
            <Link to="/Home">CONTACT</Link>
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
