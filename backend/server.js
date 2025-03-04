const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config(); // Load API key from .env file

const app = express();
const PORT = process.env.PORT || 5050;
const API_KEY = process.env.API_KEY; // Get API key from .env

// Middleware
app.use(cors());
app.use(express.json());

// Route to get weather data
app.get("/weather", async (req, res) => {
    try {
        const city = req.query.city;
        if (!city) {
            return res.status(400).json({ error: "City name is required" });
        }

        if (!API_KEY) {
            return res.status(500).json({ error: "API key is missing. Please check your .env file." });
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        console.log(`Fetching weather for: ${city} → ${url}`); // Debugging

        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error("API Error:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "City not found or API error" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
