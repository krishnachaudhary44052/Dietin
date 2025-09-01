import React, { useEffect, useRef } from "react";
import "../style/Herosection3.css";

const HeroSection3 = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let scrollAmount = 0;

        const scrollInterval = setInterval(() => {
            if (slider) {
                scrollAmount += slider.offsetWidth;
                if (scrollAmount >= slider.scrollWidth) {
                    scrollAmount = 0;
                }
                slider.scrollTo({
                    left: scrollAmount,
                    behavior: "smooth",
                });
            }
        }, 5000);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <div className="hero-slider" ref={sliderRef}>

            <section className="hero-slide hero-section d-flex justify-content-center align-items-center py-5">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center hero-content">
                        <div className="hero-text pe-lg-5 animate-slide-text">
                            <h1>
                                DIET MEAL,<br />
                                <span className="highlight">DELIVERED</span><br />
                                <span className="highlight">FRESH</span>
                            </h1>
                            <p>MEALS STARTING FROM 149/-</p>
                            <button className="consult-button">Consult Now</button>
                        </div>

                        <div className="hero-image-container ps-lg-5 animate-slide-image">
                            <img
                                src="./images/chief.png"
                                alt="Healthy Meal"
                                className="img-fluid1 hero-image"
                            />
                            <div className="floating tomato-1"></div>
                            <div className="floating tomato-2"></div>
                            <div className="floating tomato-3"></div>
                            <div className="background-decor">
                                <img style={{ width: "600px" }} src="./images/tomato.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Slide 2 */}
            <section className="hero-slide hero d-flex align-items-center text-center text-white">
                <div className="hero-text">
                    <h1>
                        DIET MEAL,<br />
                        <span className="highlight">DELIVERED</span><br />
                        <span className="highlight">FRESH</span>
                    </h1>
                    <p>MEALS STARTING FROM 149/-</p>
                    <button className="consult-button1">Consult Now</button>
                </div>
            </section>
        </div>
    );
};

export default HeroSection3;
