import React from "react";
import "./DigitalMarketingPage.css";

const DigitalMarketingPage = () => {
  return (
    <div className="digital-container">

      {/* Hero Section */}
      <div className="box hero-box">
        <h1>🚀 Welcome to Queensoft Digital Marketing</h1>
        <p>We help businesses shine online — through social media, SEO, ads, branding and more.</p>
      </div>

      {/* What is Digital Marketing */}
      <div className="box">
        <h2 className="center-heading">💡 What is Digital Marketing?</h2>
        <p className="center-text">
          Digital marketing means promoting your business through online platforms like websites, social media,
          Google Ads, and email campaigns — reaching the right customers at the right time.
        </p>
      </div>

      {/* Why Digital Marketing */}
      <div className="box">
        <h2 className="center-heading">🎯 Why Do You Need Digital Marketing?</h2>
        <div className="grid-box">
          {[
            "🌍 Reach a global audience 24/7",
            "📊 Track results in real-time",
            "📱 Engage on mobile & social apps",
            "💸 More affordable than TV or paper ads",
          ].map((text, i) => (
            <div className="item-box" key={i}>{text}</div>
          ))}
        </div>
      </div>

      {/* Why Choose Queensoft */}
      <div className="box">
        <h2 className="center-heading">🤝 Why Choose Queensoft?</h2>
        <div className="grid-box">
          {[
            "✅ 10+ years of experience",
            "📈 Custom strategies that work",
            "🎨 Creative content team",
            "📞 24/7 support for clients",
          ].map((text, i) => (
            <div className="item-box" key={i}>{text}</div>
          ))}
        </div>
      </div>

      {/* Plans */}
      <div className="box plan-box">
        <h2 className="center-heading">📦 Our Digital Marketing Plans</h2>
        <div className="plans-grid">
          {[
            {
              title: "Starter",
              price: "₹5,999",
              features: ["1 Platform", "5 Posts", "Basic SEO"]
            },
            {
              title: "Standard",
              price: "₹11,999",
              features: ["3 Platforms", "12 Posts", "SEO + Ads"]
            },
            {
              title: "Premium",
              price: "₹24,999",
              features: ["All Platforms", "Daily Posts", "SEO, Ads, Reports"]
            }
          ].map((plan, i) => (
            <div className="plan-card" key={i}>
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}/month</p>
              <ul>
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="box cta-box">
        <h2 className="center-heading">📞 Let’s Grow Your Business Today!</h2>
        <button className="cta-btn">Contact Queensoft Now</button>
      </div>

    </div>
  );
};

export default DigitalMarketingPage;
