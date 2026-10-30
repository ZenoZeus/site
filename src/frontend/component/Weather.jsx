import React, { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
const Weather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      try {
        const res = await axios.get(`https://wttr.in/Kanpur?format=j1`);

        setWeather(res.data.current_condition[0]);
      } catch (err) {
        console.error(err);
      }
    });
  }, []);

  // ✅ Prevent crash
  if (!weather) {
    return <p className="text-black">Loading...</p>;
  }

  const temp = parseInt(weather.temp_C);
  const condition = weather.weatherDesc[0].value.toLowerCase();

  let type = "";

  if (condition.includes("rain") || condition.includes("drizzle")) {
    type = "rainy";
  } else if (temp <= 15) {
    type = "cold";
  } else if (temp > 30) {
    type = "hot";
  } else {
    type = "moderate";
  }

  const styles = {
  cold: "bg-gradient-to-r from-blue-900 to-cyan-400 text-white",
  hot: "bg-gradient-to-r from-orange-500 to-yellow-300 text-black",
  moderate: "bg-gradient-to-r from-green-400 to-blue-300 text-black",
  rainy: "bg-gradient-to-r from-gray-700 to-blue-500 text-white",
};

console.log(weather)
  const emoji = {
    cold: "❄️",
    hot: "☀️",
    moderate: "🌤",
    rainy: "🌧",
  };

  return (
  <div className="flex justify-center items-center bg-black p-10  ">

    <div className="flex items-center gap-10 ">

      {/* Weather Card */}
      <div className={`p-6 rounded-xl ${styles[type]} text-4xl h-[60vh] flex flex-col justify-center items-center hover:scale-105 transition duration-300`}>

        <p className="text-zinc-200 font-nunito">
          {emoji[type]} {type.toUpperCase()} WEATHER
        </p>

        <p className="text-6xl mt-4 text-white">{temp}°C</p>

        <p className="text-xl mt-2 text-zinc-200">
          Feels like: {weather.FeelsLikeC}°C
        </p>

        <p className="text-lg mt-2 text-zinc-200">
          {weather.weatherDesc[0].value}
        </p>

        {/* Wind + Humidity */}
        <div className="flex gap-10 mt-6 text-lg text-zinc-200">
          
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faWind} />
            {weather.windspeedKmph} km/h
          </div>

          <div className="flex items-center gap-2">
            💧 {weather.humidity}%
          </div>

        </div>

      </div>

      {/* Image */}
      <img
        src={`/${type}.webp`}
        alt={type}
        className="h-[40vh] rounded-lg hover:scale-105 transition duration-300"
      />

    </div>
  </div>
);
};

export default Weather;
