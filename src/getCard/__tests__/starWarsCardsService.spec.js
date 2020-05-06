import mockStarWarCard09074 from "../__mocks__/mockGetStarWarsCard-09074";
import mockStarWarCard01003 from "../__mocks__/mockGetStarWarsCard-01003";
import starWarsCardClient from "../starWarsCardClient";
import starWarCardService from "../starWarCardService";

const _09074 = '09074';
const _01003 = '01003';

describe("Star Wars card service", () => {
  it("should return the card with id = 09074", async () => {

    starWarsCardClient.getStarWarsCard = jest.fn(() => mockStarWarCard09074);
    const expectedCard =
    {
      id: "09074",
      name: "Naboo Palace Guard",
      image: "https://swdestinydb.com/bundles/cards/en/09/09074.jpg",
      rarity: 'Rare',
      card: 74,
      type: 'Character',
      affiliation: 'Hero',
      color: 'Red',
      points: '8',
      uniqueness: 'Non/Unique',
      text: "While you have a leader in play, this character gains Guardian.",
      subtitle: null,
    };

    const card = await starWarCardService.getStarWarsCard(_09074);

    expect(starWarsCardClient.getStarWarsCard).toHaveBeenCalled();
    expect(starWarsCardClient.getStarWarsCard).toHaveBeenCalledWith(_09074);
    expect(card).toEqual(expectedCard);
  });

  it("should return the card with id = 01003", async () => {

    starWarsCardClient.getStarWarsCard = jest.fn(() => mockStarWarCard01003);
    const expectedCard =
    {
      id: "01003",
      name: "General Grievous",
      image: "https://swdestinydb.com/bundles/cards/en/01/01003.jpg",
      rarity: 'Rare',
      card: 3,
      type: 'Character',
      affiliation: 'Villain',
      color: 'Red',
      points: '13/18',
      uniqueness: 'Unique',
      text: "Before an opponent's character is defeated, you may move one of their non-ability upgrades to this character.",
      subtitle: "Jedi Hunter",
    };

    const card = await starWarCardService.getStarWarsCard(_01003);

    expect(starWarsCardClient.getStarWarsCard).toHaveBeenCalled();
    expect(starWarsCardClient.getStarWarsCard).toHaveBeenCalledWith(_01003);
    expect(card).toEqual(expectedCard);
  });
});
