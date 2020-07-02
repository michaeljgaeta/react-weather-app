import React from "react";
import "./index.css";

export default function SunRiseSet(props) {
  return (
    <div className="sun-rise-set">
      <div>Sunrise: {props.sunrise} AM</div>
      <div>Sunset: {props.sunset} PM</div>
    </div>
  );
}
