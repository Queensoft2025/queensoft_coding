import React from "react";
import { motion } from "framer-motion";
import "./GoogleMyBusiness.css";

const GoogleMyBusiness = () => {
  return (
    <div className="gmb-container">

      {/* Hero Section */}
      <motion.div className="gmb-box hero-box" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1>📍 Google My Business (GMB)</h1>
        <p>
          Be discoverable on Google Search & Maps. Let your local customers find you first with a professional GMB listing!
        </p>
      </motion.div>

      {/* What is GMB */}
      <motion.div className="gmb-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="center-heading">💡 What is Google My Business?</h2>
        <p className="center-text">
          GMB is a free tool that allows your business to appear on Google Search, Google Maps, and local search results. It's your digital storefront!
        </p>
      </motion.div>

      {/* Benefits */}
      <motion.div className="gmb-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="center-heading">🎯 Key Benefits</h2>
        <div className="grid-box">
          {[
            "📍 Show up on Google Maps & Nearby",
            "⭐ Collect 5-star Reviews from Customers",
            "🕒 Show Working Hours & Location",
            "💬 Chat with Customers Directly",
            "📞 Get Direct Calls from Google Search"
          ].map((benefit, index) => (
            <div key={index} className="item-box">{benefit}</div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Queensoft */}
      <motion.div className="gmb-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="center-heading">🤝 Why Choose Queensoft?</h2>
        <div className="grid-box">
          {[
            "✅ Verified GMB Setup Experts",
            "🧠 Local SEO Optimization",
            "🎯 Fast Approval & Listing Boost",
            "📈 Monthly GMB Insights Report"
          ].map((point, idx) => (
            <div key={idx} className="item-box">{point}</div>
          ))}
        </div>
      </motion.div>

      {/* Plans */}
      <motion.div className="gmb-box plan-box" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="center-heading">📦 GMB Setup Plans</h2>
        <div className="plans-grid">
          {[
            {
              title: "Basic",
              price: "₹2,999",
              features: ["Business Listing", "Location Pin Setup", "Basic Info Upload"]
            },
            {
              title: "Standard",
              price: "₹4,999",
              features: ["Verified GMB", "Logo + Photos", "SEO Optimization"]
            },
            {
              title: "Pro",
              price: "₹8,999",
              features: ["Full Setup", "Monthly Insights", "Support & Updates"]
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
      <motion.div className="gmb-box cta-box" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="center-heading">📞 Want your business on Google?</h2>
        <button className="cta-btn">Get Started with Queensoft</button>
      </motion.div>

    </div>
  );
};

export default GoogleMyBusiness;
