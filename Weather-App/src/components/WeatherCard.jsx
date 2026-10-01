function WeatherCard({ weather }) {

    if (!weather) {
        return null;
    }

    return (

        <div className="weather-card">

            <h2>{weather.name}</h2>

            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
            />

            <h3>🌡️ Temperature: {weather.main.temp}°C</h3>

            <p>{weather.weather[0].description}</p>

            <p>🌡️ Feels Like: {weather.main.feels_like}°C</p>

            <p>📉 Min: {weather.main.temp_min}°C</p>

            <p>📈 Max: {weather.main.temp_max}°C</p>

            <p>💧 Humidity: {weather.main.humidity}%</p>

            <p>💨 Wind Speed: {weather.wind.speed}m/s</p>

        </div>
    );
}
export default WeatherCard;