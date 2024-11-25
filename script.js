// Function to fetch location data using ipapi.co
function fetchLocation() {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      document.getElementById('city').textContent = data.city || 'N/A';
      document.getElementById('country').textContent = data.country_name || 'N/A';
      document.getElementById('isp-name').textContent = data.org || 'N/A';
    })
    .catch(error => console.error('Error fetching location data:', error));
}

// Function to fetch weather data for Belmopan, Belize
function fetchWeather() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Belmopan,bz&appid=${apiKey}&units=metric`;

  fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById('condition').textContent = data.weather[0].description || 'N/A';
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

// Initialize data fetching when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchLocation();
  fetchWeather();
});
