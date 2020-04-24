const mockStarWarCards = [{ id: "001", name: "darth vader", image: "url-image" }];
import MockExpressResponse from 'mock-express-response'
import MockExpressRequest  from 'mock-express-request'
import starWarCardsService from "../starWarCardsService";
starWarCardsService.getStarWarsCards = jest.fn(() => mockStarWarCards);
import getCards from "../starWarsCardsController";

describe("star Wars cards controller", () => {
  it("should get all cards", async () => {
    
    const response = new MockExpressResponse()
    const request = new MockExpressRequest()

    await getCards(request, response);

    expect(starWarCardsService.getStarWarsCards).toHaveBeenCalledTimes(1);
  });
});

