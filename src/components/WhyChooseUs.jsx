import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us py-5">
      <div className="container text-center">
        <h2 className="main-heading">Why Choose Us?</h2>
        <p className="sub-heading">
          Personalized meals, expert guidance, and doorstep delivery — everything you need for a healthier you.
        </p>

        <div className="row align-items-center mt-5">
          {/* Left Features */}
          <div className="col-4 col-lg-4 d-flex flex-column align-items-end gap-4 text-end">
            <div className="feature">
              <h5 className="text-success fw-bold">MADE FRESH</h5>
              <p>Always fresh, never frozen</p>
              <div className="arrow arrow-up-left"></div>
            </div>
            <div className="feature">
              <h5 className="text-success fw-bold">SUPERVISED BY DIETICIAN</h5>
              <p>Nutritious, affordable meals built for busy student life.</p>
              <div className="arrow arrow-left"></div>
            </div>
            <div className="feature">
              <h5 className="text-success fw-bold">HYGIENIC AND ORGANIC MEAL</h5>
              <p>Daily sanitisation, temp checks, contactless delivery.</p>
              <div className="arrow arrow-down-left"></div>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-4 col-lg-4 d-flex justify-content-center my-4 my-lg-0">
            <img
              src="./images/image.png"
              alt="Meal Package"
              className="img-fluid center-image"
            />
          </div>

          {/* Right Features */}
          <div className="col-4 col-lg-4 d-flex flex-column align-items-start gap-4 text-start">
            <div className="feature">
              <h5 className="text-success fw-bold">7 DAYS DELIVERY</h5>
              <p>Meals delivered to you throughout the week</p>
              <div className="arrow arrow-up-right"></div>
            </div>
            <div className="feature">
              <h5 className="text-success fw-bold">24×7 NUTRITION SUPPORT</h5>
              <p>Nutritional support round the clock at your fingertips</p>
              <div className="arrow arrow-right"></div>
            </div>
            <div className="feature">
              <h5 className="text-success fw-bold">NO COMMITMENTS</h5>
              <p>Pause your meal plan anytime</p>
              <div className="arrow arrow-down-right"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
