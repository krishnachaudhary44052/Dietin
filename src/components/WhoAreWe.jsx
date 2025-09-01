import React from 'react';
import '../style/WhoAreWe.css';

const WhoAreWe = () => {
    return (
        <div className='who-are-we container-fluid bg-light'>
            <div className="container py-5">
                <h2 className="text-center mb-4 fw-bold text-uppercase">About Us</h2>

                <div className="row align-items-center mb-5">
                    <div className="col-md-6 text-center mb-3 mb-md-0">
                        <img src='./images/dietin2.png' alt="Food comparison" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6">
                        <p className="who-text">
                            At Dietin, we believe that good health starts with the right food. We are a wellness-focused company offering comprehensive diet-based food solutions designed to support healthier lifestyles — both for individuals and organizations.
                            <br />
                            From personalized diet plans, to nutritious ready-to-eat meals, corporate vending solutions, and on-demand diet menus, Dietin is your all-in-one partner in building a healthier tomorrow. Every product and service we offer is developed by certified nutritionists and culinary experts, combining science-backed nutrition with everyday convenience.
                            Our mission is simple: <br /> To make healthy eating accessible, practical, and sustainable — at home, at work, or on-the-go.
                            We’re not just a food company.<br /> We’re a wellness company — helping people eat better, feel better, and live better</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoAreWe;
