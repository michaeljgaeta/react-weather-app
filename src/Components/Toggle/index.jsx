import React from "react";
import "./index.css";

export default function Toggle() {
  return (
    <div className="container">
      <p className="degrees">°C</p>
      <label className="switch">
        <input type="checkbox" /> <div></div>
      </label>
      <p className="degrees">°F</p>
    </div>
  );
}
