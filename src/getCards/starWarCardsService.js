import { getAllStarWarsCards } from "./starwarsCardsClient";

const getStarWarsCards = async () => {
  const cards = await getAllStarWarsCards();
  return cards.map((card) => ({ name: card.name, image: card.imagesrc }));
};

module.exports = getStarWarsCards;
