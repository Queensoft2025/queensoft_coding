import React from "react";
import { motion } from "framer-motion";
import "./GoogleAds.css";

const GoogleAds = () => {
  return (
    <div className="ads-container">
      {/* Hero Section */}
      <motion.div className="ads-box hero-box" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1>📢 Google Ads Services</h1>
        <p>
          Get more leads and sales instantly by running targeted ads on Google Search, YouTube & Display.
        </p>
      </motion.div>

      {/* What are Google Ads */}
      <motion.div className="ads-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="center-heading">💡 What are Google Ads?</h2>
        <p className="center-text">
          Google Ads is a paid advertising platform that lets you appear at the top of Google Search or across millions of websites & apps using text, image, or video ads.
        </p>
      </motion.div>

      {/* Why Google Ads */}
      <motion.div className="ads-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="center-heading">🚀 Why Use Google Ads?</h2>
        <div className="grid-box">
          {[
            "🎯 Target the right people at the right time",
            "📈 Instant traffic and leads",
            "💰 Full control over budget & ROI",
            "📊 Real-time performance tracking"
          ].map((point, index) => (
            <div key={index} className="item-box">{point}</div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Queensoft */}
      <motion.div className="ads-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="center-heading">🤝 Why Choose Queensoft?</h2>
        <div className="grid-box">
          {[
            "✅ Certified Google Ads Experts",
            "📊 Weekly Performance Reports",
            "💡 Smart Targeting Strategies",
            "🎯 High-ROI Campaigns"
          ].map((point, index) => (
            <div key={index} className="item-box">{point}</div>
          ))}
        </div>
      </motion.div>

      {/* Plans Section */}
      <motion.div className="ads-box plan-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="center-heading">📦 Our Google Ads Plans</h2>
        <div className="plans-grid">
          {[
            {
              title: "Starter",
              price: "₹3,999",
              features: ["Search Campaign", "1 Keyword Set", "Weekly Report"]
            },
            {
              title: "Growth",
              price: "₹7,999",
              features: ["Search + Display", "3 Keyword Sets", "Conversion Tracking"]
            },
            {
              title: "Pro",
              price: "₹14,999",
              features: ["All Campaign Types", "A/B Testing", "Full Analytics + Support"]
            }
          ].map((plan, i) => (
            <div key={i} className="plan-card">
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}/month</p>
              <ul>
                {plan.features.map((f, j) => (
                  <li key={j}>✔ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div className="ads-box cta-box" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="center-heading">📞 Ready to Launch Your Campaign?</h2>
        <button className="cta-btn">Contact Queensoft Now</button>
      </motion.div>
    </div>
  );
};

export default GoogleAds;
