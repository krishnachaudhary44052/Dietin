import React from "react";
import { Link } from "react-router-dom";
import "../style/DietinTicket.css";
const DietinTicket = () => {
    const plans = [
        {
            title: "DietIn Plan",
            idealFor: "Individuals or families looking for consistent healthy monthly meals.",
            features: [
                "Families Looking For Consistent Healthy Monthly Meals.",
                "Curated Menu Options Each Week.",
                "Delivered To Your Preferred Location At Your Convenience.",
                "Save [10%] Compared To Single-Order Pricing.",
                "No Extra Charges For Delivery Within Service Areas."
            ],
            link: "/dietInPlan"
        },
        {
            title: "DietIn Meal",
            idealFor: "Those committed to a healthy eating routine for three months.",
            features: [
                "90 Meals: Delivered Daily Over Three Months.",
                "Tailored To Your Dietary Preferences And Goals.",
                "Early Access To Seasonal Dishes And Special Menus.",
                "Save More Compared To The Monthly Plan.",
                "Priority Customer Service For Any Issues Or Changes."
            ],
            link: "/mealPlans"
        },
        {
            title: "DietIn On-The-Go",
            idealFor: "Individuals or families seeking long-term savings and convenience.",
            features: [
                "180 Meals: Delivered Daily For Six Months.",
                "Save Up To [20%] With Our Half-Yearly Bundle.",
                "Complimentary Meal Customisation For Specific Goals.",
                "Free Upgrades To Premium Dishes And Exclusive Coupons.",
                "Set It And Forget It: Meals Taken Care Of For Six Months."
            ],
            link: "/Home1"
        },
        {
            title: "DietIn Quick Bites",
            idealFor: "Customers with unique dietary needs, irregular schedules, or preferences.",
            features: [
                "Price Based On Requirements.",
                "Choose Daily, Weekly, Or Specific Durations.",
                "Fully Personalised Meal Options With Restrictions.",
                "Tailored Delivery Schedules (One-Time Or Multiple-Day).",
                "Include Snacks, Beverages, Or Event Catering."
            ],
            link: "/blog"
        }
    ];
    return (
        <>
            <div className="container my-5">
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
                                    <p className="plan-ideal">{plan.idealFor}</p>
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

export default DietinTicket;