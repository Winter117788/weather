import React, { useState } from "react";
import axios from "axios";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherAdvice from "./components/WeatherAdvice";
import "./index.css"; // 引入样式文件

const App = () => {
  const [weather, setWeather] = useState(null);

  // 动态背景的逻辑
  const getBackgroundClass = (weather) => {
    if (!weather) return "default";
    const condition = weather.weather[0].main.toLowerCase();
    if (condition.includes("clear")) return "sunny";
    if (condition.includes("rain")) return "rainy";
    if (condition.includes("cloud")) return "cloudy";
    return "default";
  };

  // 获取天气数据的函数
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

  // 主组件的返回部分
  return (
    <div className={getBackgroundClass(weather)}>
      <h1>Weather App</h1>
      <WeatherSearch onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} />
      <WeatherAdvice weather={weather} />
    </div>
  );
};

export default App;
