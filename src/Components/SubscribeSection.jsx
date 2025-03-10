import React from "react";
import "../style/subscribesection.css";

function SubscribeSection() {
  return (
    <div className="subscribe-section">
      {/* Left side */}
      <div className="subscribe-left">
        <h2 className="subscribe-title">Subscribe</h2>
        <p className="subscribe-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit; sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>

        {/* Subscription form */}
        <div className="subscribe-form">
          <input
            className="subscribe-input"
            type="email"
            placeholder="Enter your Email Address"
          />
          <button className="subscribe-button">
            Subscribe Now <img src="/svgs/subscribeicon.svg" alt="" />
          </button>
        </div>
      </div>

      {/* Right side */}
      <div className="subscribe-right">
        <img
          src="/svgs/subscribe.svg"
          alt="Subscribe Illustration"
          className="subscribe-image"
        />
      </div>
    </div>
  );
}

export default SubscribeSection;
