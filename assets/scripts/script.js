
// set up the variables for the HTML elements
var fetchButton = document.getElementById('fetch-button');
// var inputSection = document.getElementById('input-section');
var cityInput = document.getElementById("city-input");
// weatherContainer = document.getElementById('weather-container');
// city buttons
var cityButtons = document.getElementById('city-buttons');
var forecast = document.querySelector(".card")
// Set up the API Key to a variable 

// var API KEY 
var APIkey = '1015e99ac996eb49b15b505b9353b975';



//TODO:
// - hide weather data until search is performed
// - add event listener for search form 
// add city to search history
// 5 day forecast 
// clear search index

function getWeather() { 


    var cityName = document.querySelector("city-input").value;
// Set up a city name Variable 
// var cityName = 'Chicago'
// let city = "";


    var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`
    var weatherAPI = `api.openweathermap.org/data/2.5/weather?id=524901&appid=${APIkey}`;
    // console.log(weatherURL);
    // console.log(weatherAPI);

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;


    
    fetch(queryURL) 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        
        //loop over the data and create a new element for each item in the array
            for (var i = 0; i < data.length; i++) { 
                var createEl = document.createElement("div");
                var createCard = document.createElement("card");
                var createP = document.createElement("p");
                var createImg = document.createElement("img");

                //set the content of the new elements to the data from the API
                createP.textContent = data[i].name;


        }
     
    })
    .catch(error => console.error(error));
}
fetchButton.addEventListener('click', getWeather);

// fetch(queryURL) 
// function getWeather() {
   
// fetch(queryURL)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
// }
