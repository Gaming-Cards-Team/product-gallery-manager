import express from 'express'
import getCards from './getCards/starWarsCardsController'
import getCard from './getCard/starWarsCardsController'

const router = express.Router();
router.get("/cards", getCards);
router.get("/card", getCard);

export default router