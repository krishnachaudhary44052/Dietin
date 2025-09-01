import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function ImagePdfPage() {
  return (
    <>
    <Header />
    <div className="container-fluid">
      
      <div className="row justify-content-center align-items-center text-center">
        <div className=" text-center  mb-md-0 py-4">
          <img
            src="/images/pdf1.png"
            alt="Wish 1"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="text-center">
          <img
            src="/images/pdf2.png"
            alt="Wish 2"
            className="img-fluid rounded shadow"
            style={{ maxHeight: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="text-center py-5">
        <a
          href="/sample.pdf" 
          download
          className="btn1 btn-success btn-lg"
        >
          📄 Download PDF
        </a>
      </div>
      <Footer />
    </div>
    </>
  );
}
