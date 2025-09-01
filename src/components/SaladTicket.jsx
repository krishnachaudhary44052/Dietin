import React from "react";
import { Link } from "react-router-dom";
import "../style/SaladTicket.css";
const SaladTicket = () => {
    const plans = [
        {
            title: "DietIn Plan",
            features: [
                "Personalized nutrition plans tailored to your lifestyle, health goals, and specific needs.",
                "A structured path that turns healthy eating into a sustainable habit."
            ],
            link: "/dietInPlan"
        },
        {
            title: "DietIn Meal",
            features: [
                "Wholesome, chef-crafted meals designed by dietitians to nourish your body and satisfy your taste buds.",
                "Balanced nutrition delivered fresh, making healthy eating simple every day."],
            link: "/mealPlans"
        },
        {
            title: "DietIn On-The-Go",
            features: [
                "Convenient, ready-to-carry options for busy days without compromising on health.",
                "Nutritious food made effortless, wherever life takes you.",
                   ],
            link: "/Home1"
        },
        {
            title: "DietIn Quick Bites",
            features: [
                "Smart, guilt-free snacking that keeps you energized between meals.",
                "Small bites, big on taste and nutrition.",
             ],
            link: "/blog"
        }
    ];
    return (
        <>
            <div className="container my-5">
                <h1 className="ourPlan">Our Plan</h1>
                <div className="row text-center">
                    {plans.map((plan, index) => (
                        <div className="col-md-6 col-lg-3 mb-4" key={index}>
                            <div className="card meal-plan-card h-100 shadow">
                                <div className="card-body">
                                    <div className="plan-icon mb-3">⭐</div>
                                    <h4 className="card-title">
                                        <Link to={plan.link} className="plan-link text-decoration-none text-white">
                                            {plan.title}
                                        </Link>
                                    </h4>
                                    <ul className="list-unstyled text-start mt-3">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="mb-2">✔ {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SaladTicket;