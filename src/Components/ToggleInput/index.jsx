import React from "react";
import "./index.css";

export default function ToggleInput(props) {
  return (
    <div>
      <div className="toggle">
        <p className="degrees">°C</p>
        <label className="switch">
          <input
            onChange={(event) => props.onChange(event.target.checked)}
            type="checkbox"
            checked={props.value}
          />{" "}
          <div></div>
        </label>
        <p className="degrees">°F</p>
      </div>
    </div>
  );
}
