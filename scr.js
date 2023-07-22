// html tags

// Inputs and other
let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name')
// Weather data in searching place
let temp_now = document.querySelector('.temp_now')
let temp_max_min = document.querySelector('.temp_max_min')
let temp_feels = document.querySelector('.temp_feels')
let desc = document.querySelector('.desc')
let WIcon = document.querySelector('.weather_icon')
let icon = document.querySelector(".icon")
// Weather data in user home place
let home_title = document.querySelector(".home_title")
let home_desc = document.querySelector(".home_desc")
let home_icon = document.querySelector(".home_icon")

// other vars

let appid = "56b211a124e9b0a95c416d33a34abbaf"

function home_weather(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&lang=ru&appid=" + appid)
        .then(response => response.json())
        .then(displayHome)
        .catch(err => alert("Возникли проблемы при определении местоположения"))
}

button.addEventListener('click', function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputvalue.value + "&units=metric&lang=ru&appid=" + appid)
        .then(response => response.json())
        .then(displayData)
        .catch(err => alert('Место "' + inputvalue.value + '" не найдено'))
})

function getHomeWeather() {
    navigator.geolocation.getCurrentPosition(success, fail)
}

const displayData =(weather)=> {
    temp_now.innerText = weather.main.temp
    temp_max_min.innerText = "🠕 " + weather.main.temp_max + " / 🠗 " + weather.main.temp_min
    temp_feels.innerText = "Ощущается как: " + weather.main.feels_like
    desc.innerText = weather.weather[0].description

    var icon_url = "https://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"
    icon.src = icon_url
}

const displayHome = (weather) => {
    home_title.innerText = "Сейчас у Вас " + weather.main.temp + "С\nОщущается как " + weather.main.feels_like + "C"
    home_desc.innerText = weather.weather[0].description

    var icon_url = "https://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png"
    home_icon.src = icon_url
}

function fail(position) {
    home_title.innerText = "WeatherIng не удаётся получить ваше местоположение."
    home_desc.innerText = "Проверьте настройки местоположения"
}

function success(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    home_weather(lat, lon)
}

getHomeWeather()