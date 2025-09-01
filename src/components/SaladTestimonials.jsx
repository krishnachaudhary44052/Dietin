import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../style/SaladTestimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SaladTestimonials = () => {
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [awards, setAwards] = useState(0);
  const [menuItems, setMenuItems] = useState(0);

  useEffect(() => {
    const animateValue = (setter, target, duration) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 10;
        setter(start);
        if (start >= target) clearInterval(timer);
      }, stepTime);
    };

    animateValue(setHappyCustomers, 15000, 2000);
    animateValue(setAwards, 17, 1500);
    animateValue(setMenuItems, 30, 1500);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const testimonials = [
    {
      name: "NEHA SHARMA",
      role: "Homemaker",
      text: "At first, I was unsure about ordering healthy meals online, but Dietin completely impressed me. The freshness, taste, and portion sizes are absolutely perfect. My family loves it!",
      img: "/images/veg.png",
    },
    {
      name: "ROHAN MEHTA",
      role: "IT Professional",
      text: "Dietin makes my busy life so much easier. Nutritious meals, delivered on time, and always full of flavor. It keeps me energetic throughout the day – highly recommended!",
      img: "/images/veg.png",
    },
    {
      name: "ANJALI VERMA",
      role: "Fitness Enthusiast",
      text: "As someone who follows a strict diet plan, Dietin is a lifesaver. Every meal is thoughtfully prepared, balanced, and delicious. It truly helps me stay on track with my health goals.",
      img: "/images/veg.png",
    },
    {
      name: "AMIT KAPOOR",
      role: "Entrepreneur",
      text: "I never thought healthy food could taste this good. Dietin is my go-to for both work lunches and family dinners. Their service and presentation are top-notch.",
      img: "/images/veg.png",
    },
  ];

  return (
    <section className="salad-testimonial-section py-5">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-4 salad-testimonial-stats">
            <h6 className="salad-testimonial-subtitle">Testimonials</h6>
            <h2 className="salad-testimonial-title mb-3">
              What our customers say <br /> about us
            </h2>
            <p className="salad-testimonial-desc mb-4">
              Discover what our valued customers love about SaladO – from our
              fresh ingredients to our delicious, healthy offerings.
            </p>

            <div className="salad-testimonial-numbers">
              <div>
                <h3>{happyCustomers}+</h3>
                <p>Happy Customers</p>
              </div>
              <div>
                <h3>{awards}+</h3>
                <p>Award Won</p>
              </div>
              <div>
                <h3>{menuItems}+</h3>
                <p>Food Menu</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 px-4">
            <Slider {...settings}>
              {testimonials.map((t, index) => (
                <div key={index} className="salad-testimonial-card px-4">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="salad-testimonial-avatar me-3"
                    />
                    <div>
                      <h5 className="mb-0">{t.name}</h5>
                      <small>{t.role}</small>
                    </div>
                  </div>
                  <p className="salad-testimonial-text">"{t.text}"</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaladTestimonials;
