import React from "react";
import "../style/SaladMenu.css";
import { Link } from "react-router-dom";

const SaladMenu = () => {
    return (
        <>
            <section className="salad-menu-section py-5">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-md-6 text-center salad-image-wrapper">
                            <div className="salad-circle">
                                <img src="https://salado.in/wp-content/uploads/2025/01/Untitled-design-1.gif" alt="spoon" className="salad-spoon" />
                            </div>

                            <img src="/images/bro.png" alt="leaf" className="salad-float salad-leaf2" />
                            <img src="/images/veg.png" alt="tomato" className="salad-float salad-tomato" />
                            <img src="/images/saladshimla.png" alt="broccoli" className="salad-float salad-broccoli" />
                        </div>

                        <div className="col-md-6 salad-text">
                            <h1 className="salad-subtitle">Our Menu</h1>
                            <h2 className="salad-title">Mastering the balance of flavor and health</h2>
                            <p className="salad-description">
                                Fresh Starts Here. Nourish Today, Thrive Tomorrow.<br />
                                Welcome to Dietin – your partner in health, taste, and convenience.
                                We believe healthy eating shouldn’t be complicated. With over <strong>30+</strong> curated menu options, crafted by experts and loved by <strong>15K+</strong> happy customers, we bring you meals that are not just wholesome, but full of flavor. <br />
                                Whether you’re looking to stay fit, manage weight, or simply enjoy balanced meals, Dietin ensures every bite fuels your journey to a better tomorrow.
                                <ul>
                                    <li>Chef-designed meals with balanced nutrition.</li>
                                    <li>Superfast delivery across Mohali, Gurgaon, and soon expanding.</li>
                                    <li>Trusted brand with awards & customer testimonials.</li>
                                    <li>Easy ordering with the upcoming Dietin App.</li>
                                </ul>
                                Because when you nourish today, you truly thrive tomorrow.
                            </p>
                            <Link to="/Home1">
                                <button className="saladbtn salad-btn">VIEW MENU</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default SaladMenu;
