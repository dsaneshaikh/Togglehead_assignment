import React from "react";
import "../style/statssection.css";

function StatsSection() {
  // Example data for the four columns
  const statsData = [
    {
      smallTitle: "Lorem ipsum",
      bigNumber: "123+",
      subTitle: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit; sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      smallTitle: "Lorem ipsum",
      bigNumber: "12+",
      subTitle: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit; sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      smallTitle: "Lorem ipsum",
      bigNumber: "12+",
      subTitle: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit; sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
    {
      smallTitle: "Lorem ipsum",
      bigNumber: "123",
      subTitle: "Lorem ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit; sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    },
  ];

  return (
    <div className="stats-section">
      {statsData.map((item, index) => (
        <div key={index} className="stats-item">
          <h3 className="small-title">{item.smallTitle}</h3>
          <h2 className="big-number">{item.bigNumber}</h2>
          <h4 className="sub-title">{item.subTitle}</h4>
          <p className="description">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsSection;
