import React from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterest,
  FaWhatsapp,
} from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';
import { FiPhone, FiMail, FiMapPin, FiGlobe } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="qs-footer">
      <div className="qs-footer-container">
        <div className="qs-footer-col">
          <h3 className="qs-footer-title">Queensoft</h3>
          <p>
            Empowering your digital growth with creative design, smart marketing, and innovative technology to build stronger brands and lasting online success.
          </p>
        </div>

        <div className="qs-footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div className="qs-footer-col">
          <h4>Contact Us</h4>
          <p><FiPhone /> +91 75503 13614</p>
          <p>
            <FiGlobe />
            <a
              href="https://www.queensoft.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#d1d5db', textDecoration: 'none', marginLeft: '8px' }}
            >
              www.queensoft.in
            </a>
          </p>
          <p><FiMail /> queensoftsocial@gmail.com</p>
          <p><FiMapPin /> Tuticorin, Tamil Nadu, India</p>
        </div>

        <div className="qs-footer-col">
          <h4>Follow Us</h4>
          <div className="qs-footer-social-buttons">
            <a href="https://www.facebook.com/queensoft2025/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF /> Facebook
            </a>
            <a href="https://www.instagram.com/queensoft2025/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://x.com/Queensoft2025" target="_blank" rel="noopener noreferrer">
              <FaTwitter /> Twitter
            </a>
            <a href="https://www.linkedin.com/company/106696106/admin/dashboard/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /> LinkedIn
            </a>
            <a href="https://www.threads.net/@queensoft2025" target="_blank" rel="noopener noreferrer">
              <SiThreads /> Threads
            </a>
            <a href="https://in.pinterest.com/queensoft2025/" target="_blank" rel="noopener noreferrer">
              <FaPinterest /> Pinterest
            </a>
            <a href="https://www.youtube.com/@Queensoft_2025" target="_blank" rel="noopener noreferrer">
              <FaYoutube /> YouTube
            </a>
            <a href="https://wa.me/917550313614" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="qs-footer-bottom">
  © 2025 <a href="https://www.queensoft.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Queensoft</a>. All rights reserved.
</div>
    </footer>
  );
};

export default Footer;
