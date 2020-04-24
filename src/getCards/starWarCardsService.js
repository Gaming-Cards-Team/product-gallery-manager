import  starwarsCardsClient from "./starwarsCardsClient";
import pagination from "paginate-array";

const getStarWarsCards = async (page, limit) => {
  const cards = await starwarsCardsClient.getAllStarWarsCards();
  const cardsResult = cards.map((card) => ({ id: card.code, name: card.name, image: card.imagesrc }));
  return pagination(cardsResult, page, limit);
};

module.exports.getStarWarsCards = getStarWarsCards