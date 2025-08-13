import React from "react";
import "../style/HeroSection.css"; 

const handleScroll = () => {
    document.querySelector(".getin-section").scrollIntoView({ behavior: "smooth" });
}
const HeroSection = () => {
    return (
        <section className="hero-section d-flex justify-content-center align-items-center py-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center hero-content">
                    <div className="hero-text pe-lg-5 animate-slide-text">
                        <h1>
                            DIET MEAL,<br />
                            <span className="highlight">DELIVERED</span><br />
                            <span className="highlight">FRESH</span>
                        </h1>
                        <p>MEALS STARTING FROM 149/-</p>
                        <button className="consult-button" onClick={handleScroll}>Consult Now</button>
                    </div>

                    <div className="hero-image-container ps-lg-5 animate-slide-image">
                        <img
                            src="./images/chief.png"
                            alt="Healthy Meal"
                            className="img-fluid hero-image"
                        />
                        <div className="floating tomato-1"></div>
                        <div className="floating tomato-2"></div>
                        <div className="floating tomato-3"></div>
                        <div className="background-decor"><img src="./images/tomato.png" alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
