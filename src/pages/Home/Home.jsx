import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import {
  FaBullhorn,
  FaGoogle,
  FaLaptopCode,
  FaPaintBrush,
  FaChartLine,
  FaAd,
} from "react-icons/fa";

import "./Home.css";
import Slider from "../../components/Slider/Slider";

const services = [
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "Grow your business with tailored digital campaigns.",
  },
  {
    icon: <FaGoogle />,
    title: "Google My Business",
    desc: "Boost local visibility and reach nearby customers.",
  },
  {
    icon: <FaAd />,
    title: "Google Ads",
    desc: "Maximize ROI with result-driven ad strategies.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Website Designing",
    desc: "Create stunning websites that convert.",
  },
  {
    icon: <FaChartLine />,
    title: "Branding & SEO",
    desc: "Elevate your brand and dominate search results.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Designing",
    desc: "Designs that captivate and communicate.",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Image Slider */}
      <Slider />

      {/* Welcome Banner */}
      <section className="banner">
        <h1>
          Welcome to <span>Queensoft</span>
        </h1>
        <p>Your One-Stop Solution for Digital Success!</p>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          At Queensoft, we are passionate about transforming your digital
          presence. Our team of creative minds and technical experts delivers
          top-notch digital marketing, web design, and branding solutions to
          help your business grow.
        </p>
      </section>

      {/* Services Section */}
      <section className="service-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-details">
  <h2>Contact Information</h2>
  <p>We’re here to help! Reach out to us through any of the following methods:</p>

  <div className="contact-cards">
    <div className="contact-card">
      <i className="fas fa-phone-alt"></i>
      <h4>Phone</h4>
      <p>+91 98765 43210</p>
    </div>
    <div className="contact-card">
      <i className="fas fa-envelope"></i>
      <h4>Email</h4>
      <p>support@queensoft.in</p>
    </div>
    <div className="contact-card">
      <i className="fas fa-map-marker-alt"></i>
      <h4>Address</h4>
      <p>123, Anna Nagar, Thoothukudi, Tamil Nadu - 628001</p>
    </div>
    <div className="contact-card">
      <i className="fas fa-clock"></i>
      <h4>Working Hours</h4>
      <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
    </div>
  </div>
</section>


      {/* Testimonial Section */}
      <section className="testimonial-swiper-section">
        <h2>What Our Clients Say</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[1, 2, 3].map((id) => (
            <SwiperSlide key={id}>
              <div className="testimonial-slide">
                <p className="quote">
                  {id === 1 &&
                    "Queensoft helped us scale online with amazing design & SEO results!"}
                  {id === 2 &&
                    "Their professionalism and communication were top-notch. Loved the branding!"}
                  {id === 3 &&
                    "Best web development company I’ve worked with. Highly recommended!"}
                </p>
                <div className="client-details">
                  <img src={`/images/client${id}.jpg`} alt={`Client ${id}`} />
                  <div>
                    <h4>
                      {id === 1
                        ? "Vignesh K"
                        : id === 2
                        ? "Nisha P"
                        : "Dinesh Raj"}
                    </h4>
                    <span>
                      {id === 1
                        ? "Founder, DigiStart"
                        : id === 2
                        ? "Creative Head, Bloom"
                        : "CEO, Raj Group"}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Contact Section */}
      <section className="contact-modern-section">
        <div className="contact-modern-container">
          {/* Left: Contact Form */}
          <div className="contact-form-box">
            <div className="contact-modern-header">
              <h2>Get In Touch</h2>
              <p>We’d love to hear from you! Fill out the form below to get started.</p>
            </div>

            <form className="contact-modern-form">
              <div className="input-group">
                <i className="fas fa-user"></i>
                <input type="text" required />
                <label>Name</label>
              </div>

              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input type="email" required />
                <label>Email</label>
              </div>

              <div className="input-group">
                <i className="fas fa-phone-alt"></i>
                <input type="tel" required />
                <label>Phone</label>
              </div>

              <div className="input-group textarea">
                <i className="fas fa-comment-dots"></i>
                <textarea required></textarea>
                <label>Your Message</label>
              </div>

              <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
          </div>

          {/* Right: Image */}
          <div className="image-container">
            <img src="/images/appointment.jpg" alt="Appointment" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
