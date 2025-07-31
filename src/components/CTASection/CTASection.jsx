import React from 'react';
import { motion } from 'framer-motion';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="cta-content"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="cta-box"
        >
          <h2>Have a Project in Mind?</h2>
          <p>Let’s build something amazing together. Schedule a free consultation or explore our services now!</p>

          <div className="cta-buttons">
            <button className="cta-button primary">Schedule Now</button>
            <button className="cta-button secondary">Contact Us</button>
            <button className="cta-button primary">Explore Services</button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTASection;
