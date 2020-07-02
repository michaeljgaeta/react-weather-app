import React, { useState } from "react";
import WeatherBox from "./Views/WeatherBox";
import LocationBox from "./Views/LocationBox";
import "./index.css";

// const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY
const api = {
  key: "1c6c246e2594f31d87b28358e25d5176",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  //react hooks
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  //fetch weather data from API
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())

        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  //build date function
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined" ? (weather.main.temp > 16 ? "app warm" : "app") : "app"
      }
    >
      <main className="main">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {typeof weather.main != "undefined" ? (
          <>
            <LocationBox
              city={weather.name}
              country={weather.sys.country}
              date={dateBuilder(new Date())}
            />
            <WeatherBox temp={Math.round(weather.main.temp)} weather={weather.weather[0].main} />
          </>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
