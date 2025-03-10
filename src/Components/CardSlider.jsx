import React, { useRef } from "react";
import { card } from "../data/data.json";
import Card from "./Card";
import "../style/cardslider.css";

function CardSlider() {
  const cardsRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftRef = useRef(0);

  const scrollLeft = () => {
    if (cardsRef.current) {
      const containerWidth = cardsRef.current.clientWidth;
      cardsRef.current.scrollLeft -= containerWidth;
    }
  };

  const scrollRight = () => {
    if (cardsRef.current) {
      const containerWidth = cardsRef.current.clientWidth;
      cardsRef.current.scrollLeft += containerWidth;
    }
  };

  const handleMouseDown = (e) => {
    isDown.current = true;
    cardsRef.current.classList.add("active");
    startX.current = e.pageX - cardsRef.current.offsetLeft;
    scrollLeftRef.current = cardsRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    cardsRef.current.classList.remove("active");
  };

  const handleMouseUp = () => {
    isDown.current = false;
    cardsRef.current.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - cardsRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    cardsRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchStart = (e) => {
    isDown.current = true;
    startX.current = e.touches[0].pageX - cardsRef.current.offsetLeft;
    scrollLeftRef.current = cardsRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDown.current) return;
    const x = e.touches[0].pageX - cardsRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    cardsRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchEnd = () => {
    isDown.current = false;
  };

  return (
    <div className="slider-section">
      <button className="slider-btn left-btn" onClick={scrollLeft}>
        <img className="leftsvg" src="/svgs/arrowleft.svg" alt="" />
      </button>
      <div
        className="cards"
        ref={cardsRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {card.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
      <button className="slider-btn left-btn" onClick={scrollRight}>
        <img className="rightsvg" src="/svgs/arrowright.svg" alt="" />
      </button>
    </div>
  );
}

export default CardSlider;
