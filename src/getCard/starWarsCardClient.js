import fetch from "node-fetch";
import { GET } from '../util/constant';
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

const getStarWarsCard = async (cardId) => {
  const url = `${process.env.STAR_WARS_REST_API_URL}card/${cardId}`;
  console.log(url)
  const response = await fetch(url, {
    method: GET,
  });
  const cardsResponse = await response.json();
  console.log("get data for a card succesfully");
  return cardsResponse;
};

module.exports.getStarWarsCard = getStarWarsCard
