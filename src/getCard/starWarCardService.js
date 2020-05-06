import  starWarsCardClient from "./starWarsCardClient";
import htmlToText from 'html-to-text'

const getStarWarsCard = async (cardId) => {
  const card = await starWarsCardClient.getStarWarsCard(cardId);
  return toOwnCard(card);
};

const toOwnCard = (card) => {
    const uniqueness = card.is_unique ? 'Unique' : 'Non/Unique'
    const color =  `${card.faction_code.charAt(0).toUpperCase()}${card.faction_code.slice(1)}`;
    const text = htmlToText.fromString(card.text, {wordwrap: 130});
    return {
      id: card.code, 
      name: card.name, 
      image: card.imagesrc,
      affiliation: card.affiliation_name,
      card: card.position,
      color: color,
      points: card.points,
      rarity: card.rarity_name,
      type: card.type_name,
      uniqueness: uniqueness,
      text: text,
      subtitle: card.subtitle,
    }
};

module.exports.getStarWarsCard = getStarWarsCard