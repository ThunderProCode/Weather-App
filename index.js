import card  from "./src/components/card.js";

const searchButton = document.getElementById('search-button');

const search = () => {
    const cityName = document.getElementById('city-name-input').value;
    card(cityName);
}

searchButton.addEventListener("click",search);
