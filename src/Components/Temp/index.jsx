import React from "react";
import "./index.css";

export default function Temp(props) {
  return (
    <div className="temp">
      {props.temp}
      {!props.unit ? "°c" : "°F"}
    </div>
  );
}
