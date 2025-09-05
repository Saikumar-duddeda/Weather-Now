import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import WeatherCard from './components/WeatherCard';
import Loader from './components/Loader';
import { getWeatherData } from './services/weatherAPI';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherData(city);
      setWeather(data);
    } catch (err) {
      setError('City not found');
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1 className="title">🌦️ Weather Now</h1>
      <SearchBox onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

export default App;
