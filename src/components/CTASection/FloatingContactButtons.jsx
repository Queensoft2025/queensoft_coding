// src/components/FloatingContactButtons.jsx
import React from "react";
import "./FloatingContactButtons.css";
import whatsappIcon from "./assets/whatsapp.jpg"; // correct path to your icon

export default function FloatingContactButtons() {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/919876543210" // change to your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="icon" />
      </a>
    </div>
  );
}
