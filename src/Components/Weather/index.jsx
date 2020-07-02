import React from "react";
import "./index.css";

export default function Weather(props) {
  return (
    <div className="weather">
      <img className="icon" src={`http://openweathermap.org/img/w/${props.weather}.png`} alt="weather icon" />
    </div>
  );
}
