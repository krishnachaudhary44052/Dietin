import { useState } from "react";
import {
  Phone, Mail, Twitter, Facebook, Instagram, Github,
  Search, User, ShoppingCart, Menu, X
} from "lucide-react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMealPlan, setShowMealPlan] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showDietInSolution, setShowDietInSolution] = useState(false);
  const [showOption1, setShowOption1] = useState(false);

  return (
    <div className="position-relative z-3">
      {/* Top Bar */}
      <div className="bg-navy text-white py-2 px-3">
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
          <button onClick={() => setShowSearch(false)} className="btn-close ms-3" />
        </div>
      )}

      {/* Main Header */}
      <header className="bg-white shadow-sm py-3 px-3 position-relative">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center" >
            <div className="fs-3 fw-bold text-primary "  >
              <Link to="/" className="text-decoration-none"><img src="./images/logo.png" alt="Logo" style={{ width: "150px", height: "auto" }} /></Link>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="d-none d-md-flex align-items-center gap-4">
            <Link
              to="/"
              className=" text-dark text-decoration-none pb-1"
              style={{ fontSize: "1.2rem", fontWeight: 500 }}
            >
              Home
            </Link>

            {/* DietIn Solution Menu */}
            <div
              className="position-relative"
              onMouseEnter={() => setShowDietInSolution(true)}
              onMouseLeave={() => {
                setShowDietInSolution(false);
                setShowOption1(false);

              }}
            >
              <Link
                className=" text-dark p-0 text-decoration-none"
                style={{ fontSize: "1.2rem", fontWeight: 500 }}
              >
                DietIn Solution
              </Link>
              {showDietInSolution && (
                <div className="dropdown-menu-custom">
                  <ul className="list-unstyled mb-0">
                    <li
                      className="position-relative"
                      onMouseEnter={() => setShowOption1(true)}
                      onMouseLeave={() => setShowOption1(false)}
                    >
                      <span className="dropdown-item-custom">meal Plan</span>
                      {showOption1 && (
                        <div className="position-absolute start-100 top-0 m-1 px-2 bg-white border dropdown-menu-custom ">
                          <Link to="/TherapeuticPlan" className="d-block text-decoration-none text-dark w-600">Therapeutic Plans</Link>
                          <Link to="/TherapeuticPlan1" className="d-block text-decoration-none text-dark w-600">Pregnancy & Lactation Plan</Link>
                          <Link to="/TherapeuticPlan2" className="d-block text-decoration-none text-dark w-600">Gym and Sports Plan</Link>
                          <Link to="/TherapeuticPlan3" className="d-block text-decoration-none text-dark w-600">Student Meal Plan</Link>
                          <Link to="/TherapeuticPlan4" className="d-block text-decoration-none text-dark w-600">Fast Track Weight Loss</Link>
                          <Link to="/TherapeuticPlan5" className="d-block text-decoration-none text-dark w-600">Weight Management Plan</Link>
                        </div>
                      )}
                    </li>
                    {/* Option 2 */}
                    <li
                      className="position-relative"
                    >
                      <Link
                        to="/dietinPlan"
                        className="text-dark text-decoration-none dropdown-item-custom"
                      >
                        DietIn Plan
                      </Link>

                    </li>
                    <li
                      className="position-relative"
                    >
                      <Link
                        to="/Home1"
                        className="text-dark text-decoration-none dropdown-item-custom"
                      >
                        DietIn Freeze
                      </Link>

                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Rest of your original navbar */}
            <Link
              to="/About"
              className="text-dark text-decoration-none"
              style={{ fontSize: "1.2rem", fontWeight: 500 }}
            >
              About Us
            </Link>
            <Link
              to="/blog"
              className="text-dark text-decoration-none"
              style={{ fontSize: "1.2rem", fontWeight: 500 }}
            >
              Our Blog
            </Link>
            <Link
              to="/contact"
              className="text-dark text-decoration-none"
              style={{ fontSize: "1.2rem", fontWeight: 500 }}
            >
              Contact Us
            </Link>

          </nav>

          {/* Mobile Menu Button */}
          <div className="d-flex d-md-none align-items-center ">
            <button className="btn p-0" onClick={() => setShowSearch(true)}>
              <Search className="text-secondary" />
            </button>
            <button className="btn p-0" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
          <div className="d-md-none mt-3 bg-white border-top border-secondary position-absolute top-100 start-0 w-100 z-3 p-3 shadow">
            <Link to="/" className="d-block mb-2">Home</Link>
            <button
              onClick={() => setShowMealPlan(!showMealPlan)}
              className="btn btn-link d-flex justify-content-between w-100 p-0"
            >
              DietIn Solution
              <svg className={`${showMealPlan ? "rotate-180" : ""}`} width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showMealPlan && (
              <div className="ms-3">
                <Link to="/TherapeuticPlans" className="d-block">Meal Plan</Link>
                <Link to="/TherapeuticPlans1" className="d-block">DietIn Freeze</Link>
                <Link to="/TherapeuticPlans2" className="d-block">DietIn plan</Link>
              </div>
            )}
            <Link to="/about" className="d-block mt-2">About Us</Link>
            <Link to="/blog" className="d-block">Our Blog</Link>
            <Link to="/contact" className="d-block">Contact Us</Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
