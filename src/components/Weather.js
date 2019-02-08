import React from "react";

const Weather = props => {
  const weather = props.data;
  const kelvinToF = temp => {
    return Math.floor((temp - 273.15) * (9 / 5) + 32);
  };
  return (
    <div className="card">
      <h1>{`Current weather in ${weather.name}`}</h1>
      <p>
        <strong>Temperature: </strong>
        {kelvinToF(weather.main.temp)}
      </p>
      <p>
        <strong>Description: </strong> {weather.weather[0].main}
      </p>
    </div>
  );
};

export default Weather;
