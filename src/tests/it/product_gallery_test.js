import app from '../../main/index'
import supertest from 'supertest'
import { insertCards, clearCardsColletion } from "./database-scripts/cards-collention";
const should = require("chai").should()

const request = supertest(app)

describe('Product gallery', () => { 

    beforeEach((done) => {
        insertCards(done); 
    });

    it('should return all of products', (done) => {
        
        // eslint-disable-next-line max-len
        const productsExpected = '[{"_id":1,"name":"Card 1","__v":0},{"_id":2,"name":"Card 2","__v":0},{"_id":3,"name":"Card 3","__v":0},{"_id":4,"name":"Card 4","__v":0},{"_id":5,"name":"Card 5","__v":0}]'

        request
            .get('/show-gallery')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(productsExpected, done)
    })

    it('should return Card 1 given Card 1', (done) => {
        
        const productExpected = '{"_id":1,"name":"Card 1","__v":0}'

        request
            .get('/show-product/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(productExpected, done)
    })

    afterEach((done) => {
        clearCardsColletion(done);
    });
})