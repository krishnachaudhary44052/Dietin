import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/HowWeWork.css"; // External styles for the component

const HowWeWork = () => {
  return (
    <section className="how-we-work py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-2">
          <span className="text-primary">How We </span>
          <span className="text-success">Work</span>
        </h2>
        <p className="text-muted mb-5">A Simple, Personalized Process to Serve You Better</p>

        <div className="row justify-content-center align-items-center">
          {/* Left side */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="step-text text-md-end pe-md-4">
              <h5 className="fw-bold">Choose Your Subscription</h5>
              <p>
                Share your diet chart from your doctor, trainer, or dietitian.
                We’ll prepare meals exactly as prescribed and deliver them fresh to your doorstep.
              </p>

              <h5 className="fw-bold mt-5">Book A Trial</h5>
              <p>
                Preparing for or recovering from surgery? We craft meals to help manage your sugar levels, blood pressure, and other specific needs.
              </p>
            </div>
          </div>

          {/* Center Circle */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <div className="circle-container mx-auto">
              <div className="circle-content">
                <div className="dietin-logo text-primary fw-bold">Dietin</div>
                <div className="desc text-muted small">Authentic | Clean | Therapeutic</div>
              </div>
              <div className="step-number step1">1</div>
              <div className="step-number step2">2</div>
              <div className="step-number step3">3</div>
              <div className="step-number step4">4</div>
            </div>
          </div>

          {/* Right side */}
          <div className="col-12 col-md-4">
            <div className="step-text text-md-start ps-md-4">
              <h5 className="fw-bold">Consume the Delicious Meals</h5>
              <p>
                No specific plan? No problem. If you're in the mood for wholesome,
                clean meals, just place an order. We'll deliver dishes that nourish and satisfy.
              </p>

              <h5 className="fw-bold mt-5">Select Your Days</h5>
              <p>
                Looking to shed some kilos? Our experts provide personalized diet plans,
                consultations, and freshly cooked meals delivered to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
