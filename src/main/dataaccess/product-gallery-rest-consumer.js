import request from "request";

module.exports = function () {
  return {
    consumeStarWarGalleryAPI(done) {
      request.get("https://swdestinydb.com/api/public/cards/",(error, response, body) => {
          if (error) {
            return console.dir(error);
          }
          const cardsResult = JSON.parse(body);
          done(error, cardsResult);
        });
    }
  };
};
