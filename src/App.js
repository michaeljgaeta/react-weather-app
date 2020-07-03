import React, { useState, useEffect } from "react";
import WeatherBox from "./Views/WeatherBox";
import LocationBox from "./Views/LocationBox";
import Toggle from "./Components/Toggle"
import "./index.css";

const api = {
  key: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  //Note: In the interview, I said that I didn't learn react hooks. During this project, I took a bit of time to understand them because I thought they would be useful.

  //Namely, I implemented 'useState' for updating the form input, passing the query to the API, and passing the weather data back from the API into React.

  //react hook [currentState, updateStateFunction]
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [toggle, setToggle] = useState("metric");

  //fetch weather data from API
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=${toggle}&APPID=${api.key}`)
        .then((res) => res.json())

        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

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
    //conditionally set App CSS class (warm/cold weather)
    <div
      className={
        typeof weather.main != "undefined"
          ? Math.round(weather.main.temp) >= 23
            ? "app warm"
            : "app"
          : "app"
      }
    >
      {/* search input w/ React hooks */}
      <div className="main">
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

        {/* conditionally set weather info */}
        {typeof weather.main != "undefined" ? (
          <>
            <LocationBox
              city={weather.name}
              country={weather.sys.country}
              date={dateBuilder(new Date())}
            />
            <WeatherBox
              temp={Math.round(weather.main.temp)}
              weather={weather.weather[0].icon}
              sunrise={timeBuilder(weather.sys.sunrise)}
              sunset={timeBuilder(weather.sys.sunset)}
            />
            <Toggle/>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
