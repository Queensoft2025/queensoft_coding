import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaUser } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
     
      <div className="scrolling-text">
        <marquee behavior="scroll" direction="left">
          🎉 Queensoft Opening Offer! Grab it Now! 🎉
        </marquee>
      </div>

      
      <div className="logo-social">
         <div className="logo">
         <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/queensoft2025/"><FaFacebookF /></a>
          <a href="https://x.com/Queensoft2025"><FaTwitter /></a>
          <a href="https://www.instagram.com/queensoft2025/?hl=en"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/106696106/admin/dashboard/"><FaLinkedinIn /></a>
          <a href="https://www.youtube.com/@Queensoft_2025"><FaYoutube /></a>
        </div>
      </div>

      <div className="nav-menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <div className="login-register">
          <FaUser /> <a href="#">Login/Register</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
