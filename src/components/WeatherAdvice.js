const WeatherAdvice = ({ weather }) => {
    if (!weather) return null;
  
    const temp = weather.main.temp;
    let advice = "";
  
    if (temp > 30) advice = "It's hot! Stay hydrated.";
    else if (temp > 20) advice = "Nice weather for a walk.";
    else advice = "It's cold! Wear a jacket.";
  
    return <p>{advice}</p>;
  };
  
  export default WeatherAdvice;
  