import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

const getAllStarWarsCards = async () => {
  const url = `${process.env.STAR_WARS_REST_API_URL}cards`;
  console.log(url)
  const response = await fetch(url, {
    method: "GET",
  });
  const cardsResponse = await response.json();
  console.log("get data for all cards succesfully");
  return cardsResponse;
};

module.exports.getAllStarWarsCards = getAllStarWarsCards