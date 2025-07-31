import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Add this if you're using routing
import teamImage from '../../assets/team1.jpg';
import './About.css';

import {
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaChartLine,
} from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const About = () => {
  return (
    <div className="about-page">

      {/* Banner Section */}
      <section className="banner">
        <motion.div
          className="banner-content"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1>
            <span>Queensoft</span> — Your Digital Growth Partner
          </h1>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <motion.div
          className="about-image-column"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
       <img src={teamImage} alt="About Queensoft" />
        </motion.div>

        <motion.div
          className="about-content-column"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          variants={fadeUp}
        >
          <h2>Who We Are</h2>
          <p>
            We are a dynamic team of creators, strategists, and developers passionate about helping your business grow online.
          </p>
          <ul className="about-list">
            <li><strong>🚀 Website Designing:</strong> Modern, responsive websites that convert.</li>
            <li><strong>📈 Digital Marketing:</strong> Social media, Google Ads, and campaigns that deliver results.</li>
            <li><strong>🔍 SEO Services:</strong> Rank higher, grow faster with expert search optimization.</li>
          </ul>
        </motion.div>
      </section>

      {/* Vision and Mission */}
      <section className="vision-mission">
        <motion.div className="vision-box" variants={fadeUp} initial="hidden" whileInView="visible">
          <h3>Our Vision</h3>
          <p>To become the go-to creative tech partner for brands looking to scale online.</p>
        </motion.div>

        <motion.div className="mission-box" variants={fadeUp} initial="hidden" whileInView="visible" custom={0.2}>
          <h3>Our Mission</h3>
          <p>Empowering businesses with strategy, design, and technology that inspires.</p>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp}>What We Believe In</motion.h2>
        <div className="values-grid">
          {[
            { icon: <FaHandshake />, title: 'Sincerity', desc: 'We build trust through honesty.' },
            { icon: <FaLightbulb />, title: 'Innovation', desc: 'Fresh ideas. Bold execution.' },
            { icon: <FaUsers />, title: 'Teamwork', desc: 'Stronger together with collaboration.' },
            { icon: <FaRocket />, title: 'Excellence', desc: 'We go above and beyond.' },
            { icon: <FaChartLine />, title: 'Growth', desc: 'Learning and evolving continuously.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="value-box"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i * 0.2}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engagement Section */}
      <section className="cta-section">
        <motion.div className="cta-box" initial="hidden" whileInView="visible" variants={fadeUp}>
          <h2>Let’s Build Something Great Together</h2>
          <p>Let’s work together to make your vision a reality.</p>
          <Link to="/contact">
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
