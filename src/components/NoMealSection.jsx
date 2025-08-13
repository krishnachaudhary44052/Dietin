import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/NoMealSection.css";

const NoMealSection = () => {
  const handleScroll = () => {
    document.querySelector(".getin-section").scrollIntoView({ behavior: "smooth" });
}
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="container-fluid px-4 px-lg-5 align-items-center">        
          <div className="row parent align-items-center gy-5">
            {/* Left Card */}
            <div className="col-lg-6 child animate-left">
              <h2 className="display-5 fw-bold text-navy mb-3">
                No Plan? No Problem!
              </h2>
            </div>

            {/* Right Card */}
            <div className="col-lg-6 child align-items-center animate-right">
              <h2 className="display-5 text-align-center fw-bold text-navy mb-3">BYOD</h2>
            </div>
          </div>

          <div className="row parent align-items-center gy-5">
            {/* Left Card */}
            <div className="col-lg-6 animate-left">
              <p className="text-secondary fs-5 mb-4">
                Don't have a diet plan? <br /> Don't worry, we got you.
              </p>
              <button className="btn btn-warning text-white px-4 py-2 mb-4" onClick={handleScroll}>
                Consult Now
              </button>
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop"
                  alt="Fresh vegetables"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>

            {/* Right Card */}
            <div className="col-lg-6 animate-right">
              <p className="text-secondary fs-5 mb-4">
                Bring your own <br /> diet chart
              </p>
              <label className="btn btn-warning text-white px-4 py-2 mb-4">
  Upload File
  <input
    type="file"
    hidden
    onChange={(e) => console.log(e.target.files)}
  />
</label>
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=500&h=300&fit=crop"
                  alt="Fresh salad"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NoMealSection;
