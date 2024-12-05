import React from "react";
import WeatherAnimation from "./WeatherAnimation";

const WeatherDisplay = ({ weather }) => {
  if (!weather) return <p>Search for a city to get weather data.</p>;

  const condition = weather.weather[0].description.toLowerCase();

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <h2>{weather.name}</h2>
        <p>Temperature: {weather.main.temp} °C</p>
        <p>Condition: {condition}</p>
        <p>Humidity: {weather.main.humidity}%</p>
      </div>
      <WeatherAnimation condition={condition} />
    </div>
  );
};

export default WeatherDisplay;
