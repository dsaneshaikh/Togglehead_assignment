import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Top Section: 3 columns */}
      <div className="footer-top">
        {/* Contact Us Column */}
        <div className="footer-col">
          <h3>Contact us</h3>
          <p>Address: amet, consetetur sadipscing elitr, sed diam</p>
          <p>Email id: eirmod tempor invidunt ut labore et dolore</p>
          <p>Phone no: 123456789</p>
        </div>

        {/* Follow Us Column */}
        <div className="footer-col follow-us-col">
          <h3>Follow us</h3>
          <div className="social-icons">
            <img src="/svgs/footer/facebook.svg" alt="Facebook" />
            <img src="/svgs/footer/instagram.svg" alt="Instagram" />
            <img src="/svgs/footer/linkedin.svg" alt="LinkedIn" />
            <img src="/svgs/footer/twitter.svg" alt="Twitter" />
            <img src="/svgs/footer/youtube.svg" alt="YouTube" />
            <img src="/svgs/footer/quora.svg" alt="Quora" />
          </div>
        </div>

        {/* Head Office Column */}
        <div className="footer-col head-office">
          <h3>Head Office</h3>
          <ul>
            <li>
              <img
                src="/svgs/footer/address/1.svg"
                alt="Marker"
                className="marker-icon"
              />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonumy eirmod tempor invidunt ut
            </li>
            <li>
              <img
                src="/svgs/footer/address/2.svg"
                alt="Marker"
                className="marker-icon"
              />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </li>
            <li>
              <img
                src="/svgs/footer/address/3.svg"
                alt="Marker"
                className="marker-icon"
              />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </li>
            <li>
              <img
                src="/svgs/footer/address/4.png"
                alt="Marker"
                className="marker-icon"
              />
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © 2021 All Rights Reserved. <span>Privacy Policy</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
