import http from "http";
import mockserver from "mockserver";
import supertest from 'supertest';
import getCard from '../starWarsCardsController';
import express from 'express';

describe("Star Wars Card", () => {

  let server;
  const app = express();
  beforeEach(() => {
    server = http.createServer(mockserver('src/util/apiMocks/'));
    server.on('error', (e) => console.log(e));
    server.listen(8081);
    app.get('/api/v1/card', getCard)
  });

  it("should get a card with id = 01002", async () => {

    const request = supertest(app);
    const expectedStarWarsCard =
    {
      "id": "01002",
      "name": "Trooper",
      "image": "https://swdestinydb.com/bundles/cards/en/01/01002.jpg"
    };

    const response = await request.get('/api/v1/card?cardId=01002').set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expectedStarWarsCard);
  });

  afterEach(() => {
    server.close(() => console.log('Mock server closed'));
  });
});
