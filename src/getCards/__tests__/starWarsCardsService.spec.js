import mockStarWarCards from "../__mocks__/mockStarWarsCards";
import starWarCardsClient from "../starwarsCardsClient";
starWarCardsClient.getAllStarWarsCards = jest.fn(() => mockStarWarCards);
import getStarWarsCards from "../starWarCardsService";

describe("Star Wars cards gallery service", () => {
  it("should return cards for gallery", async () => {
    const expectedCards = [
      {
        name: "Naboo Palace Guard",
        image: "https://swdestinydb.com/bundles/cards/en/09/09074.jpg",
      },
    ];

    const cards = await getStarWarsCards();

    expect(starWarCardsClient.getAllStarWarsCards).toHaveBeenCalled();
    expect(starWarCardsClient.getAllStarWarsCards).toHaveBeenCalledWith();
    expect(cards).toEqual(expectedCards);
  });
});
