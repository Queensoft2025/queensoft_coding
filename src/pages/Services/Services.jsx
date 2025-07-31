import React from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    icon: <i className="fas fa-bullhorn"></i>,
    title: 'Digital Marketing',
    desc: 'Grow your business with tailored digital campaigns.',
    route: '/digital-marketing',
  },
  {
    icon: <i className="fab fa-google"></i>,
    title: 'Google My Business',
    desc: 'Boost local visibility and reach nearby customers.',
    route: '/google-my-business',
  },
  {
    icon: <i className="fas fa-ad"></i>,
    title: 'Google Ads',
    desc: 'Maximize ROI with result-driven ad strategies.',
    route: '/google-ads',
  },
  {
    icon: <i className="fas fa-laptop-code"></i>,
    title: 'Website Designing',
    desc: 'Create stunning websites that convert.',
    route: '/website-designing',
  },
  {
    icon: <i className="fas fa-chart-line"></i>,
    title: 'Branding & SEO',
    desc: 'Elevate your brand and dominate search results.',
    route: '/branding-seo',
  },
  {
    icon: <i className="fas fa-paint-brush"></i>,
    title: 'Graphic Designing',
    desc: 'Designs that captivate and communicate.',
    route: '/graphic-designing',
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>

      {/* Grid Display Section */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            onClick={() => navigate(service.route)}
            style={{ cursor: 'pointer' }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
