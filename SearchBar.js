import React, { useState } from "react";

function SearchBar({ getWeather }) {
  const [city, setCity] = useState("");

  return (
    <div className="search-box mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Enter city name..."
        onChange={(e) => setCity(e.target.value)}
      />

      <button className="btn btn-primary mt-3" onClick={() => getWeather(city)}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
