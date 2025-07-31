import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo1.png';
import {
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube,
  FaPinterest, FaUser
} from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';

const Navbar = () => {
  const [menu, setMenu] = useState('Home');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setMenu('Services');
    setShowDropdown(prev => !prev);
  };

  const navigateTo = (path, name) => {
    setMenu(name);
    setShowDropdown(false);
    navigate(path);
  };

  return (
    <div className="navbar-wrapper">
      {/* Scrolling Text */}
      <div className="scrolling-text">
        <marquee behavior="scroll" direction="left">
          🎉 Queensoft Opening Offer! Grab it Now! 🎉
        </marquee>
      </div>

      {/* Logo and Social */}
      <div className="logo-social">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/queensoft2025/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/queensoft2025/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/106696106/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="https://x.com/Queensoft2025" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.youtube.com/@Queensoft_2025" target="_blank" rel="noreferrer"><FaYoutube /></a>
          <a href="https://www.pinterest.com/queensoft2025/" target="_blank" rel="noreferrer"><FaPinterest /></a>
          <a href="https://www.threads.net/@queensoft2025" target="_blank" rel="noreferrer"><SiThreads /></a>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="nav-menu">
        <ul>
          <li onClick={() => navigateTo('/', 'Home')} className={menu === 'Home' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => navigateTo('/about', 'About')} className={menu === 'About' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>

          {/* Dropdown */}
          <li ref={dropdownRef} className={`dropdown ${menu === 'Services' ? 'active' : ''}`}>
            <div className="services-link-wrapper">
              <Link to="/services" onClick={() => navigateTo('/services', 'Services')}>Services</Link>
              <span className="dropdown-arrow" onClick={toggleDropdown}>▾</span>
            </div>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                <li><Link to="/google-my-business">Google My Business</Link></li>
                <li><Link to="/google-ads">Google Ads</Link></li>
                <li><Link to="/website-designing">Website Designing</Link></li>
                <li><Link to="/branding">Branding SEO</Link></li>
                <li><Link to="/graphic-designing">Graphic Designing</Link></li>
              </ul>
            )}
          </li>

          <li onClick={() => navigateTo('/portfolio', 'Portfolio')} className={menu === 'Portfolio' ? 'active' : ''}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li onClick={() => navigateTo('/blog', 'Blog')} className={menu === 'Blog' ? 'active' : ''}>
            <Link to="/blog">Blog</Link>
          </li>
          <li onClick={() => navigateTo('/contact', 'Contact')} className={menu === 'Contact' ? 'active' : ''}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Consultant Link */}
        <div className="login-register">
          <FaUser /> <Link to="/login">Get a Quote</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
