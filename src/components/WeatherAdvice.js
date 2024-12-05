import React from "react";

const WeatherAdvice = ({ weather }) => {
  if (!weather) return null;

  const temp = weather.main.temp;
  const condition = weather.weather[0].main.toLowerCase();
  let advice = "";

  if (temp > 30) {
    advice = "It's hot! Stay hydrated.";
  } else if (temp > 20) {
    advice = "Nice weather for a walk.";
  } else if (temp <= 20) {
    advice = "It's cold! Wear a jacket.";
  }

  if (condition.includes("rain")) {
    advice += " Don't forget an umbrella!";
  }

  return <p>{advice}</p>;
};

export default WeatherAdvice;
