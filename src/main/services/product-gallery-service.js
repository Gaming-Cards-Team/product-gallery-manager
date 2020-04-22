import pagination from 'paginate-array'
import request from 'request'

module.exports = function () {

    function toCard(item){
        const itemResult = { id: item.code, name: item.name, image: item.imagesrc } 
        return itemResult;
    }

    return {
        
        showGallery(page,limit,done) {
            
            let cardsResult = []
            request.get("https://swdestinydb.com/api/public/cards/", (error, response, body) => {
                if(error) {
                    return console.dir(error);
                }
                cardsResult = JSON.parse(body).map(toCard);
                const arrayPaginated = pagination(cardsResult,page,limit);
                done(error, arrayPaginated);
                console.dir(arrayPaginated);
            });
         },

        showProduct(id, done) {
        
        }
    }
}