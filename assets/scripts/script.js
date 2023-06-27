

// Set up the API Key to a variable 
// var API KEY 
var APIkey = '1015e99ac996eb49b15b505b9353b975';
// var cityName = document.querySelector("input-section").value;
// Set up a city name Variable 
var cityName = 'Chicago'
var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`
var weatherAPI = `api.openweathermap.org/data/2.5/weather?id=524901&appid=${APIkey}`;
console.log(weatherURL);
console.log(weatherAPI);
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
console.log(queryURL);

// fetch the data from the API

// fetch(queryURL) 
function getWeather() {
   
fetch(queryURL)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}
