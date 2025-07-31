// File: GraphicDesigning.jsx
import React from "react";
import "./GraphicDesigning.css";

const GraphicDesigning = () => {
  return (
    <div className="graphic-container">
      <div className="hero">
        <h1>🎨 Graphic Designing Services</h1>
        <p>We bring your ideas to life with creative visuals that leave a lasting impression.</p>
      </div>

      <div className="section">
        <h2>🧠 Why Design Matters</h2>
        <p>
          Great design builds trust, improves user experience, and makes your brand stand out.
          Whether it’s social media, brochures, or logos — visual appeal drives results.
        </p>
      </div>

      <div className="grid">
        <div className="card">📱 Social Media Posts</div>
        <div className="card">📄 Flyers & Brochures</div>
        <div className="card">🧾 Menu Cards & Labels</div>
        <div className="card">🎬 Video & Banner Design</div>
      </div>

      <div className="cta">
        <h3>Ready to Elevate Your Brand?</h3>
        <button>Contact Us Now</button>
      </div>
    </div>
  );
};

export default GraphicDesigning;
