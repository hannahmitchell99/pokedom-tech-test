import pokemonArray from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");
const input = document.querySelector("#search");

const makePokemonCard = (characterObject) => {
  let firstLetterCapitals =
    characterObject.name.charAt(0).toUpperCase() +
    characterObject.name.slice(1);
  const cardHTML = `
    <div class = "card">
       <img class = "card__image" src=${characterObject.sprite} alt="image of ${
    characterObject.name
  }">
       <div class = "card__content">
         <h2 class = "card__heading">${firstLetterCapitals}</h2>
         <p class = "card__text">${firstLetterCapitals} (#${
    characterObject.id
  }) is a
         ${characterObject.types.join(" & ")} type pokemon.</p>
       </div>
     </div>
 `;
  return cardHTML;
};

const populateCards = (characterCards) => {
  cardContainer.innerHTML = characterCards
    .map((character) => {
      return makePokemonCard(character);
    })
    .join("");
};

const handleSearch = (event) => {
  const searchValue = event.target.value.toLowerCase();
  const filteredSearch = pokemonArray.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchValue) || pokemon.types.toString().toLowerCase().includes(searchValue)
  });
  populateCards(filteredSearch);
};


input.addEventListener("input", handleSearch);
