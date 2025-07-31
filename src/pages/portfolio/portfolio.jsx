import React from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const clientWorks = [
  {
    title: "School & College Websites",
    description: "Educational institutions with result, gallery, and admin panels.",
    icon: "🎓",
  },
  {
    title: "Beauty Parlour Websites",
    description: "Bridal booking, services, testimonials, and Instagram integration.",
    icon: "💄",
  },
  {
    title: "Mobile Shop Websites",
    description: "Product showcase, EMI details, and offers.",
    icon: "📱",
  },
  {
    title: "Call Taxi Booking Sites",
    description: "Booking forms, location-based service display, contact integration.",
    icon: "🚖",
  },
  {
    title: "Hospital & Clinic Websites",
    description: "Doctor profiles, appointment booking, services, and testimonials.",
    icon: "🏥",
  },
  {
    title: "E-commerce Websites",
    description: "Shopping cart, payment gateway, product filters.",
    icon: "🛒",
  },
  {
    title: "NGO & Trust Websites",
    description: "Mission, gallery, donation link, contact forms.",
    icon: "🤝",
  },
  {
    title: "Personal Branding Websites",
    description: "Portfolios, speaker bios, social media links.",
    icon: "🌟",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-client-section">
      <motion.h1
        className="portfolio-client-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Client Industries We Serve
      </motion.h1>
      <motion.p
        className="portfolio-client-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        We've built tailored digital experiences across a wide range of industries.
      </motion.p>

      <div className="portfolio-client-grid">
        {clientWorks.map((item, index) => (
          <motion.div
            className="portfolio-client-card"
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="portfolio-client-icon">{item.icon}</div>
            <h3 className="portfolio-client-name">{item.title}</h3>
            <p className="portfolio-client-desc">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
