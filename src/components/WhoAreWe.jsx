import React from 'react';
import '../style/WhoAreWe.css';

const WhoAreWe = () => {
    return (
        <div className='who-are-we container-fluid bg-light'>
            <div className="container py-5">
                <h2 className="text-center mb-4 fw-bold text-uppercase">Who Are We</h2>

                <div className="row align-items-center mb-5">
                    <div className="col-md-6 text-center mb-3 mb-md-0">
                        <img src='./images/dietin2.png' alt="Food comparison" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6">
                        <p className="who-text">
                            Effective weight–loss programs crafted by experienced professionals who understand the journey firsthand.
                            <br /><br />
                            Our team includes health professionals who are specialized in nutrition and diet. They have extensive knowledge of food and its impact on the human body. Dietitians are trained to assess, diagnose, and treat diet-related problems, and they provide dietary advice to individuals and groups in a variety of settings.
                        </p>
                    </div>
                </div>

                <div className="row align-items-center mb-5">
                    <div className="col-md-6 order-md-2 text-center mb-3 mb-md-0">
                        <img src='./images/dietin2.png' alt="Healthy food" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <h3 className="fw-bold text-primary">Your core values: Care, Customization, Consistency</h3>
                        <p><strong>Care:</strong> We treat your health like our own — every meal is made with heart.</p>
                        <p><strong>Customization:</strong> Your body, your plan. Personalized meals, just for you.</p>
                        <p><strong>Consistency:</strong> Healthy habits start here — fresh meals, every single day.</p>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default WhoAreWe;
