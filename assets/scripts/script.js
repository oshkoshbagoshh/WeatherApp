/********************
 * 
 * 
 * 
//TODO:
// - hide weather data until search is performed
// - add event listener for search form 
// add city to search history
// 5 day forecast 
// clear search index
 * 
 * 
 */



// set up the buttons 
let citySearchForm = document.querySelector("#city-search");

// set up the buttons
let  cityButtons = document.querySelector("#city-buttons");


// set up the card
let  card = document.querySelector(".card");

// set up the card body 
let  cardBody = document.querySelector(".card-group");


// set up the weather card
let  weatherCard = document.querySelector("#weather-card");


// set up the forecast
let  forecast = document.querySelector("#forecast");


// API URL and key: 
const APIurl = "https://api.openweathermap.org/data/2.5/weather?q=";


const apiKey =  "3766791156393ba8d86e980934844d3e";




//hide the weather data untill search is performed


// search history

/// Search history
let  searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];


// search the local storage for the search history
// need to stringify the JSON
document.getElementById("clear-history").addEventListener("click", function () {
    searchHistory = [];
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));

    while (cityButtons.firstChild) {
        cityButtons.removeChild(cityButtons.firstChild);
    }
});




// add search histtory buttons 
searchHistory.forEach(function(cityName) {
    let cityButton = document.createElement("button");
    cityButton.className = "btn btn-secondary btn-lg btn-block";
    cityButton.textContent = cityName;
    // add event listener to the button
    cityButton.addEventListener("click", function() {
        citySearchForm[0].value = this.textContent
        citySearchForm.dispatchEvent(new Event("submit"));

    });
    cityButtons.appendChild(cityButton);



//************************ */
// event listener for search form
citySearchForm.addEventListener("submit", function(event) {
    event.preventDefault ();
const cityName = citySearchForm[0].value;


// add the city to the search history
let newCityButton = document.createElement("button");
newCityButton.className = "btn btn-secondary btn-lg btn-block";

newCityButton.textContent = cityName;

newCityButton.addEventListener("click", function() {
    citySearchForm[0].value = this.textContent;
    citySearchForm.dispatchEvent(new Event("submit"));
        });
        cityButtons.appendChild(newCityButton);
    });
    

    // ************************ 


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
            weatherCard.innerHTML = `
        <h2>${data.name}, ${data.sys.country}<img src="${iconUrl}" alt="Weather icon"></h2>
        <p>Temperature: ${data.main.temp} F</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} mph</p>
        `;
        });

    // 5 day forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`)
        .then(response => response.json())
        .then(data => {
            forecast.innerHTML = "";
            for (let i = 0; i < data.list.length; i += 8) {
                const date = new Date(data.list[i].dt_txt);
                const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }); 
                const iconCode = data.list[i].weather[0].icon;
                const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
                forecast.innerHTML += ` 
        <div class="card text-bg-dark mb-3">
        <div class="card-header">${dayOfWeek} <img src="${iconUrl}" alt="Weather icon"></div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Temperature: ${data.list[i].main.temp} F</li>
                <li class="list-group-item">Humidity: ${data.list[i].main.humidity} %</li>
                <li class="list-group-item">Wind Speed: ${data.list[i].wind.speed} mph</li>
            </ul>
        </div>
    </div>
        `;
            }
        });
});

cityButtons.addEventListener("input", function (event) {
    citySearchForm[0].value = event.target.value;
    citySearchForm.dispatchEvent(new Event("submit"));
});

// clear search history
document.getElementById("clear-history").addEventListener("click", function () {
    searchHistory = [];
    localStorage.setItem("search-history", JSON.stringify(searchHistory));

    while (cityButtons.firstChild) {
        cityButtons.removeChild(cityButtons.firstChild);
    }
});

// *************************
