import React from "react";
import "../style/AppComingSoon.css";

const AppComingSoon = () => {
  return (
    <section className="app-coming-section">
      <div className="app-coming-container">
        
        {/* Left Side - App Preview */}
        <div className="app-preview">
          <img src="/images/android1.png" alt="DietIn Popular Salad" className="app-image app-image-left" />
          <img src="/images/android.png" alt="DietIn Fresh Salad App" className="app-image" />
        </div>

        {/* Right Side - Text Content */}
        <div className="app-text">
          <h2 className="app-title">Coming Soon DietIn App!</h2>
          <p className="app-subtitle">
            Launching soon to revolutionize your dining experience!
          </p>

          <h4 className="features-title">Exciting Features Of DietIn App</h4>

          <div className="feature-item">
            <span className="icon">🛒</span>
            <div>
              <h5>Food Ordering</h5>
              <p>Order fresh and healthy meals with a few taps.</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon">🔍</span>
            <div>
              <h5>Options</h5>
              <p>Explore Veg and Non-Veg options with filters.</p>
            </div>
          </div>

          <div className="feature-item">
            <span className="icon">⚡</span>
            <div>
              <h5>Fast Delivery</h5>
              <p>Real-time order tracking and notifications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppComingSoon;
