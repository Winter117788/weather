const RainyAnimation = () => {
    const drops = Array.from({ length: 20 }, (_, index) => (
      <div
        className="raindrop"
        key={index}
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 0.8}s`,
        }}
      ></div>
    ));
  
    return <div className="rainy-animation">{drops}</div>;
  };

const WeatherAnimation = ({ weather }) => {
    if (!weather) return null;
  
    const condition = weather.weather[0].main.toLowerCase();
  
    if (condition.includes("sun")) {
      return <div className="sunny-animation"></div>;
    }
    if (condition.includes("rain")) {
        return <RainyAnimation />;
    }
    if (condition.includes("cloud")) {
      return <div className="cloudy-animation"></div>;
    }
  
    return <RainyAnimation />;
  };
  
  export default WeatherAnimation;
  