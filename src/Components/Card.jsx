import React from "react";
import "../style/card.css";

function Card({ data }) {
  return (
    <div className="cardcontainer">
      <div className="info">
        <h1 className="cardheader">{data.header}</h1>
        <p className="cardsubheader">{data.subheader}</p>
        <div>
          <a className="cardimg" href="#">
            {data.cta}
          </a>
          <img className="cardicon" src={data.ctaicon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
