import React from "react";
import { FaLeaf, FaClipboardList, FaTruck } from "react-icons/fa";
import "../style/SaladEssence.css";

const SaladEssence = () => {
  return (
    <section className="salad-section text-white py-5">
      <div className="container text-center">
        <h2 className="salad-title1 mb-3">The Essence of Dietin</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="salad-card p-4 text-center h-100">
              
              <h3 className="h5 fw-semibold">Authentic</h3>
              <p className="salad-text mt-2">
                Real food, real science, real results.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="salad-card p-4 text-center h-100">
              <h3 className="h5 fw-semibold">Clean</h3>
              <p className="salad-text mt-2">
               Simple, transparent ingredients and guidance.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="salad-card p-4 text-center h-100">
            
              <h3 className="h5 fw-semibold">Therapeutic</h3>
              <p className="salad-text mt-2">
                Targeted nutrition that nurtures both body and mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaladEssence;
