import React from "react";
import "../style/FranchiseOpportunity.css";

const FranchiseOpportunity = () => {
  return (
    <div className="franchise-section container py-5">
      <div className="row align-items-center">
        
        <div className="col-lg-6 col-md-12 text-center mb-4 mb-lg-0">
          <img 
            src="/images/fran.png" 
            alt="Franchise Opportunity" 
            className="img-fluid franchise-image"
          />
        </div>

        <div className="col-lg-6 col-md-12">
          <h6 className="text-success fw-bold">
            Partner with Us – Franchise Opportunities
          </h6>
          <p className="mt-3 text-muted">
            Join hands with Dietin and be a part of India’s growing nutrition-first food movement.
With our proven expertise in dietitian-designed meals, personalized plans, and chef-crafted menus, we’re opening doors for passionate entrepreneurs to bring healthy living closer to communities across India.

          </p>

          <h5 className="fw-bold mt-4">Why Partner with Dietin?</h5>
          <ul className="list-unstyled mt-3">
            <li>✅ Trusted brand in nutrition and diet-based meals</li>
            <li>✅ Strong customer demand for healthy, convenient food</li>
            <li>✅ Scalable, future-ready business model</li>
            <li>✅ End-to-end support in training, operations, and marketing</li>
          </ul>
            <p>Shape the future of nutrition with us.</p>
          <button className="saladbtn btn-success px-4 mt-3">JOIN NOW</button>
        </div>
      </div>
    </div>
  );
};

export default FranchiseOpportunity;
