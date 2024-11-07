import React from 'react';
import './Navbar.css';
import srdslogo from '../assets/srdslogo.png';
// Make sure this path is correct

const Navbar = () => {
    return (
        <>
        <nav className="new-navbar">
            <div className="new-navbar-brand">
                <img src={srdslogo} alt="SRDS Logo" className="navbar-logo" />
            
            </div>
            <div className="new-navbar-links">
                <button className="new-btn">Donate Now</button>
                <button className="takeaction">Take Action</button>
                <button className="menu">Menu</button>
            </div>
        </nav>
             
        </>
    );
};

export default Navbar;
