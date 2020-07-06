import React, { useState, useEffect } from "react";
import WeatherBox from "./Views/WeatherBox";
import LocationBox from "./Views/LocationBox";
import ToggleInput from "./Components/ToggleInput";
import { tryConvert, toCelsius, toFahrenheit, dateBuilder } from "./Components/Conversions";
import SelectCity from "./Components/SelectCity";
import "./index.css";

const api = {
  key: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  //updates query input dynamically as typed
  const [city, setCity] = useState("lisbon");
  //updates name of JSON object to 'weather'
  const [weather, setWeather] = useState({});

  //switches temp scale between metric and imperial
  const [unit, setUnit] = useState(false);

  // console.log("unit", unit);

  //default fetch weather object from API
  const search = (city) => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())

      .then((result) => {
        //renames json object to 'weather'
        setWeather(result);
      });
  };

  useEffect(() => search(city), [city]);
  // const search = (evt) => {
  //   if (evt.key === "Enter") {
  //     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  //       .then((res) => res.json())

  //       .then((result) => {
  //         //renames json object to 'weather'
  //         setWeather(result);

  //         //resets query
  //         setQuery("");
  //       });
  //   }
  // };

  useEffect(() => {
    console.log("toggle has changed");
  }, [unit, weather]);

  //builds and formats time for app
  const timeBuilder = (unixTimestamp) => {
    //Issue: Cannot get the time to adjust with daylight savings--------

    // Create a new JavaScript Date object based on the unix timestamp

    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let adjustedTime = new Date((unixTimestamp + weather.timezone) * 1000);

    // Hours part from the timestamp
    let hours = adjustedTime.getHours();

    // Minutes part from the timestamp
    let minutes = "0" + adjustedTime.getMinutes();

    let formattedTime = hours + ":" + minutes.substr(-2);
    return formattedTime;
  };

  return (
    //set background image (warm/cold)
    <div
      className={
        typeof weather.main != "undefined"
          ? Math.round(weather.main.temp) >= 23
            ? "app warm"
            : "app"
          : "app"
      }
    >
      {/* search for city */}
      <div className="main">
        <SelectCity value={city} onChange={setCity} />
        {/* <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div> */}

        {/* display weather info */}
        {typeof weather.main != "undefined" ? (
          <>
            <LocationBox
              city={weather.name}
              country={weather.sys.country}
              date={dateBuilder(new Date())}
            />
            <WeatherBox
              temp={
                !unit ? Math.round(weather.main.temp) : toFahrenheit(Math.round(weather.main.temp))
              }
              unit={unit}
              onChange={setUnit}
              weather={weather.weather[0].icon}
              sunrise={timeBuilder(weather.sys.sunrise)}
              sunset={timeBuilder(weather.sys.sunset)}
            />
            {/* <ToggleInput value={unit} onChange={setUnit} /> */}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
