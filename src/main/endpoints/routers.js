import express from 'express'
const productGalleryService = require('../services/product-gallery-service')()
const productGalleryController = require('./product-gallery-controller')(productGalleryService)
import getCards from '../../getCards/starWarsCardsController'
const productGalleryRestConsumer = require('../dataaccess/product-gallery-rest-consumer')()

const router = express.Router();

router.get("/show-gallery", productGalleryController.showGallery);
router.get("/show-product/:id", productGalleryController.showProduct);
router.get("/api/v1/cards/", getCards);

export default router