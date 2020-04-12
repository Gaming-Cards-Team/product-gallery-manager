import { Card } from "../dataaccess/entities/card";

module.exports = function () {

    return {
        
        showGallery(done) {
        
            const cardsResult = []
            Card.find({},  done)
        },

        showProduct(id, done) {
        
            return Card.findById(id, done)
        }
    }
}