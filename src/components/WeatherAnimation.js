import React from "react";

const WeatherAnimation = ({ condition }) => {
  if (condition.includes("sun")) {
    return <div className="sunny-animation"></div>;
  } else if (condition.includes("rain")) {
    return (
      <div className="rainy-animation">
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
        <div className="rain-drop"></div>
      </div>
    );
  } else if (condition.includes("cloud")) {
    return <div className="cloudy-animation"></div>;
  } else {
    return <p>No animation available</p>;
  }
};

export default WeatherAnimation;