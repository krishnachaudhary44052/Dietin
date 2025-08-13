import React from 'react';
import '../style/DietinPromise.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const DietinPromise = () => {
    return (
        <div className="dietin-promise container mt-5">


            <h2 className="main-heading mt-4">OUR PROMISE: <br /><span className="highlight">QUALITY THAT SHOWS</span></h2>

            <div className='row'>
                <div className='col-lg-6'>
                    <p className="description mt-3">
                        We care deeply about what we create. Every bite is:
                    </p>
                    <ul className="description-list">
                        <li>Made from scratch at our in-house kitchen facility</li>
                        <li>Crafted using seasonal fruits, vegetables & whole grains</li>
                        <li>Packaged sustainably in jars & eco-containers</li>
                        <li>Free from preservatives & processed ingredients</li>
                    </ul>

                    <p className="description mt-4">
                        <strong>Our Kitchen Ethos:</strong>
                    </p>
                    <ul className="description-list">
                        <li>Food safety is non-negotiable</li>
                        <li>Fresh sourcing, every day</li>
                        <li>Chef innovation + nutrition science</li>
                        <li>Employee-led quality excellence</li>
                    </ul>

                    <div className="image-section row align-items-center mt-4">

                        <div className="col order-md-1">
                            <div className="maintenance-note p-3">
                                <h5>FRESHNESS & MAINTENANCE</h5>
                                <p>Our dedicated servicing team ensures:</p>
                                <ul>
                                    <li>Daily refill of fresh meals</li>
                                    <li>Removal of expired items</li>
                                    <li>Interior & exterior sanitization</li>
                                    <li>Recycled jars picked & reused</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-lg-6'>
                    <div className="col-md-6 order-md-2 text-center">
                        <img src='./images/image26.png' alt="Dietin Promise" className=" promise-img" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default DietinPromise;
