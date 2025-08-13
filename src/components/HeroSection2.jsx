import React from 'react';
import '../style/HeroSection2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video/hero_mode.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="text-center text-white">
          <h1 className="fw-bold fst-italic">Healthier Meals, On the Go</h1>
         
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
