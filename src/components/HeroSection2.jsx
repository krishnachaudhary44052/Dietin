import React from 'react';
import '../style/HeroSection2.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="container1">
        <img className="hero-image1" src="./images/14.jpg" alt="Healthy Meals" />
      </div>

      <div className="hero-overlay d-flex flex-column justify-content-center align-items-center text-center text-white">
        <h1 className="fw-bold fst-italic health">Healthier Meals, On the Go</h1>
      </div>
      <div className='hero-overlay1 d-flex justify-content-center'>
        <p className="your-in text-white">
          your in-office, intelligent, health-first vending partner offering curated, nutritionist-approved & chef-prepared meals on demand. It’s not just food; it’s a commitment to wellbeing.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
