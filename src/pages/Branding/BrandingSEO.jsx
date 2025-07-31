import React from 'react';
import './BrandingSEO.css';
import { FaSearch, FaCog, FaLink, FaChartLine } from 'react-icons/fa';

const BrandingSEO = () => {
  return (
    <div className="branding-container">
      <section className="branding-hero">
        <h1>🚀 Boost Your Brand with SEO</h1>
        <p>Unlock the power of search engines and grow your visibility online. From keyword optimization to technical SEO, we handle it all.</p>
        <ul className="seo-services">
          <li><FaSearch /> Keyword Research</li>
          <li><FaCog /> On-Page SEO</li>
          <li><FaLink /> Backlink Building</li>
          <li><FaChartLine /> Performance Tracking</li>
        </ul>
      </section>

      <section className="seo-plans">
        <h2>✨ Our SEO Plans</h2>
        <div className="plans-container">
          <div className="plan-card">
            <h3>Basic Plan</h3>
            <p>Perfect for startups and small businesses.</p>
            <ul>
              <li>✅ 5 Keywords Optimization</li>
              <li>✅ Basic Site Audit</li>
              <li>✅ Monthly Report</li>
            </ul>
            <p className="price">₹4,999 / month</p>
          </div>

          <div className="plan-card popular">
            <h3>Pro Plan</h3>
            <p>Best for growing businesses.</p>
            <ul>
              <li>✅ 15 Keywords Optimization</li>
              <li>✅ On-Page SEO</li>
              <li>✅ Google Analytics Setup</li>
              <li>✅ 2 Blog Posts / month</li>
            </ul>
            <p className="price">₹9,999 / month</p>
          </div>

          <div className="plan-card">
            <h3>Elite Plan</h3>
            <p>Advanced strategy for big brands.</p>
            <ul>
              <li>✅ 30+ Keywords</li>
              <li>✅ Technical SEO</li>
              <li>✅ Weekly Reporting</li>
              <li>✅ Dedicated Manager</li>
            </ul>
            <p className="price">₹19,999 / month</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandingSEO;
