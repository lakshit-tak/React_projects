import { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import WeatherCard from "./WeatherCard.jsx";

function Weather() {

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    async function fetchWeatherCity(searchCity) {  //searchCity is come from searchBar cleanCity value

        try {

            setLoading(true);
            setError("");

            const apiKey = import.meta.env.VITE_WEATHER_APIKEY;

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`);

            if (!response.ok) {

                throw new Error("City not found");
            }

            const data = await response.json();

            setWeather(data);

        } catch (error) {

            setError(error.message);
            setWeather(null);

        } finally {

            setLoading(false);

        }

    }

    async function fetchWeatherLocation(latitude, longitude) {

        try {

            setLoading(true);
            setError("");

            const apiKey = import.meta.env.VITE_WEATHER_APIKEY;

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);

            if (!response.ok) {

                throw new Error("Unable to get weather");
            }

            const data = await response.json();

            setWeather(data);

        } catch (error) {

            setError(error.message);
            setWeather(null);

        } finally {

            setLoading(false);

        }

    }



    return (
        <div className="container">

            <div className="weather-app">

                <h1>🌤️ Weather App</h1>

                <SearchBar onSearch={fetchWeatherCity}
                    onLocation={fetchWeatherLocation} />

                {loading && <p className="msg">Loading...</p>}

                {error && <p className="msg">{error}</p>}

                {!loading && !error && (

                    <WeatherCard weather={weather} />

                )}


            </div>
        </div>

    );
}

export default Weather;