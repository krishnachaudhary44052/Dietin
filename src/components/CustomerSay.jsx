import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../style/CustomerSay.css";

const testimonials = [
  {
    name: "Daniel Thompson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "October 5, 2023",
    rating: 5,
    feedback:
      "Amazing service! They paid attention to every detail and delivered ahead of schedule. The only issue was a minor bug in the software, but they fixed it quickly. I appreciate their dedication!",
  },
  {
    name: "Daniel Thompson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "October 5, 2023",
    rating: 5,
    feedback:
      "Great food and excellent service. Loved the nutritional support availability round the clock!",
  },
  {
    name: "Daniel Thompson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "October 5, 2023",
    rating: 5,
    feedback:
      "Highly recommended! The meals are fresh and tailored to your health goals."
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomerSay = () => {
  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-primary display-6">
          What Our Customers Say
        </h2>

        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={5000} arrows={false}>
          {testimonials.map((review, idx) => (
            <div className="card testimonial-card shadow-sm border-0 rounded-4 p-4 m-2" key={idx}>
              <div className="d-flex align-items-center mb-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h6 className="mb-0 fw-bold">{review.name}</h6>
                  <div className="text-warning">{"★".repeat(review.rating)}</div>
                  <small className="text-muted">{review.date}</small>
                </div>
              </div>
              <p className="text-secondary">{review.feedback}</p>
            </div>
          ))}
        </Carousel>

        {/* Order Through Apps Section */}
      </div>
      <div className="order-apps text-center mt-5 py-5 bg-navy text-white rounded">
          <h2 className="fw-bold mb-3">You can order through apps</h2>
          <p className="mb-4">
            Changes weekly — Healthy Balanced Meal Plans, each plan offers a variety of
            tasty meals chosen by our Dietitian & chefs
          </p>
          <div className="d-flex justify-content-center gap-4">
            <img src="./images/zomato.png" style={{width:"220px",height:"50px"}} alt="Zomato" className="app-logo" />
            <img src="./images/swiggy.png" style={{width:"220px",height:"50px"}} alt="Swiggy" className="app-logo" />
          </div>
        </div>
    </section>
  );
};

export default CustomerSay;
