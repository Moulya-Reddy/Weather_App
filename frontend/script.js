async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    try {
        const response = await fetch(`http://localhost:5050/weather?city=${city}`);
        const data = await response.json();

        if (data.error) {
            document.getElementById("weather").innerText = "City not found. Please try again.";
        } else {
            document.getElementById("weather").innerHTML = `
                <strong>${data.name}</strong><br>
                Temperature: ${data.main.temp}°C<br>
                Humidity: ${data.main.humidity}%<br>
                Condition: ${data.weather[0].description}
            `;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weather").innerText = "Error fetching data. Please try again.";
    }
}
