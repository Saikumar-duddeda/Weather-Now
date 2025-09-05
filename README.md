
# 🌦️ Weather Now

A simple React app to check **current weather** for any city using the **Open-Meteo API** (no API key needed).

---

## 1) What this app does

- Lets you type a **city name** and see:
  - Temperature (°C)
  - Wind speed
  - Weather condition (mapped from Open-Meteo codes)
- Works fully in the **browser** (no custom backend).
- Fast, lightweight, and responsive.

---

## 2) Tech Used

- **React** (frontend)
- **CSS** (basic styling)
- **Open-Meteo** APIs:
  - Geocoding → city ➜ (lat, lon)
  - Forecast → (lat, lon) ➜ current weather

---

## 3) Project Structure (example)

Weather-Now/
│── public/
│ └── index.html
│── src/
│ ├── App.js # Main logic + state
│ ├── SearchBox.js # City input + search button
│ ├── WeatherCard.js # Shows weather info
│ ├── Loader.js # Loading spinner
│ ├── services/
│ │ └── weatherAPI.js # Calls Open-Meteo APIs
│ └── App.css # Styles
│── package.json
│── README.md



## 4) How it works (step by step)

1. **User enters a city** in the Search box and clicks **Search**.
2. The app calls **Open-Meteo Geocoding** to get **latitude & longitude**.  
   Example:  
   `https://geocoding-api.open-meteo.com/v1/search?name=Hyderabad`
3. With the coordinates, the app calls **Open-Meteo Forecast** to get **current weather**.  
   Example:  
   `https://api.open-meteo.com/v1/forecast?latitude=17.385&longitude=78.4867&current_weather=true`
4. While fetching, a **Loader** shows.
5. On success, **WeatherCard** displays temperature, wind, and condition.
6. On failure (e.g., city not found), an **error message** is shown.

---

## 5) Run locally (step by step)

1. **Clone the repo**
   ```bash
   git clone https://github.com/Saikumar-duddeda/Weather-Now.git
   cd Weather-Now
