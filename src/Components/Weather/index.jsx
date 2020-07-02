import React from 'react'
import "./index.css"

export default function Weather(props) {
  return (
    <div className="weather">
      {props.weather}
    </div>
  )
}
