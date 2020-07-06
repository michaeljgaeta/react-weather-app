import React, { useState, useEffect } from "react";
import WeatherBox from "./Views/WeatherBox";
import LocationBox from "./Views/LocationBox";
import { toFahrenheit, dateBuilder } from "./Components/Conversions";
import SelectCity from "./Components/SelectCity";

import "./index.css";

const api = {
  key: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  //updates city for API
  const [city, setCity] = useState("los angeles");

  //updates JSON to 'weather'
  const [weather, setWeather] = useState({});

  //controls temperature units
  const [unit, setUnit] = useState(false);

  useEffect(() => search(city), [city]);

  //fetch weather from API
  const search = (city) => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())

      .then((result) => {
        setWeather(result);
      });
  };

  //format current date
  const timeBuilder = (unixTimestamp) => {
    // adjusted for timezone and daylight savings
    let adjustedTime = new Date((unixTimestamp + weather.timezone - 3600) * 1000);

    let hours = adjustedTime.getHours();
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

        {/* display weather info */}
        {typeof weather.main != "undefined" ? (
          <>
            <LocationBox
              city={weather.name}
              country={weather.sys.country}
              date={dateBuilder(new Date())}
            />
            <WeatherBox
              temp={!unit ? Math.round(weather.main.temp) : toFahrenheit(weather.main.temp)}
              unit={unit}
              onChange={setUnit}
              weather={weather.weather[0].icon}
              sunrise={timeBuilder(weather.sys.sunrise)}
              sunset={timeBuilder(weather.sys.sunset)}
            />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
