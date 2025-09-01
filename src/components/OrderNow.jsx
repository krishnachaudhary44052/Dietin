import React from "react";
import "../style/OrderNow.css";

const OrderNow = () => {
  return (
    <div className="order-section container-fluid py-5">
      <div className="d-flex align-items-center justify-content-center">
        
        {/* Left Side - Text */}
        <div className="text-center">
          <img 
            src="/images/order.png" 
            alt="Fresh Salad Bowl" 
            className=" order-image"
          />
        </div>
        <div className=" text-center text-lg-start  mb-lg-0">
          <h2 className="fw-bold order-heading">
            Ready to Experience the <span className="text-success">Fresh Salads?</span> Order Now!
          </h2>

          <div className="mt-4">
            <button className="orderbtn btn-success me-3 px-4">ORDER ONLINE</button>
            <button className="orderbtn btn-success px-4">VISIT OUR STORE</button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className=" text-center">
          <img 
            src="/images/order1.png" 
            alt="Fresh Salad Bowl" 
            className="order-image"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderNow;
