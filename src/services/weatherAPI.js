export async function getWeatherData(city) {
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
  const geoRes = await fetch(geoUrl);
  const geoData = await geoRes.json();
  if (!geoData.results || geoData.results.length === 0) {
    throw new Error('City not found');
  }
  const { latitude, longitude, name } = geoData.results[0];

  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
  const weatherRes = await fetch(weatherUrl);
  const weatherData = await weatherRes.json();
  const current = weatherData.current_weather;

  return {
    city: name,
    temperature: current.temperature,
    windSpeed: current.windspeed,
    condition: current.weathercode
  };
}
