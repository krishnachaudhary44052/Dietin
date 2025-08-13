import React from 'react';
import '../style/DietInExeccutive.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DietinExecutive = () => {
  return (
    <div className="dietin-container container mt-5">
      <div className="dietin-logo text-start">

      </div>

      <div className="executive-title mt-4">
        <h2> <span className="highlight">Introduction</span></h2>
      </div>

      <p className="description mt-4">
        In a world driven by speed, stress, and screen time, we’re flipping the narrative on corporate wellness.
        Enter Dietin Freeze – your in-office, intelligent, health-first vending partner offering curated,
        nutritionist-approved & chef-prepared meals on demand. It’s not just food; it’s a commitment to wellbeing.
      </p>

      <p className="description">
        Indian corporates today face a silent productivity killer – poor nutrition. 
        From skipped breakfasts and processed snacks to energy dips and mounting stress, 
        the cost of unhealthy eating is huge:
      </p>

      <ul className="description">
        <li>Decreased employee performance</li>
        <li>More sick leaves & health claims</li>
        <li>Low morale and rising burnout</li>
        <li>Lack of on-site nutritious options</li>
      </ul>

      <p className="description">
        The gap is clear: an urgent need for healthy, accessible, and delightful meals, right at work.
      </p>

      <div className="stats-row  text-center  mt-4">
        <div className=" stat-box px-2">73%<br /><span>skip breakfast</span></div>
        <div className=" stat-box px-2">60%<br /><span>consume junk</span></div>
        <div className="stat-box">83%<br /><span>HRs prioritize wellness</span></div>
        <div className=" stat-box">18%<br /><span>increase in healthcare costs</span></div>
      </div>

      <p className="performance-note mt-4">
        <strong>Healthy food access isn’t just a perk — it’s a performance multiplier.</strong>
      </p>
    </div>
  );
};

export default DietinExecutive;
