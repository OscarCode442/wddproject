// Replace YOUR_API_KEY with your actual API key from OpenWeatherMap
const apiKey = "9759bf8ad638b8f6a851effbef8116f6";
const city = "Carlsbad";

// Fetch current weather data
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const currentTemperature = data.main.temp;
    const conditionDescription = data.weather[0].description;
    const humidity = data.main.humidity;
    
    // Display current weather data on the page
    document.getElementById("current-temperature").textContent = currentTemperature;
    document.getElementById("condition-description").textContent = conditionDescription;
    document.getElementById("humidity").textContent = humidity;
  })
  .catch(error => {
    console.log("Error fetching current weather:", error);
  });

// Fetch three-day forecast
fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apiKey}&units=metric&cnt=3`)
  .then(response => response.json())
  .then(data => {
    const forecast = data.list;

    // Display three-day forecast on the page
    forecast.forEach((day, index) => {
      const temperature = day.temp.day;
      document.getElementById(`day${index + 1}-temperature`).textContent = temperature;
    });
  })
  .catch(error => {
    console.log("Error fetching forecast:", error);
  });
