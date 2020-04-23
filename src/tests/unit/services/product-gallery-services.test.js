import productGalleryService from '../../../main/services/product-gallery-service'
import {expect} from 'chai'

const restConsumerMock = {

    consumeStarWarsGalleryAPI(done) {
        const result = [
            {code: 1,name: 'Name 1',imagesrc: 'Image 1',other: 'other 1'},
            {code: 2,name: 'Name 2',imagesrc: 'Image 2',other: 'other 2'},
            {code: 3,name: 'Name 3',imagesrc: 'Image 3',other: 'other 2'}
        ]
        done(null, result)
    }
}

describe('Tests product gallery service', () => { 

    it('should return a list of 2 cards with the fields {id:"", name:"", image:""}', (done) => {

        productGalleryService(restConsumerMock).showGallery( 1, 2, (err, cards) => { 
            expect(cards.currentPage).to.be.eql(1)
            expect(cards.perPage).to.be.eql(2)
            expect(cards.data).to.be.eql([{id: 1,name: 'Name 1',image: 'Image 1'}, {id: 2,name: 'Name 2',image: 'Image 2'}])
            done()
        })
    })
})