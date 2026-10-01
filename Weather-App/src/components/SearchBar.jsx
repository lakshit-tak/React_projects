import { useState } from "react";

function SearchBar({ onSearch, onLocation }) {

    const [input, setInput] = useState("");

    const [locationLoading, setLocationLoading] = useState(false);


    function handleSearch() {

        const cleanCity = input.trim();

        if (cleanCity === "") {

            alert("Pleace enter a city name");

            return;
        }

        onSearch(cleanCity);

        setInput("");
    }

    function handleKeyDown(e) {

        if (e.key === "Enter") {
            handleSearch();
        }
    }

    function handleLocation() {

        if (!navigator.geolocation) {

            alert("Geolocation is not supported by your browser");

            return;
        }

        setLocationLoading(true);

        navigator.geolocation.getCurrentPosition(
            (position) => {

                const latitude = position.coords.latitude;

                const longitude = position.coords.longitude;

                onLocation(latitude, longitude);

                setLocationLoading(false);
            },
            () => {
                alert("Unable to get your location");

                setLocationLoading(false);
            }
        );
    }

    return (

        <div>

            <div className="search">

                <input className="cityInput" type="text" placeholder="Enter city name..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} />

                <button className="Btn searchBtn" onClick={handleSearch}>Search</button>

            </div>

            <button className="Btn locationBtn" onClick={handleLocation} disabled={locationLoading} > {locationLoading ? "📍 Getting Location..." : "📍 Use My Location"}</button>

        </div>
    );

}

export default SearchBar;