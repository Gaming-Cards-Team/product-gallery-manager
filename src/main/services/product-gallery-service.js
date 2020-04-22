import pagination from "paginate-array";

module.exports = function (productGalleryRestConsumer) {
  function toCard(item) {
    const itemResult = { id: item.code, name: item.name, image: item.imagesrc };
    return itemResult;
  }

  return {
    showGallery(page, limit, done) {
      productGalleryRestConsumer.consumeStarWarGalleryAPI((error, result) => {
        const cardsResult = result.map(toCard);
        const arrayPaginated = pagination(cardsResult, page, limit);
        done(error, arrayPaginated);
      });
    },

    showProduct(id, done) {},
  };
};
