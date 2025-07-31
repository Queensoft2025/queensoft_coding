import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1>Contact Queensoft</h1>
        <p>Let's work together to grow your brand online.</p>
      </div>

      <div className="contact-wrapper">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Your Mobile Number" required />
            <textarea placeholder="Your Services" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info p-4 rounded-lg shadow-md bg-white max-w-sm mx-auto">
          <h2 className="text-xl font-semibold mb-4">Contact Details</h2>

          <div className="info-item flex items-center mb-3">
            <i className="fas fa-envelope text-purple-600 mr-2"></i>
            <a href="mailto:queensoftsocial@gmail.com" className="hover:underline">
              queensoftsocial@gmail.com
            </a>
          </div>

          <div className="info-item flex items-center mb-3">
            <i className="fas fa-phone-alt text-purple-600 mr-2"></i>
            <a href="tel:+917550313614" className="hover:underline">
              +91 75503 13614
            </a>
          </div>

          <div className="info-item flex items-center mb-3">
            <i className="fas fa-map-marker-alt text-purple-600 mr-2"></i>
            <a 
              href="https://www.google.com/maps/place/Tuticorin,+Tamil+Nadu,+India/@8.7642,78.1346,14z"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Tuticorin, Tamil Nadu, India
            </a>
          </div>

          <div className="info-item flex items-center mb-4">
            <i className="fas fa-globe text-purple-600 mr-2"></i>
            <a 
              href="https://www.queensoft.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              www.queensoft.in
            </a>
          </div>

          {/* Embedded Google Map */}
          <iframe
            title="Queensoft Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.155824428785!2d78.13454307501423!3d8.76416659366767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0448d1c0f1144d%3A0x81a3f850e5cc2f88!2sThoothukudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1628251167300!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
