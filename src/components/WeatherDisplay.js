import React from "react";

const WeatherDisplay = ({weather}) => {
    if(!weather) return <p>Search for a city to get weather data</p>

    return (
        <div>
            <h2>{weather.name}</h2>
            <p>Temperature: {weather.main.temp} °C</p>
            <p>Condition: {weather.weather[0].description}</p>
            <p>Humidity: {weather.main.humidity}%</p>
        </div>
    );
};

export default WeatherDisplay;