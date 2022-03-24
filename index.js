const cityUrl = "http://api.openweathermap.org/geo/1.0/direct?q=";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?";

const apiKey = config.apiKey;


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
    console.log(`Cloudiness: ${data.clouds.all}%`);
    console.log(`Humidity: ${data.main.humidity}%`);
    console.log(`Wind Speed: ${data.wind.speed} m/s`);

}

getWeather('Tegucigalpa');