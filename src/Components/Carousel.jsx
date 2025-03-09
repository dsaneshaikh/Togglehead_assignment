import React, { useState, useEffect } from "react";
import "../style/carousel.css";

function Carousel({ data }) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Uncomment if you want auto-sliding
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setActiveSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  //   }, 2000);
  //   return () => clearInterval(intervalId);
  // }, [data.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {data.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="leftsection">
              <h1 className="header">{slide.header}</h1>
              <p className="subheader">{slide.subheader}</p>
              <div className="cta">
                <a href="#">
                  {slide.cta}
                  <img
                    className="ctaicon"
                    src="/svgs/ctaicon.svg"
                    alt="CTA Icon"
                  />
                </a>
              </div>
            </div>
            <div className="rightsection">
              <img src={slide.img} alt="" />
            </div>
          </div>
        ))}
      </div>
      <span className="indicators">
        {data.map((_, idx) => (
          <button
            key={idx}
            className={
              activeSlide === idx ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => setActiveSlide(idx)}
          ></button>
        ))}
      </span>
    </div>
  );
}

export default Carousel;
