import starWarCardService from "./starWarCardService";

const getCards = async (request, response) => {
  const card = await starWarCardService.getStarWarsCard(request.query.cardId);
  response.json(card);
  response.end();
};

module.exports = getCards