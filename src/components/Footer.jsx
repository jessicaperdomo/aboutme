import React from "react";
import '../App.css';

import emailIcon from "../assets/email.svg";
import whatsappIcon from "../assets/wpp.svg";
import linkedinIcon from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="title1">Feel free to call me!</p>

      <address className="contactArea">
        <a
          className="contactItem"
          href="mailto:oujessy.p@gmail.com"
        >
          <img src={emailIcon} alt="Email" />
          <span>Email</span>
        </a>

        <a
          className="contactItem"
          href="https://wa.me/5518996002789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" />
          <span>WhatsApp</span>
        </a>

        <a
          className="contactItem"
          href="https://www.linkedin.com/in/jessica-perdomo-0317b5166/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
          <span>LinkedIn</span>
        </a>
      </address>

      <p className="footer-copy">
        ©2025 – Jessica Perdomo Alves
      </p>
    </footer>
  );
}

