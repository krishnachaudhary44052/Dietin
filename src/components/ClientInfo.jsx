import React from 'react';
import '../style/ClientInfo.css';

const ClientInfo = () => {
  return (
    <div className="client-info container-fluid">
    <div className=" container py-5">
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-lg-7 mb-4 mb-lg-0">
          <h2 className="fw-bold text-primary-emphasis">
            A little information for our<br />valuable Clients
          </h2>
          <p className="text-muted mt-3">
            At place, we believe that dining is not just about food, but also about the overall experience. 
            Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>

          <div className="row mt-4">
            {[
              { number: '3', label: 'Locations' },
              { number: '15', label: 'Dietitian' },
              { number: '30+', label: 'Expert Chef' },
              { number: '100%', label: 'Satisfied Customers' }
            ].map((item, index) => (
              <div key={index} className="col-6 col-md-3 mb-3">
                <div className="info-box p-3 text-center h-100">
                  <h4 className="text-dark fw-bold">{item.number}</h4>
                  <p className="mb-0">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="col-lg-5 text-center">
          <img src='./images/dietin3.png'alt="Chef preparing food" className="img-fluid rounded" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ClientInfo;
