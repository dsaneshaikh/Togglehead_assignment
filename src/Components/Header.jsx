import React from "react";
import "../style/header.css";
function Header() {
  return (
    <header className="container">
      <div className="logo">LOGO</div>
      <div className="nav">
        <nav className="links">
          <a href="#">
            Qualifications <img src="/svgs/arrowdown.svg" alt="" />
          </a>
          <a href="#">
            Organizations <img src="/svgs/arrowdown.svg" alt="" />
          </a>
          <a href="#">
            Research & Analysis
            <img src="/svgs/arrowdown.svg" alt="" />
          </a>
          <a href="#">
            Lorem ipsum <img src="/svgs/arrowdown.svg" alt="" />
          </a>
          <a href="#">
            Lorem ipsum <img src="/svgs/arrowdown.svg" alt="" />
          </a>
          <a href="#">
            <img className="searchicon" src="/svgs/searchicon.svg" alt="" />
          </a>
        </nav>
        <div className="enroll">
          <a href="#">Enrolment</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
