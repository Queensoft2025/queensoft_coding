import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaUser
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar-wrapper">
      {/* Scrolling banner */}
      <div className="scrolling-text">
        <marquee behavior="scroll" direction="left">
          🎉 Queensoft Opening Offer! Grab it Now! 🎉
        </marquee>
      </div>

      {/* Logo & social media */}
      <div className="logo-social">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/queensoft2025/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://x.com/Queensoft2025" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/queensoft2025/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/106696106/admin/dashboard/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/@Queensoft_2025" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="nav-menu">
        <ul>
          <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => setMenu("About")} className={menu === "About" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={() => setMenu("Services")} className={menu === "Services" ? "active" : ""}>
            <Link to="/services">Services</Link>
          </li>
          <li onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={() => setMenu("Blog")} className={menu === "Blog" ? "active" : ""}>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        {/* Login/Register */}
        <div className="login-register">
          <FaUser /> <Link to="/login">Login/Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
