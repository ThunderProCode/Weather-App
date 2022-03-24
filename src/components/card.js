const cityUrl = "http://api.openweathermap.org/geo/1.0/direct?q=";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "c02496050420768f1e798238df0de32c";

const getCity = async (cityName) => {
    let response = await fetch(`${cityUrl}${cityName}&limit=1&appid=${apiKey}`);
    let data = await response.json();
    return [data[0].lat, data[0].lon ];
}


const getWeather = async (cityName) => {
    const coords = await getCity(cityName);
    const url = `${weatherUrl}lat=${coords[0]}&lon=${coords[1]}&appid=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(`Country: ${data.sys.country}`);
    console.log(`City: ${data.name}`);
    console.log(`Cloudiness: ${data.clouds.all}%`);
    console.log(`Humidity: ${data.main.humidity}%`);
    console.log(`Wind Speed: ${data.wind.speed} m/s`);
    console.log(`Temp: ${data.main.temp}`);

    return [data.sys.country,data.clouds.all,data.main.humidity,data.wind.speed, data.main.temp, data.name];
}

const card = async (cityName) => {
    const weatherData = await getWeather(cityName);

    const view = `
        <div class="header">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg>

            <div class="city-name">${weatherData[5]}</div>

            <div class="country">
                ${weatherData[0]}
            </div>
        </div>
        <div class="temp-container">
            ${weatherData[4]}°
        </div>
        <div class="cloudiness-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
            </svg>
            <p>Clear sky</p>
        </div>
        <div class="weather-content">
            <div class="info-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-droplet-fill" viewBox="0 0 16 16">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z"/>
                </svg>
                <p>${weatherData[2]}%</p>
            </div>

            <div class="info-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                </svg>
                <p>${weatherData[3]} k/hr</p>
            </div>
        </div>
    `;
    const cardsContainer = document.getElementById('climate-cards-section');
    const cardContainer = document.createElement('div');
    cardContainer.className = "card";
    cardContainer.innerHTML = view;
    cardsContainer.append(cardContainer);
}

export default card;