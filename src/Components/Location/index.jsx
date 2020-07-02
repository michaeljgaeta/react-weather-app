import React from "react";
import "./index.css";

export default function Location(props) {
  return <div className="location">{props.city}, {props.country}</div>;
}
