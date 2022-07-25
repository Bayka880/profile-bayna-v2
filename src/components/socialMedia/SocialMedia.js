import React from "react";
import "./SocialMedia.css";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a
        href="https://github.com/Bayka880"
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a
        href="mailto:bayka880@gmail.com"
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-google"></i>
        <span></span>
      </a>
      <a
        href="https://www.facebook.com/BayanjargalPv/"
        className="icon-button facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook"></i>
        <span></span>
      </a>
      <a
        href="https://www.instagram.com/bayna19/"
        className="icon-button instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
        <span></span>
      </a>
    </div>
  );
}
