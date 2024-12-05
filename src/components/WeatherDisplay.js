import React from "react";
import WeatherAnimation from "./WeatherAnimation";

const WeatherDisplay = ({ weather }) => {
  if (!weather) return <p>Search for a city to get weather data.</p>;

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp.toFixed(2)} °C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>

      {/* 动画效果放在下面 */}
      <div style={{ marginTop: "20px" }}>
        <WeatherAnimation weather={weather} />
      </div>
    </div>
  );
};

export default WeatherDisplay;
