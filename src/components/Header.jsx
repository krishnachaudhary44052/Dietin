import { useState } from "react";
import {
  Phone, Mail, Twitter, Facebook, Instagram, Github,
  Search, User, ShoppingCart, Menu, X
} from "lucide-react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="main-header">
      {/* Top Bar */}
      <div className="topbar text-white py-2 px-3">
        <div className="container d-flex justify-content-between align-items-center small">
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-1">
              <Phone size={16} />
              <span>(+91) 9779007629</span>
            </div>
            <div className="d-flex align-items-center gap-1">
              <Mail size={16} />
              <span>marketing@mealogy.in</span>
            </div>
          </div>
          <div className="d-none d-sm-flex align-items-center gap-3">

            <a
              href="https://www.instagram.com/eat_with_dietin?igsh=MTJiMWU0c3VnZTVuNg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white"
            >
              <Instagram size={16} className="hover-icon" />
            </a>

          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {showSearch && (
        <div className="search-overlay">
          <input
            type="text"
            placeholder="Search..."
            className="form-control search-input"
          />
          <button onClick={() => setShowSearch(false)} className="btn-close" />
        </div>
      )}

      {/* Main Header */}
      <header className="bg-white shadow-sm py-3 px-3 position-relative">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center" >
            <div className="fs-3 fw-bold text-primary "  >
              <Link to="/" className="text-decoration-none"><img src="./images/logo.png" alt="Logo" className="logo" /></Link>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="d-none d-md-flex align-items-center gap-4 ">
            <Link
              to="/"
              className=" text-dark text-decoration-none pb-1 nav-hov"
              style={{ fontSize: "1.2rem", fontWeight: 500 }}
            >
              Home
            </Link>

            <Link
              to="/dietInSolution"
              className=" text-dark text-decoration-none pb-1 nav-hov"
              style={{ fontSize: "1.2rem", fontWeight: 500 }}
            >
              DietIn Solution
            </Link>
            <Link
              to="/about"
              className=" text-dark p-0 text-decoration-none nav-hov"
              style={{ fontSize: "1.2rem", fontWeight: 500 }}
            >
              Our Story
            </Link>
            <Link
              to="/blog"
              className="text-dark text-decoration-none nav-hov"
              style={{ fontSize: "1.2rem", fontWeight: 500 }}
            >
              Our Menu
            </Link>

            <Link
              to="/contact"
              className="text-dark text-decoration-none nav-hov"
              style={{ fontSize: "1.2rem", fontWeight: 500 }}
            >
              Contact Us
            </Link>

          </nav>

          {/* Mobile Menu Button */}
          <div className="d-flex d-md-none align-items-center ">
            <button className="btn px-4" onClick={() => setShowSearch(true)}>
              <Search className="text-secondary" />
            </button>
            <button className="saladbtn p-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="text-dark" /> : <Menu className="text-dark" />}
            </button>
          </div>

          {/* Desktop Icons */}
          <div className="d-none d-md-flex align-items-center gap-3">
            <button className="btn p-0" onClick={() => setShowSearch(true)}>
              <Search className="text-secondary" />
            </button>
            <User className="text-secondary" />
            <div className="position-relative">
              <ShoppingCart className="text-secondary" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="dropdown-menu-custom">
            <Link to="/" className="mb-2 text-dark">Home</Link>
            <Link to="/dietInSolution" className="mb-2 text-dark">DietIn Solution</Link>
            <Link to="/blog" className="mb-2 text-dark">Our Menu</Link>
            <Link to="/about" className="mb-2 text-dark">Our Story</Link>
            <Link to="/contact" className="text-dark">Contact Us</Link>
          </div>

        )}
      </header>
    </div>
  );
};

export default Header;
