
module.exports = function (productGalleryService) {
    return {

        showGallery(req, res) {
            
            productGalleryService.showGallery(req.query.page, req.query.limit, (err, cards) => {
                res.json(cards)
            });
        }, 

        showProduct(req, res) {
            
            productGalleryService.showProduct(req.params.id, (err, card) => {
                res.json(card)
            });
        }
    }
}