import React from "react";
import "../style/SaladHeroSection.css";

const SaladHeroSection = () => {
    return (
        <>
            <section className="hero-section1 d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">


                        <div className="col-6 text-section">
                            <h5 className="sub-title animate-text">The Art & Science of Eating Right</h5>
                            <h1 className="main-title animate-text">HEALTHY BITES</h1>
                            <p className="desc animate-text">
                                What began as an idea is now India’s go-to destination for nutrition
                            </p>
                           
                            <img src="/images/saladleaf.png" alt="Leaf" className="floating leaf" />
                            <img src="/images/saladshimla.png" alt="Tomato" className="floating tomato1" />
                            <button className="herobtn btn-dark animate-text" onClick={() => {alert("Order Now Clicked")}}>ORDER NOW</button>
                        </div>

                        <div className="col-6 image-section position-relative">
                            <img
                                src="/images/saladbanner.png"
                                alt="Salad Bowl"
                                className="salad-img animate-pizza"
                            />
                            <img src="/images/saladleaf.png" alt="Leaf" className="floating leaf" />
                            <img src="/images/saladshimla.png" alt="Tomato" className="floating tomato" />

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default SaladHeroSection;