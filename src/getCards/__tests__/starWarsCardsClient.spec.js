jest.mock('node-fetch');
import fetch from 'node-fetch';
import {getAllStarWarsCards} from "../starWarsCardsClient";

describe("starWars client", () => {
  it("should get all cards", async () => {
    
    getAllStarWarsCards();
    
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      "https://swdestinydb.com/api/public/cards",
      {
        method: "GET",
      }
    );
  });
});
