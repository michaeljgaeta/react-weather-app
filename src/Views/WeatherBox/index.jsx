import React from "react";
import Temp from "../../Components/Temp";
import Weather from "../../Components/Weather";
import SunRiseSet from "../../Components/SunRiseSet";
import ToggleInput from "../../Components/ToggleInput";
import "./index.css";

export default function WeatherBox(props) {
  return (
    <div className="weather-box">
      <Temp unit={props.unit} temp={props.temp} />
      <Weather weather={props.weather} />
      <SunRiseSet sunrise={props.sunrise} sunset={props.sunset} />
      <ToggleInput value={props.unit} onChange={props.onChange} />
    </div>
  );
}
