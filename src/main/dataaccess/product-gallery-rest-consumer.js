import request from "request";
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });

module.exports = function () {

    return {
      
        consumeStarWarsGalleryAPI(done) {
          request.get(`${process.env.STAR_WARS_REST_API_URL}cards/`,(error, response, body) => {
              const cardsResult = JSON.parse(body);
              done(error, cardsResult);
            });
        },
    };
};
