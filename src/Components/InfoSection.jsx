import React from "react";
import "../style/infosection.css";

function InfoSection() {
  return (
    <div className="upcoming-examinations-container">
      {/* Left Panel */}
      <div className="left-section">
        <h2 className="title">
          Upcoming <br /> Examinations
        </h2>
        <p className="subtitle">
          Enquire about the examinations &amp; register for the exams
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="divider"></div>

      {/* Right Panel with Three Exam Items */}
      <div className="exams-list">
        <div className="exam-item">
          <img
            className="exam-icon"
            src="/svgs/calendar.svg"
            alt="Calendar Icon"
          />
          <div className="exam-details">
            <h3>02th October 2014</h3>
            <p>Level 1 exam</p>
          </div>
        </div>

        <div className="exam-item">
          <img
            className="exam-icon"
            src="/svgs/calendar.svg"
            alt="Calendar Icon"
          />
          <div className="exam-details">
            <h3>Nov-Dec 2016</h3>
            <p>
              Level 2 <br /> Lorem Ipsum
            </p>
            <p>Lorem Ipsum</p>
          </div>
        </div>

        <div className="exam-item">
          <img
            className="exam-icon"
            src="/svgs/calendar.svg"
            alt="Calendar Icon"
          />
          <div className="exam-details">
            <h3>Ongoing this year</h3>
            <p>Level 3 (Grad)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
