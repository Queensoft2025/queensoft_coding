import React from "react";
import { motion } from "framer-motion";
import "./WebsiteDesigning.css";

const WebsiteDesigning = () => {
  return (
    <div className="web-container">
      {/* Hero Section */}
      <motion.div className="web-box hero-box" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1>🌐 Website Designing</h1>
        <p>Build a stunning, user-friendly website that elevates your brand presence and boosts your sales.</p>
      </motion.div>

      {/* What is Website Designing */}
      <motion.div className="web-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="center-heading">💡 What is Website Designing?</h2>
        <p className="center-text">
          Website designing is the process of creating visually appealing, responsive, and functional websites tailored to your business needs.
        </p>
      </motion.div>

      {/* Importance of a Website */}
      <motion.div className="web-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="center-heading">🚀 Why You Need a Great Website?</h2>
        <div className="grid-box">
          {[
            "📱 Mobile Friendly & Fast Loading",
            "🎯 Showcases Your Brand Identity",
            "🧠 Builds Customer Trust",
            "🛒 Increases Leads and Sales"
          ].map((point, i) => (
            <div key={i} className="item-box">{point}</div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Queensoft */}
      <motion.div className="web-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="center-heading">🤝 Why Choose Queensoft?</h2>
        <div className="grid-box">
          {[
            "✅ Customized Modern Design",
            "⚙️ SEO & Mobile Optimized",
            "🧑‍💻 Expert Development Team",
            "📞 Ongoing Support & Maintenance"
          ].map((item, idx) => (
            <div key={idx} className="item-box">{item}</div>
          ))}
        </div>
      </motion.div>

      {/* Plans Section */}
      <motion.div className="web-box plan-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="center-heading">📦 Website Design Packages</h2>
        <div className="plans-grid">
          {[
            {
              title: "Basic",
              price: "₹4,999",
              features: ["1 Page Static", "Responsive Design", "Free Hosting (1 Month)"]
            },
            {
              title: "Business",
              price: "₹9,999",
              features: ["Up to 5 Pages", "Contact Form", "SEO Ready"]
            },
            {
              title: "Pro",
              price: "₹14,999",
              features: ["Dynamic CMS", "Admin Panel", "Full Customization"]
            }
          ].map((plan, i) => (
            <div key={i} className="plan-card">
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <ul>
                {plan.features.map((f, j) => (
                  <li key={j}>✔ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div className="web-box cta-box" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="center-heading">📞 Ready to Build Your Online Presence?</h2>
        <button className="cta-btn">Talk to Queensoft Now</button>
      </motion.div>
    </div>
  );
};

export default WebsiteDesigning;
