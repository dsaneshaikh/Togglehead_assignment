import React, { useState } from "react";
import { carouselslides, card } from "./data/data.json";
import "./App.css";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import InfoSection from "./Components/InfoSection";
import Card from "./Components/Card";

function App() {
  return (
    <div className="app">
      <Header />
      <Carousel data={carouselslides} />
      <InfoSection />
      <div className="cards">
        {card.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
