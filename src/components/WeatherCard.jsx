import React from 'react';

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <p>🌡️ Temperature: {data.temperature} °C</p>
      <p>💨 Wind Speed: {data.windSpeed} m/s</p>
      <p>☁️ Condition: {data.condition}</p>
    </div>
  );
}

export default WeatherCard;
