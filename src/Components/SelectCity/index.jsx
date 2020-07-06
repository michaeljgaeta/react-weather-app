import React from "react";
import "./index.css";

export default function SelectCity(props) {
  return (
    <div className="box">
      <>
        <select
          onChange={(event) => props.onChange(event.target.value)}
          value={props.value}
          name="city"
        >
          <option value="Los Angeles">Los Angeles</option>
          <option value="New York City">New York</option>
          <option value="Lisbon">Lisbon</option>
          <option value="London">London</option>
          <option value="Tokyo">Tokyo</option>
          <option value="Sydney">Sydney</option>
        </select>
        <img
          class="menu-icon"
          src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
          alt="Arrow Icon"
          aria-hidden="true"
        />
      </>
    </div>
  );
}
