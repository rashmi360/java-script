const API_KEY = "ef382259d8fe3d48316ee642ffbbd846"

const city = document.getElementById("city")
const searchBtn = document.getElementById("SearchBtn")
const weather = document.getElementById("weather")

async function getWeather() {
    const cityName=city.value.trim()
    if(cityName==="")return;
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    )
    const data = await response.json();

    if(data.cod=="404"){
        weather.innerHTML="<h2>city not found</h2>"
        return
    }
    weather.innerHTML = `
<div class="card">

    <h2>${data.name}</h2>

    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="Weather Icon">

    <h1>${Math.round(data.main.temp)}°C</h1>

    <p class="condition">${data.weather[0].main}</p>

    <div class="weather-grid">

        <div class="box">
            <span>📅 Day</span>
            <h4>${new Date().toLocaleDateString("en-US",{weekday:"long"})}</h4>
        </div>

        <div class="box">
            <span>💧 Humidity</span>
            <h4>${data.main.humidity}%</h4>
        </div>

        <div class="box">
            <span>🌬 Wind</span>
            <h4>${data.wind.speed} m/s</h4>
        </div>

        <div class="box">
            <span>🥵 Feels Like</span>
            <h4>${Math.round(data.main.feels_like)}°C</h4>
        </div>

    </div>

</div>
`;

    
}
searchBtn.addEventListener("click",getWeather)

