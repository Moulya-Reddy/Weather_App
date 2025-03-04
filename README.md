# Weather_App

This is a **Weather App** that fetches real-time weather data using the **OpenWeather API**.  
Users can enter a city name to get the **current temperature, weather conditions, humidity, and wind speed** of that city.

## Features:-

*Real-time Weather Data* – Get current weather for any city.  
*User-Friendly UI* – Simple input field for searching cities.  
*API Integration* – Fetches data from **OpenWeather API** using Express.js.  
*Backend with Node.js* – Handles API requests securely.  


## Requirements:-

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express.js, Axios, dotenv  
- **API:** OpenWeather API  


## Installation & Setup:-

##1.**Clone the Repository**
```sh
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

##2.**Install Dependencies**
```sh
npm install
```

##3.**Set Up API Key**
1. *Get an API key* from [OpenWeather](https://home.openweathermap.org/api_keys).  
2. Inside the *backend folder*, create a `.env` file:
   ```
   API_KEY=your_actual_openweather_api_key
   ```

##4.**Start the Backend**
Give "npm init -y" to initialize the npm and then start it.
```sh
npm start
```
If successful, you should see:
```
✅ Server running on http://localhost:5050
```

##5.**Open the Frontend**
- Open *`index.html`* in your *browser*.
- Enter a *city name* and click *"Get Weather"*.

This will give you the weather update of that city.
