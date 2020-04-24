import express from 'express'
import getCards from './getCards/starWarsCardsController'

const router = express.Router();
router.get("/cards", getCards);

export default router