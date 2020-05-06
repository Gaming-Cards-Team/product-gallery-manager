import mockStarWarCard from "../__mocks__/mockGetStarWarsCard";
import starWarsCardClient from "../starWarsCardClient";
starWarsCardClient.getStarWarsCard = jest.fn(() => mockStarWarCard);
import starWarCardService from "../starWarCardService";

describe("Star Wars card service", () => {
  it("should return a card from the gallery", async () => {

    const expectedCard =
    {
      id: "09074",
      name: "Naboo Palace Guard",
      image: "https://swdestinydb.com/bundles/cards/en/09/09074.jpg",
    };

    const card = await starWarCardService.getStarWarsCard('09074');

    expect(starWarsCardClient.getStarWarsCard).toHaveBeenCalled();
    expect(starWarsCardClient.getStarWarsCard).toHaveBeenCalledWith('09074');
    expect(card).toEqual(expectedCard);
  });
});
