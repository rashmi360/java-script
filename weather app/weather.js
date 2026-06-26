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
     weather.innerHTML += `
            <div class="card">
                <h3>${data.name}</h3>

                
            </div>
        `;

    
}
searchBtn.addEventListener("click",getWeather)

