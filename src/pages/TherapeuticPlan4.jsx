import React, { useState,useMemo } from 'react';
import './TherapeuticPlan.css';
import Header from '../components/Header';
import CallToAction from "../components/CallToAction";
import Footer from '../components/Footer';
import TestimonialsSection from '../components/CustomerSay';
import 'bootstrap/dist/css/bootstrap.min.css';

const TherapeuticPlan4 = () => {
    const [mealType, setMealType] = useState("5 Time Meal Plan");
    const [plan, setPlan] = useState("30 days");
    const [preference, setPreference] = useState("Veg");

    const fixedPrices = {
            "5 Time Meal Plan": {
                "30 days": { Veg: 40000, "Non-Veg": 36000, Eggatarian: 36000 },
            },
        };
        const totalPrice = useMemo(() => {
            return fixedPrices?.[mealType]?.[plan]?.[preference] || 0;
        }, [mealType, plan, preference]);
    

    const handleMealTypeChange = (type) => setMealType(type);
    const handlePlanChange = (duration) => setPlan(duration);
    const handlePreferenceChange = (pref) => setPreference(pref);

    return (
        <>
            <Header />

            <section className="therapeutic-section">
                <div className="container d-flex flex-wrap justify-content-between gap-4">
                    <div className="content-box position-relative text-overlay">
                        <img
                           src="./images/dietin4.png"  alt="Therapeutic Dish"
                            className="content-img"
                        />
                        <h1 className="overlay-heading">Fast Track
Weight <h1 className='overlay-heading-plan'>Plan</h1></h1>

                    <div className="content-info">
                        <h2>Fast Track
Weight Plans – Tailor-Made for You</h2>
                        <ul className="list-unstyled">
                            {Array(4).fill(
                                <li>✅ Maintain, gain, or lose weight at a healthy pace.</li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="interactive-form">
                    <h2>
                        <span className="title-main">Fast Track
Weight </span>
                        <span className="title-highlight">PLAN</span>
                    </h2>
                    <p>
                        Share your diet chart from your doctor, trainer, or dietitian. We’ll prepare meals exactly as prescribed and deliver them fresh to your doorstep.
                    </p>

                    <div className="price">Meal price ₹{totalPrice}</div>

                    <div className="option-section">
                        <strong>Multiple Choice</strong>
                        <div className="option-buttons">
                            {Object.keys(fixedPrices).map(item => (
                                <button
                                    key={item}
                                    onClick={() => handleMealTypeChange(item)}
                                    className={`option-btn ${mealType === item ? 'active' : ''}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="option-section">
                        <strong>Plan</strong>
                        <div className="option-buttons">
                            {Object.keys(fixedPrices[mealType]).map(item => (
                                <button
                                    key={item}
                                    onClick={() => handlePlanChange(item)}
                                    className={`option-btn ${plan === item ? 'active' : ''}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="option-section">
                        <strong>Preference</strong>
                        <div className="option-buttons">
                            {Object.keys(fixedPrices[mealType][plan]).map(item => (
                                <button
                                    key={item}
                                    onClick={() => handlePreferenceChange(item)}
                                    className={`option-btn ${preference === item ? 'active' : ''}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>
                            <input type="checkbox" defaultChecked /> Add additional info
                        </label>
                    </div>

                    <div className="mb-3">
                        <label>
                            <strong>Enter text below*</strong>
                            <textarea className="form-control" placeholder="Please share your height, weight, allergies (if any), and meal preferences..." rows="3"></textarea>
                        </label>
                    </div>

                    <div className="mb-3">
                        <label>
                            <strong>Delivery Date</strong>
                            <input type="date" className="form-control" />
                        </label>
                    </div>

                    <button className="btn btn-outline-secondary w-100 mb-2">Add to Cart</button>
                    <button className="btn btn-warning w-100 fw-bold">PAY NOW</button>
                </div>
            </div>
        </section >

      <section className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h1><b>Description</b></h1>
            <p>
              Ideal for those looking to lose or maintain a healthy weight, this plan offers
              calorie-controlled, nutrient-balanced meals designed by our nutritionist to promote
              sustainable weight loss. Enjoy wholesome, satisfying meals that help you achieve your
              fitness goals without compromising on taste or nutrition.
            </p>
            <div className="faq-section">
              <p className="question">What does the menu look like? +</p>
              <p className="question">Where and when do you deliver the food? +</p>
              <p className="question">What if I have to travel in between the subscription? +</p>
            </div>
          </div>
          <div className="col-md-6 features">
            <h4 className="text-primary">
              Ideal for healthy weight loss and maintenance with calorie-controlled,
              nutritionist-designed meals.
            </h4>
            <div className="row">
              {[
                { icon: "🛡️", text: "Safe & Hygienic Protocols" },
                { icon: "👩‍⚕️", text: "Certified Nutritionist on Board" },
                { icon: "🎯", text: "Tailored to Allergies & Preferences" },
                { icon: "❤️", text: "Certified Organic Essentials" },
                { icon: "🍲", text: "Freshly Cooked" },
              ].map((item, index) => (
                <div className="col-6 text-center mb-3" key={index}>
                  <div className="fs-3">{item.icon}</div>
                  <div>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <TestimonialsSection /> */}
      <CallToAction />
      <Footer />
    </>
  );
};

export default TherapeuticPlan4;
