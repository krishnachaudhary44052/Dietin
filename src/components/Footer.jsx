import React from "react";
import "../style/Footer.css"; // External CSS file
import { Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const pages = [
    { name: "Home", href: "/" },
    { name: "Meal Plan", href: "#" },
    { name: "About Us", href: "/about" },
    { name: "Our Blog", href: "/Blog" },
    { name: "Contact-Us", href: "/Contact" },
  ];

  const utilityPages = [
    { name: "Pricing", href: "#" },
    { name: "Blog", href: "/Blog" },
    { name: "Contact", href: "/Contact" },
    { name: "Delivery", href: "#" },
  ];

  const instagramPosts = [
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=150&h=150&fit=crop",
  ];

  return (
    <footer className="footer py-5 bg-white border-top">
      <div className="container">
        <div className="row gy-5">
          <div className="col-md-6 col-lg-3">
            <div className="fs-3 fw-bold text-primary "  >
              <img src="./images/logo.png" alt="Logo" style={{ width: "150px", height: "auto" }} />
            </div>
            <p className="text-muted small py-2">
              In the new era of technology we look at the future with certainty and pride for our company.
            </p>
            <div className="d-flex gap-2">

              <div className="footer-icon py-2"><a
                href="https://www.instagram.com/eat_with_dietin?igsh=MTJiMWU0c3VnZTVuNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white"
              >
                <Instagram size={16} className="hover-icon" />
              </a></div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="footer-title">Pages</h5>
            <ul className="list-unstyled">
              {pages.map((page) => (
                <li key={page.name}><a href={page.href}>{page.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="footer-title">Utility Pages</h5>
            <ul className="list-unstyled">
              {utilityPages.map((page) => (
                <li key={page.name}><a href={page.href}>{page.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="footer-title">Follow Us On Instagram</h5>
            <div className="row g-2">
              {instagramPosts.map((img, i) => (
                <div className="col-6" key={i}>
                  <img src={img} alt={`Instagram ${i}`} className="img-fluid rounded footer-insta" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="mt-5" />
        <p className="text-center text-muted small mb-0">
          © 2025 Dietin Pvt. Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
