import http from "http";
import mockserver from "mockserver";
import app from '../../index';
import supertest from 'supertest';

const request =  supertest(app);

describe("star Wars Cards", () => {

   // http.createServer(mockserver('src/GetCards/__mocks__')).listen(9001);


  beforeAll(async () => {
  });

  it("should get all cards", async (done) => {
   
    const expectedStarWarsCard = [
      {
        "code": "01002",
        "name":   "Trooper",
        "image": "https://swdestinydb.com/bundles/cards/en/01/01002.jpg"
      },
    ];


    const response = await request
         .get('/api/v1/cards')
        // .set('Accept', 'application/json');

        expect(response.status).toBe(200);
         done();
             
         //.expect('Content-Type', 'charset=utf-8')
         //.expect(200)
        // .expect(expectedStarWarsCard)
        
         
  });
});
