

// async function logJSONData() {
//   const city = "Los Angeles"; 
//   const apiKey = "65e48f2a7f9bba883fac70a272846e9b"; 

//   const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

//   const response = await fetch(url);
//   const jsonData = await response.json();
//   console.log(jsonData);
// }

// logJSONData();

document.getElementById('weatherForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const city = document.getElementById('cityInput').value;
  logJSONData(city);
});

async function logJSONData(city) {
  const apiKey = '65e48f2a7f9bba883fac70a272846e9b'; 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=imperial`;

  const response = await fetch(url);
  const jsonData = await response.json();

  displayWeatherData(jsonData);
}

function displayWeatherData(data) {
  const cityNameElement = document.getElementById('cityName');
  const currentTempElement = document.getElementById('currentTemp');
  const humidityElement = document.getElementById('humidity');
  const highTempElement = document.getElementById('highTemp');
  const lowTempElement = document.getElementById('lowTemp');
  const weatherConditionElement = document.getElementById('weatherCondition');
  const weatherIconElement = document.getElementById('weatherIcon');

  cityNameElement.textContent = data.name;
  currentTempElement.textContent = `Current Temperature: ${data.main.temp}°F`;
  humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
  highTempElement.textContent = `Day's High Temperature: ${data.main.temp_max}°F`;
  lowTempElement.textContent = `Day's Low Temperature: ${data.main.temp_min}°F`;
  weatherConditionElement.textContent = `Weather Condition: ${data.weather[0].main}`;
  weatherIconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}


