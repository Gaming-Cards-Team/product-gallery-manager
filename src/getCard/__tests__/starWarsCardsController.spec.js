const mockStarWarCard = [{ id: "001", name: "darth vader", image: "url-image" }];
import MockExpressResponse from 'mock-express-response'
import MockExpressRequest  from 'mock-express-request'
import starWarCardService from "../starWarCardService";
starWarCardService.getStarWarsCard = jest.fn(() => mockStarWarCard);
import getCards from "../starWarsCardsController";

describe("star Wars card controller", () => {
  it("should get a card from the gallery", async () => {
    
    const response = new MockExpressResponse()
    const request = new MockExpressRequest()

    await getCards(request, response);

    expect(starWarCardService.getStarWarsCard).toHaveBeenCalledTimes(1);
  });
});

