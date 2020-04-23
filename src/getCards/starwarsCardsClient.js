import fetch from "node-fetch";

const getAllStarWarsCards = async () => {
  const url = "https://swdestinydb.com/api/public/cards";
  const response = await fetch(url, {
    method: "GET",
  });
  const cardsResponse = await response.json();
  console.log("get data for all cards succesfully");
  return cardsResponse;
};

module.exports = getAllStarWarsCards;
