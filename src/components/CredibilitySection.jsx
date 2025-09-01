import React from "react";
import "../style/CredibilitySection.css";
import { FaUserMd, FaUtensils, FaFlask, FaUsers, FaLeaf } from "react-icons/fa";

const CredibilitySection = () => {
  return (
    <section className="container credibility-section">
      <div className="credibility-text">
        <h2>Pillars of Our Credibility</h2>
        <p>
          At Dietin, our foundation is built on trust, expertise, and a commitment 
          to making healthy eating effortless. These five pillars define who we are 
          and guide everything we do.
        </p>
        <img src="/images/order.png" alt="Credibility Background" className="img-fluid" />
      </div>

      <div className="credibility-grid">
        <div className="pillar-card">
          <FaUserMd className="pillar-icon" />
          <h4>Backed by Experts</h4>
          <p>Meals designed and approved by certified dietitians.</p>
        </div>
        <div className="pillar-card">
          <FaUtensils className="pillar-icon" />
          <h4>Chef-Crafted</h4>
          <p>Prepared by professional chefs for taste + nutrition.</p>
        </div>
        <div className="pillar-card">
          <FaFlask className="pillar-icon" />
          <h4>Science-Driven</h4>
          <p>Nutrition plans rooted in research and tailored to health needs.</p>
        </div>
        <div className="pillar-card">
          <FaUsers className="pillar-icon" />
          <h4>Customer Trust</h4>
          <p>Growing community of people choosing Dietin daily.</p>
        </div>
        <div className="pillar-card">
          <FaLeaf className="pillar-icon" />
          <h4>Quality First</h4>
          <p>Sourced from organic farms and hygienically prepared kitchens.</p>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
