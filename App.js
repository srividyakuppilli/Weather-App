import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const API_KEY = "e3f05a1abbd90ced2511c9b1d64ae30f";

function App() {
  const [weather, setWeather] = useState(null);

  const getWeather = async (city) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      setWeather(res.data);
    } catch {
      alert("City not found ❌");
    }
  };

  return (
    <div className={`app ${weather?.weather[0].main.toLowerCase()}`}>
      <Navbar />

      <div className="container text-center mt-5">
        <SearchBar getWeather={getWeather} />

        {weather && <WeatherCard data={weather} />}
      </div>
    </div>
  );
}

export default App;
