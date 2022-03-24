import card  from "./card.js";

const searchButton = document.getElementById('search-button');

const search = () => {
    const cityName = document.getElementById('city-name-input').value;
    const newCard = card(cityName);
}

searchButton.addEventListener("click",search);