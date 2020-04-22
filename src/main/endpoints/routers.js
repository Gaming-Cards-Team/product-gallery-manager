import express from 'express'
const productGalleryRestConsumer = require('../dataaccess/product-gallery-rest-consumer')
const productGalleryService = require('../services/product-gallery-service')(productGalleryRestConsumer)
const productGalleryController = require('./product-gallery-controller')(productGalleryService )

const router = express.Router();

router.get("/show-gallery", productGalleryController.showGallery);
router.get("/show-product/:id", productGalleryController.showProduct);

export default router