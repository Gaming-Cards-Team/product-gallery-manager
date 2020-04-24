import starWarCardsService from "./starWarCardsService";

const getCards = async (request, response) => {
  const cards = await starWarCardsService.getStarWarsCards(request.query.page, request.query.limit);
  response.json(cards);
  response.end();
};

module.exports = getCards