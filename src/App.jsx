import React, { useRef } from "react";
import { carouselslides, card } from "./data/data.json";
import "./App.css";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import InfoSection from "./Components/InfoSection";
import Card from "./Components/Card";
import CardSlider from "./Components/CardSlider";
import StatsSection from "./Components/StatsSection";
import FAQSection from "./Components/FaqSection";

function App() {
  return (
    <div className="app">
      <Header />
      <Carousel data={carouselslides} />
      <InfoSection />
      <CardSlider />
      <StatsSection />
      <FAQSection />
    </div>
  );
}

export default App;
