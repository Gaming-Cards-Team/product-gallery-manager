
import request from "request";

module.exports = function () {
  return {
    showGallery(page, limit, done) {
      let cardsResult = [];
      request.get(
        "https://swdestinydb.com/api/public/cards/",
        (error, response, body) => {
          if (error) {
            return console.dir(error);
          }
          cardsResult = JSON.parse(body);
          done(cardsResult);
        }
      );
    }
  };
};
