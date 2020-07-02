import React from "react";
import Location from "../../Components/Location";
import Date from "../../Components/Date";

export default function LocationBox(props) {
  return (
    <div className="location-box">
      <Location city={props.city} country={props.country} />
      <Date date={props.date} />
    </div>
  );
}
