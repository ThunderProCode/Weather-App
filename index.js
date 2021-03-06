import card  from "./card.js";

const searchButton = document.getElementById('search-button');
const inputField = document.getElementById('city-name-input');

const search = async () => {
    const cityName = document.getElementById('city-name-input').value;
    const newCard = await card(cityName);
}

searchButton.addEventListener("click",search);

inputField.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search();
    }
  });
  
