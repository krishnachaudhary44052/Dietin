import React from 'react';
import '../style/DietinCxoLove.css';
import { useEffect, useRef, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const DietinCxoLove = () => {

  const [inView, setInView] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <div className="cxo-container container mt-5">
      <h2 className="main-heading mt-3">Why HR, Admin & CXOs Love Us</h2>

      <table className="table table-bordered benefits-table mt-4">
        <thead className="table-dark">
          <tr>
            <th>Benefit</th>
            <th>Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Healthier Team</td>
            <td>Increased energy & lower absenteeism</td>
          </tr>
          <tr>
            <td>Zero Ops Burden</td>
            <td>Full-service: restock, clean, maintain</td>
          </tr>
          <tr>
            <td>ESG+CSR Alignment</td>
            <td>Sustainable, nutrition-first programs</td>
          </tr>
          <tr>
            <td>Anytime Access</td>
            <td>No cafeteria dependency</td>
          </tr>
        </tbody>
      </table>

      <div className="row mt-4 gx-5 align-items-center">
        <div className="col-md-7">
          <div className="impact-box">
            <span className="percent-highlight">26%</span> overall increase in employee satisfaction with workplace food access and a 15% reduction in reliance on junk food/snacking during office hours. By integrating convenience, nutrition, and zero-ops design,
            <strong className="statement-highlight"> Dietin proves that wellness doesn’t need a canteen — just a commitment.</strong>
          </div>

          <div ref={progressRef} className="progress-section mt-4">
            <div className="progress-label">Healthier team</div>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                style={{
                  width: inView ? "78%" : "0%",
                  transition: "width 1.5s ease-in-out"
                }}
              >
                {inView ? "78%" : ""}
              </div>
            </div>

            <div className="progress-label mt-3">Plant based offerings</div>
            <div className="progress">
              <div
                className="progress-bar bg-success"
                style={{
                  width: inView ? "70%" : "0%",
                  transition: "width 1.5s ease-in-out"
                }}
              >
                {inView ? "70%" : ""}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-5 text-center">
          <img src="./images/image20.png" alt="CXO Love Dietin" className="rounded cxo-img mt-3 mt-md-0" />
        </div>
      </div>
    </div>
  );
};

export default DietinCxoLove;
