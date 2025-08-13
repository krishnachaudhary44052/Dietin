import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/bmr.css"; // Import custom CSS

const HealthCalculator = () => {
    const [activeTab, setActiveTab] = useState("BMI");
    const [gender, setGender] = useState("male");
    const [feet, setFeet] = useState("");
    const [inches, setInches] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");

    const convertHeightToCm = () => {
        const ft = parseFloat(feet);
        const inch = parseFloat(inches);
        if (isNaN(ft) || isNaN(inch)) return null;
        return (ft * 30.48) + (inch * 2.54);
    };

    const calculate = () => {
        const h_cm = convertHeightToCm();
        const w = parseFloat(weight);
        const a = parseInt(age);

        if (!h_cm || h_cm <= 0 || !w || w <= 0 || (activeTab === "BMR" && (!a || a <= 0))) {
            alert("Please enter valid height, weight, and age.");
            return;
        }

        if (activeTab === "BMI") {
            const bmi = (w / ((h_cm / 100) ** 2)).toFixed(2);
            alert(`Your BMI is ${bmi}`);
        } else {
            let bmr;
            if (gender === "male") {
                bmr = 88.362 + (13.397 * w) + (4.799 * h_cm) - (5.677 * a);
            } else {
                bmr = 447.593 + (9.247 * w) + (3.098 * h_cm) - (4.330 * a);
            }
            alert(`Your BMR is ${bmr.toFixed(2)} calories/day`);
        }
    };

    return (
        <section className="health-section py-5 px-3">
            <div className="container d-flex justify-content-center">
                <div className="bg-white text-dark rounded p-4 shadow calculator-box">
                    <div className="btn-group w-100 mb-4">
                        <button
                            className={`btn ${activeTab === "BMI" ? "btn-success" : "btn-outline-secondary"}`}
                            onClick={() => setActiveTab("BMI")}
                        >
                            BMI Calculator
                        </button>
                        <button
                            className={`btn ${activeTab === "BMR" ? "btn-success" : "btn-outline-secondary"}`}
                            onClick={() => setActiveTab("BMR")}
                        >
                            BRI Calculator
                        </button>
                    </div>

                    <div className="d-flex justify-content-around mb-3">
                        <button
                            className={`btn ${gender === "male" ? "btn-warning" : "btn-outline-dark"}`}
                            onClick={() => setGender("male")}
                        >
                            ♂ Male
                        </button>
                        <button
                            className={`btn ${gender === "female" ? "btn-warning" : "btn-outline-dark"}`}
                            onClick={() => setGender("female")}
                        >
                            ♀ Female
                        </button>
                    </div>

                    <div className="row g-3 mb-3">
                        <div className="col-6">
                            <label className="form-label">Height - Feet</label>
                            <input
                                type="number"
                                className="form-control"
                                value={feet}
                                onChange={(e) => setFeet(e.target.value)}
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Height - Inches</label>
                            <input
                                type="number"
                                className="form-control"
                                value={inches}
                                onChange={(e) => setInches(e.target.value)}
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Weight (kg)</label>
                            <input
                                type="number"
                                className="form-control"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                        {activeTab === "BMR" && (
                            <div className="col-6">
                                <label className="form-label">Age (years)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                        )}
                    </div>

                    <button className="btn btn-primary w-100" onClick={calculate}>
                        Calculate {activeTab}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HealthCalculator;
