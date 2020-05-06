import  starWarsCardClient from "./starWarsCardClient";

const getStarWarsCard = async (cardId) => {
  const card = await starWarsCardClient.getStarWarsCard(cardId);
  const cardResult = { id: card.code, name: card.name, image: card.imagesrc };
  return cardResult;
};

module.exports.getStarWarsCard = getStarWarsCard