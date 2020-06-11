module.exports = app => {

    const review = require('../controllers/cars/reviewController');
    const general = require('../controllers/cars/generalController');

    const router = require("express").Router();

    router.post('/', review.create);

    router.put('/:id', review.update);

    router.get('/', review.findReview);

    router.get('/cars/:id', general.findById);

    router.delete('/:id', review.delete);

    app.use('/api/review', router);

};