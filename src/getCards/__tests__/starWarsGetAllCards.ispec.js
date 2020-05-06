import supertest from 'supertest';
import getCards from '../starWarsCardsController';
import express from 'express';
import apiMockServer from '../../util/apiMocks/apiMockServer'

describe("Star Wars Cards", () => {
  
  const app = express();
  beforeEach(async () => {
    apiMockServer.run()
    app.get('/api/v1/cards', getCards)
  });

  it("should get all cards", async () => {
    
    const request = supertest(app);
    const expectedStarWarsCard = [
      {
        "id": "01002",
        "name": "Trooper",
        "image": "https://swdestinydb.com/bundles/cards/en/01/01002.jpg"
      },
    ];

    const response = await request.get('/api/v1/cards?page=2&limit=1').set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body.data).toEqual(expectedStarWarsCard);
  });
});
