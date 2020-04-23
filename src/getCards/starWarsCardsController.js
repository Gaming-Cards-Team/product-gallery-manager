import starWarCardsService from "./starWarCardsService";

const getCards = async (request, response) => {
  const cards = await starWarCardsService.getStarWarsCards();
  response.json(cards);
  response.end();
};

module.exports = getCards