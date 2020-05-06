import  starWarsCardClient from "./starWarsCardClient";
import { UNIQUE, NON_UNIQUE} from '../util/constant'
import {capitalize, htmlTextToFlatText} from '../util/stringUtil'

const getStarWarsCard = async (cardId) => {
  const card = await starWarsCardClient.getStarWarsCard(cardId);
  return toOwnCard(card);
};

const toOwnCard = (card) => {
    const uniqueness = card.is_unique ? UNIQUE : NON_UNIQUE
    const color =  capitalize(card.faction_code);
    const text = htmlTextToFlatText(card.text);
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