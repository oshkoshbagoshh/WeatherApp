


var APIkey = '14b350d2360968f83345d26efcf83291';
// var citName = document.querySelector("input-section").value;
var cityName = 'chicago'
var wheatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`

fetch(wheatherURL)
.then(function (response) {
    console.log("Res: ", response)
    return response.json()
})
.then(function(data){
    console.log("DATA: ", data.name)
})