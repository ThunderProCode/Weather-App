import card  from "./card.js";

const searchButton = document.getElementById('search-button');

const search = async () => {
    const cityName = document.getElementById('city-name-input').value;
    const newCard = await card(cityName);
}

searchButton.addEventListener("click",search);