module.exports = app => {

    const general = require('../controllers/cars/generalController');

    const router = require("express").Router();

    router.get('/review', general.findCarReview);

    router.get('/review/:id', general.findById);

    app.use('/api/general', router);

};