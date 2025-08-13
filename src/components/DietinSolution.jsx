import React from 'react';
import '../style/DietinSolution.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const DietinSolution = () => {
    return (
        <div className="solution-container container mt-5">
            <h2 className="main-heading">THE SOLUTION: <br /><span className="highlight">Dietin Freeze</span></h2>
            <p className="subtitle">A single fridge. A full-fledged nutrition solution.</p>

            <div className='row'>
                <div className='col-lg-8'>
                    <div className="info-box mt-3 p-3">
                        <p>A state-of-the-art, AI-enabled refrigerated smart vending machine that dispenses:</p>
                        <ul>
                            <li>Fresh salads (jar-packed)</li>
                            <li>Smoothies & detox water</li>
                            <li>Sandwiches (veg/non-veg)</li>
                        </ul>
                    </div>
                    <div className="row mt-4 align-items-center">
                        <div className="col-md-6">
                            <p className="feature-text"><strong>Designed by</strong> <span className="text-primary">Nutritionists.</span></p>
                            <p className="feature-text"><strong>Curated by</strong> <span className="text-danger">Healthy Chefs.</span></p>
                            <p className="feature-text"><strong>Replenished daily.</strong></p>
                        </div>

                    </div>

                </div>
                <div className='col-lg-4'>
                    <div className="col-md-6 text-center">
                        <img src="./images/08.jpg" alt="Dietin Freeze" className="vending-img" />
                    </div>
                </div>
            </div>






        </div>
    );
};

export default DietinSolution;
