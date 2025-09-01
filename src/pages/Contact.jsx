import React, { useEffect, useRef, useState } from "react";
import "../style/EnrolmentProcess.css";
import './Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const steps = [
  "FILL THE FORM OR YOU CAN SMS YOUR (NAME) SPACE (AGE) SPACE (CITY) AND SEND IT TO 7837780318",
  "Expert will get in touch with you as per given slot.",
  "You have to choose your Plan.",
  "A group is created with experts and your diet starts."
];

const Contact = () => {
  const lineRef = useRef(null);
  const sectionRef = useRef(null);
  const workbookRef = useRef(null); 
  const worksheetName = "Consultation";
  const [fileCreated, setFileCreated] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
const handleBookConsultation = (e) => {
  e.preventDefault();

  if (!fileCreated) {
   
    const worksheet = XLSX.utils.json_to_sheet([formData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, worksheetName);
    workbookRef.current = workbook;
    setFileCreated(true);
  } else {
  
    const worksheet = workbookRef.current.Sheets[worksheetName];
    const existingData = XLSX.utils.sheet_to_json(worksheet);
    existingData.push(formData);
    workbookRef.current.Sheets[worksheetName] = XLSX.utils.json_to_sheet(existingData);
  }

  const excelBuffer = XLSX.write(workbookRef.current, { bookType: "xlsx", type: "array" });
  const file = new Blob([excelBuffer], { type: "application/octet-stream" });
  saveAs(file, "consultation.xlsx");

  toast.success("Consultation booked successfully!");

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
  const handleScroll = () => {
    if (!sectionRef.current || !lineRef.current) return;
    const sectionTop = sectionRef.current.getBoundingClientRect().top;
    const sectionHeight = sectionRef.current.offsetHeight;
    const windowHeight = window.innerHeight;

    let scrolled = Math.min(Math.max(windowHeight - sectionTop, 0), sectionHeight);
    const maxHeight = sectionRef.current.offsetHeight - 200;
    setLineHeight(Math.min(scrolled, maxHeight));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="blog-page bg-light">
      <Header />
      <div className="container-fluid py-5 bg-light">
        <div className="container position-relative" ref={sectionRef}>
          <h1 className="contactUstext bg-bold">Contact Us</h1>
          <p className="contactUstext">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
          <div className="row">
          
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
              <div className="timeline-vertical" ref={lineRef} style={{ height: `${lineHeight}px` }}>
                {[...Array(4)].map((_, idx) => (
                  <div className="timeline-dot" key={idx}>
                    <i className="bi bi-pencil-fill text-white"></i>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="contact-card card shadow">
                <div className="card-body">
                  <form onSubmit={handleBookConsultation}>
                    <div className="row g-3">
                      <div className="col-md-12">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Enter your Name" required />
                      </div>
                      <div className="col-md-12">
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Enter your Email" required />
                      </div>
                      <div className="col-md-12">
                        <input type="text" name="city" value={formData.city} onChange={handleChange} className="form-control" placeholder="Enter your City" required />
                      </div>
                      <div className="col-md-12">
                        <input type="text" name="number" value={formData.number} onChange={handleChange} className="form-control" placeholder="Enter your Number" maxLength={10} inputMode="numeric"
                          onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} required />
                      </div>
                      <div className="col-md-12">
                        <input type="text" name="age" value={formData.age} onChange={handleChange} className="form-control" placeholder="Enter your Age" required />
                      </div>
                      <div className="col-md-12">
                        <select name="gender" value={formData.gender} onChange={handleChange} className="form-select" required>
                          <option value="">Enter your Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                      <div className="col-md-12">
                        <select name="goal" value={formData.goal} onChange={handleChange} className="form-select" required>
                          <option value="">What's your Goal?</option>
                          <option>Weight Loss</option>
                          <option>Muscle Gain</option>
                        </select>
                      </div>
                      <div className="col-md-12">
                        <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} className="form-select" required>
                          <option value="">Preferred Time for Call</option>
                          <option>10am - 1pm</option>
                          <option>2pm - 5pm</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" rows="3" placeholder="Enter your Message"></textarea>
                      </div>
                      <div className="col-12 text-center">
                        <button className="saladbtn btn-warning px-4 mt-3 fw-bold" type="submit">Book Consultation Now</button>
                      </div>
                    </div>
                  </form>
                  <ToastContainer position="top-center" autoClose={3000} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
