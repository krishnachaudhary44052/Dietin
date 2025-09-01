import React, { useEffect, useRef, useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/EnrolmentProcess.css";

const steps = [
  "FILL THE FORM OR YOU CAN SMS YOUR (NAME) SPACE (AGE) SPACE (CITY) AND SEND IT TO 7837780318",
  "Expert will get in touch with you as per given slot.",
  "You have to choose your Plan.",
  "A group is created with experts and your diet starts."
];

const EnrolmentProcess = () => {
  const lineRef = useRef(null);
  const sectionRef = useRef(null);
  const workbookRef = useRef(null); 
  const worksheetName = "Consultation";
  
  const [lineHeight, setLineHeight] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    number: "",
    age: "",
    gender: "",
    goal: "",
    preferredTime: "",
    message: ""
  });

  const handleScroll = () => {
    if (!sectionRef.current || !lineRef.current) return;
    const sectionTop = sectionRef.current.getBoundingClientRect().top;
    const sectionHeight = sectionRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    let scrolled = Math.min(Math.max(windowHeight - sectionTop, 0), sectionHeight);
    setLineHeight(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!workbookRef.current) {
      const worksheet = XLSX.utils.json_to_sheet([formData]);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, worksheetName);
      workbookRef.current = workbook;
    } else {
      const worksheet = workbookRef.current.Sheets[worksheetName];
      const existingData = XLSX.utils.sheet_to_json(worksheet);
      existingData.push(formData);
      const updatedSheet = XLSX.utils.json_to_sheet(existingData);
      workbookRef.current.Sheets[worksheetName] = updatedSheet;
    }

    const excelBuffer = XLSX.write(workbookRef.current, { bookType: "xlsx", type: "array" });
    const fileData = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(fileData, "ConsultationDetails.xlsx");

    toast.success("Consultation booked successfully!", {
      position: "top-center",
      autoClose: 2000
    });

    setFormData({
      name: "",
      email: "",
      city: "",
      number: "",
      age: "",
      gender: "",
      goal: "",
      preferredTime: "",
      message: ""
    });
  };

  return (
    <div className="getin-section container-fluid py-5 bg-light">
      <div className="container position-relative" ref={sectionRef}>
        <div className="row">
          {/* Left Side */}
          <div className="col-md-6 position-relative">
            <h3 className="section-title">HOW TO GET ENROLLED WITH DIETIN</h3>
            <div className="step-wrapper">
              {steps.map((text, index) => (
                <div className="step-card card shadow-sm mb-4" key={index}>
                  <div className="card-body">
                    <h5><strong>STEP {index + 1}</strong></h5>
                    <p className="mb-0">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Vertical Line */}
            <div
              className="timeline-vertical"
              ref={lineRef}
              style={{ height: `${lineHeight}px` }}
            >
              {[...Array(4)].map((_, idx) => (
                <div className="timeline-dot" key={idx}>
                  <i className="bi bi-pencil-fill text-white"></i>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="contact-card card shadow">
              <div className="card-body">
                <h3 className="text-center text-primary fw-bold">Get In Touch</h3>
                <p className="text-center text-muted small">
                  Office Hours: 10:00 am to 5:00 pm Mon to Sat
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control"
                        placeholder="Enter your Name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" name="email" className="form-control"
                        placeholder="Enter your Email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="city" className="form-control"
                        placeholder="Enter your City" value={formData.city} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="number" className="form-control"
                        placeholder="Enter your Number" maxLength={10} inputMode="numeric"
                        value={formData.number}
                        onChange={(e) => handleChange({ target: { name: "number", value: e.target.value.replace(/\D/g, '') } })}
                        required />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="age" className="form-control"
                        placeholder="Enter your Age" value={formData.age} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <select name="gender" className="form-select"
                        value={formData.gender} onChange={handleChange} required>
                        <option value="">Enter your Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select name="goal" className="form-select"
                        value={formData.goal} onChange={handleChange} required>
                        <option value="">What's your Goal?</option>
                        <option>Weight Loss</option>
                        <option>Muscle Gain</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <select name="preferredTime" className="form-select"
                        value={formData.preferredTime} onChange={handleChange} required>
                        <option value="">Preferred Time for Call</option>
                        <option>10am - 1pm</option>
                        <option>2pm - 5pm</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea name="message" className="form-control"
                        rows="3" placeholder="Enter your Message"
                        value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-warning px-4 mt-3 fw-bold">
                        Book Consultation Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EnrolmentProcess;
