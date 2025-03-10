import React, { useState } from "react";
import "../style/header.css";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="container">
      <div className="logo">LOGO</div>
      <div className="nav">
        <nav className={`links ${mobileMenuOpen ? "active" : ""}`}>
          <a href="#">
            Qualifications <img src="/svgs/arrowdown.svg" alt="arrow down" />
          </a>
          <a href="#">
            Organizations <img src="/svgs/arrowdown.svg" alt="arrow down" />
          </a>
          <a href="#">
            Research & Analysis{" "}
            <img src="/svgs/arrowdown.svg" alt="arrow down" />
          </a>
          <a href="#">
            Lorem ipsum <img src="/svgs/arrowdown.svg" alt="arrow down" />
          </a>
          <a href="#">
            Lorem ipsum <img src="/svgs/arrowdown.svg" alt="arrow down" />
          </a>
          <a href="#">
            <img
              className="searchicon"
              src="/svgs/searchicon.svg"
              alt="search"
            />
          </a>
        </nav>
        <div className="enroll">
          <a href="#">Enrolment</a>
        </div>
        <div
          className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
