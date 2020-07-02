// import axios from "axios";
// import React, { useState } from "react";

// const [query, setQuery] = useState("");
// const [weather, setWeather] = useState({});

// const api = {
//   key: "1c6c246e2594f31d87b28358e25d5176",
//   base: "https://api.openweathermap.org/data/2.5/"
// };

//   //fetch weather data from API
//   const search = (evt) => {
//     if (evt.key === "Enter") {
//       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then((res) => res.json())

//         .then((result) => {
//           setWeather(result);
//           setQuery("");
//           console.log(result);
//         });
//     }
//   };

// export { search };