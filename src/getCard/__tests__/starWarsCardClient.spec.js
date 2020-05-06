jest.mock('node-fetch');
import fetch from 'node-fetch';
import {getStarWarsCard} from "../starWarsCardClient";
import { GET } from '../../util/constant';

describe("starWars client", () => {
  it("should get a card with id = 01001", async () => {
    
    getStarWarsCard('01001');
    
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://swdestinydb.com/api/public/card/01001",
      {
        method: GET,
      }
    );
  });
});
