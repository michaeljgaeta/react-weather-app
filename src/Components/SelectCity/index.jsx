import React from "react";

export default function SelectCity(props) {
  return (
    <div>
      <select onChange={(event) => props.onChange(event.target.value)} value={props.value} name="city">
        <option value="london">London</option>
        <option value="new york city">NYC</option>
        <option value="lisbon">Lisbon</option>
      </select>
    </div>
  );
}
