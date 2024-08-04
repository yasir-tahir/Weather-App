const inputBox = document.getElementById('input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.getElementById('weather-img');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather (city){
    const api_key = "881dde726c051f57f73aa8859b741243";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    const weather_data = await fetch (`${url}`).then(response => response.json());

    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
            case 'Clouds':
                weather_img.src = "images/cloud.png";
                break;

            case 'Clear':
            weather_img.src = "images/clear.png";
            break;


            case 'Rain':
            weather_img.src = "images/rain.png";
            break;


            case 'Mist':
            weather_img.src = "images/mist.png";
            break;


            case 'Snow':
            weather_img.src = "images/snow.png";
            break;

            case 'Cloudy_Night':
            weather_img.src = "images/cloudy-night.png";
            break;

            case 'Forest':
            weather_img.src = "images/foret.png";
            break;

            case 'Thunder':
            weather_img.src = "images/thunder.png";
            break;

            

            
    }

    console.log(weather_data)
}

searchBtn.addEventListener('click', () =>{
    checkWeather(inputBox.value);
})
