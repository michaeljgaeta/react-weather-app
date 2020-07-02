import React from "react";
import Temp from "../../Components/Temp"
import Weather from "../../Components/Weather"
import "./index.css";

export default function WeatherBox(props) {
  return (
    <div className="weather-box">
      <Temp temp={props.temp}/>
      <Weather weather={props.weather}/>
    </div>
  );
}
