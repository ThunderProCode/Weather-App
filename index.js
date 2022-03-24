import card  from "./src/components/card";

const searchButton = document.getElementById('search-button');

const search = () => {
    const cityName = document.getElementById('city-name-input').value;
    card(cityName);
}

searchButton.addEventListener("click",search);
