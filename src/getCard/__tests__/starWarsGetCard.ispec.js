import supertest from 'supertest';
import getCard from '../starWarsCardsController';
import express from 'express';
import apiMockServer from '../../util/apiMocks/apiMockServer';
import { GET_CARD_URL, GET_CARD_01002_URL, ACCEPT, APPLICATION_JSON } from '../../util/constant';



describe("Star Wars Card", () => {

  const app = express();
  beforeEach( async () => {
    apiMockServer.run();
    app.get(GET_CARD_URL, getCard)
  });

  it("should get a card with id = 01002", async () => {

    const request = supertest(app);
    const expectedStarWarsCard =
    {
      id: "01002",
      name: "First Order Stormtrooper",
      image: "https://swdestinydb.com/bundles/cards/en/01/01002.jpg",
      affiliation: "Villain",
      card: 2,
      color: "Red",
      points: "7",
      rarity: "Rare",
      type: "Character",
      uniqueness: "Non/Unique",
      text: "",
      subtitle: null,
    };

    const response = await request.get(GET_CARD_01002_URL).set(ACCEPT, APPLICATION_JSON);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedStarWarsCard);
  });
});
