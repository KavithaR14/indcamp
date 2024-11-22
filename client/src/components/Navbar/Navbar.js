import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';
import srdslogo from '../assets/srdslogo.png';

const Navbar = () => {
    return (
        <nav className="new-navbar">
            <div className="new-navbar-brand">
                <img src={srdslogo} alt="SRDS Logo" className="navbar-logo" />
            </div>
            <div className="new-navbar-links">
                {/* Use Link for navigation */}
                <Link to="/donate">
                    <button className="new-btn">Donate Now</button>
                </Link>
                <Link to="/takeAction">
                    <button className="takeaction">Take Action</button>
                </Link>
               
                <Link to="/Menubar">
                    <button className="menu">Menu</button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
