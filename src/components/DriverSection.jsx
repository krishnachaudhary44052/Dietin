import React from "react";
import "../style/DriverSection.css"; // External CSS file

const DriverSection = () => {
  return (
    <section className="driver-section">
      <div className="driver-content">
        <h1>
          Serving Freshness in <br /> 30+ Cities Across India!
        </h1>
        <p>
          <strong>India’s biggest salad brand</strong> is now delivering health
          and flavour to over <strong>30+ cities!</strong> Enjoy fresh,
          delicious, and nutritious salads at your doorstep. Order now on{" "}
          <strong>Swiggy and Zomato.</strong>
        </p>
        <button className="discover-btn">DISCOVER NOW</button>
      </div>

      <div className="driver-image">
        <img src="/images/foodD.png" alt="Delivery Boy" />
      </div>

      <div className="driver-cities">
        <ul>
          <li>🏙️ Mumbai</li>
          <li>🏙️ Delhi NCR</li>
          <li>🏙️ Bengaluru</li>
          <li>🏙️ Hyderabad</li>
          <li>🏙️ Chandigarh</li>
          <li>🏙️ Jaipur</li>
          <li>🏙️ Chennai</li>
          <li>🌍 And many more</li>
        </ul>
      </div>

      {/* Background floating elements */}
      <img src="/images/saladleaf.png" alt="Leaf" className="bg-leaf leaf1" />
      <img src="/images/saladshimla.png" alt="Leaf" className="bg-leaf leaf2" />
      <img src="/images/tomato.png" alt="Tomato" className="bg-tomato" />
    </section>
  );
};

export default DriverSection;
