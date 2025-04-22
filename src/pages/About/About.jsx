import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <section className="about-banner">
        <h1>About Us</h1>
        <p>Get to know more about who we are and what we stand for.</p>
      </section>

      {/* Who We Are Section */}
      <section className="about-main two-column">
        <div className="about-image">
          <img src="/images/about-team.jpg" alt="Our Team" />
        </div>
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            We are a forward-thinking company dedicated to delivering modern solutions 
            with a touch of innovation. Our team is passionate, agile, and focused on excellence.
          </p>

          <h3>Our Vision</h3>
          <p>
            To be a global leader in innovative technologies, transforming industries 
            through creativity and cutting-edge solutions.
          </p>

          <h3>Our Mission</h3>
          <p>
            To empower businesses and individuals with smart, efficient, and 
            reliable digital products that make a difference.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {[
            { img: "/images/value1.png", title: "Innovation" },
            { img: "/images/value2.png", title: "Integrity" },
            { img: "/images/value3.png", title: "Excellence" },
            { img: "/images/value4.png", title: "Teamwork" },
            { img: "/images/value5.png", title: "Customer Focus" }
          ].map((value, index) => (
            <div className="value-item" key={index}>
              <img src={value.img} alt={value.title} />
              <h4>{value.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Final Message */}
      <section className="about-final">
        <p>
          At our core, we believe in pushing boundaries and embracing challenges. 
          Join us on our journey to shape the future with integrity, passion, and purpose.
        </p>
      </section>
    </div>
  );
};

export default About;
