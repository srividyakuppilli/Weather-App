import React from "react";
import { WiHumidity, WiBarometer, WiStrongWind } from "react-icons/wi";

function WeatherCard({ data }) {
  return (
    <div className="weather-card mt-5">
      <h2>{data.name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt=""
      />

      <h1>{data.main.temp}°C</h1>
      <p>{data.weather[0].description}</p>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="info-box">
            <WiHumidity size={40} />
            <p>Humidity</p>
            <h5>{data.main.humidity}%</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="info-box">
            <WiBarometer size={40} />
            <p>Pressure</p>
            <h5>{data.main.pressure} hPa</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="info-box">
            <WiStrongWind size={40} />
            <p>Wind</p>
            <h5>{data.wind.speed} m/s</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
