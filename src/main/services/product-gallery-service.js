import pagination from "paginate-array";

module.exports = function (productGalleryRestConsumer) {
  
  function toCard(item) {
    const itemResult = { id: item.code, name: item.name, image: item.imagesrc };
    return itemResult;
  }

  return {
    
        showGallery(page, limit, done) {
 
            productGalleryRestConsumer.consumeStarWarsGalleryAPI((error, cardsResult) => {
                cardsResult = cardsResult.map(toCard);
                const cardsResultPaginated = pagination(cardsResult, page, limit);
                done(error, cardsResultPaginated);
            });
        },

        showProduct(id, done) {},
  };
};
