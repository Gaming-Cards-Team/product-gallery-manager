import request from "request";

module.exports = function () {

    return {
      
        consumeStarWarsGalleryAPI(done) {
          request.get("https://swdestinydb.com/api/public/cards/",(error, response, body) => {
              const cardsResult = JSON.parse(body);
              done(error, cardsResult);
            });
        },
    };
};
