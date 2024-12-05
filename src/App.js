import React, { useState } from "react";
import axios from "axios";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherAdvice from "./components/WeatherAdvice";

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            q: city,
            appid: process.env.REACT_APP_WEATHER_API_KEY,
            units: "metric",
          },
        }
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Weather App</h1>
      <WeatherSearch onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} />
      <WeatherAdvice weather={weather} />
    </div>
  );
};

export default App;
