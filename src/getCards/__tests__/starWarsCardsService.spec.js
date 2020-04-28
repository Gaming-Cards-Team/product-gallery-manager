import mockStarWarCards from "../__mocks__/mockGetStarWarsCards";
import starWarCardsClient from "../starWarsCardsClient";
starWarCardsClient.getAllStarWarsCards = jest.fn(() => mockStarWarCards);
import starWarCardsService from "../starWarCardsService";

describe("Star Wars cards gallery service", () => {
  it("should return cards for gallery", async () => {
    
    const expectedCards = [
      {
        id: "09074",
        name: "Naboo Palace Guard",
        image: "https://swdestinydb.com/bundles/cards/en/09/09074.jpg",
      },
      {
        id: "01002",
        name: "First Order Stormtrooper",
        image: "https://swdestinydb.com/bundles/cards/en/01/01002.jpg",
      }
    ];

    const cards = await starWarCardsService.getStarWarsCards( 1, 2);

    expect(starWarCardsClient.getAllStarWarsCards).toHaveBeenCalled();
    expect(starWarCardsClient.getAllStarWarsCards).toHaveBeenCalledWith();
    expect(cards.data).toEqual(expectedCards);
    expect(cards.currentPage).toEqual(1);
    expect(cards.perPage).toEqual(2);
  });
});
