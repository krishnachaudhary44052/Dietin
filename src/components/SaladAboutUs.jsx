import React from "react";
import "../style/SaladAboutUs.css";
import { Link } from "react-router-dom";

const SaladHeroSection = ({ title, visual }) => {
  const btnVisible = Boolean(visual);

  return (
    <section className="salad-about-section">
      <div className="container py-4">
        <h1 className="text-center">{title}</h1>
        <div className="row align-items-center">
          
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 salad-text-col">
            <h3 className="salad-about-title">It all began with a seed</h3>
            <p className="salad-about-text">
              A seed nurtured in soil that was pure, untouched, and organic.
              From farms that believed in patience, care, and honesty. That seed
              grew into an idea — that real health starts not in a lab, not in a
              packet, but in nature itself.
            </p>
            <h5>From that idea, Dietin was born.</h5>
            <p className="salad-about-text">
              We asked ourselves a simple question: What if food could be more
              than just taste? What if it could heal, energize, and transform
              lives?
            </p>
            <p className="salad-about-text">
              So we set out on a journey. A journey where nutrition wasn’t an
              afterthought, but the heart of everything. Where every meal was
              designed not just for hunger, but for your health, your lifestyle,
              even the battles you quietly face — diabetes, heart concerns,
              everyday fatigue.
            </p>
            <p className="salad-about-text">
              With every plate, we brought together two worlds — the precision
              of science and the artistry of cooking. Dietitians to design.
              Chefs to craft. Nature to inspire.
            </p>
            <p className="salad-about-text">
              What started as a handful of thoughtfully made meals has grown
              into something bigger — a community, a movement, a promise.
            </p>
            <p className="salad-about-text">
              Today, Dietin stands for food that is honest, personal, and
              powerful. Food that doesn’t just fill you, but fuels you. Food
              that doesn’t just taste good, but does good.
            </p>
            <p className="salad-about-text">
              Because for us, it was never just about starting a company.
              It was about planting a seed. And watching it grow into something
              that could change lives — one meal at a time.
              <strong> Dietin — Nutrition, Refined.</strong>
            </p>

            {btnVisible && (
              <Link to="/about">
                <button className="saladbtn salad-about-btn ">Our Story</button>
              </Link>
            )}
          </div>

          {/* Right Column - Images */}
          <div className="col-lg-6 col-md-12 salad-image-col">
            <div className="row g-2">
              <div className="col-6 outter-class">
                <img
                  src="/images/saladaboutus.png"
                  alt="Salad brand story"
                  className="salad-image-fluid salad-rounded salad-shadow-sm"
                />
              </div>
              <div className="col-6 innerclass">
                <div className="mb-2">
                  <img
                    src="/images/saladaboutus1.png"
                    alt="Salad preparation"
                    className="salad-image-fluid salad-rounded salad-shadow-sm"
                  />
                </div>
                <div>
                  <img
                    src="/images/saladaboutus2.png"
                    alt="Salad ingredients"
                    className="salad-image-fluid salad-rounded salad-shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SaladHeroSection;
