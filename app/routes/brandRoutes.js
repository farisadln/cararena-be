module.exports = app => {

    const brand = require('../controllers/cars/brandController');

    const router = require("express").Router();

    router.get("/cars", brand.findAll);

    router.get("/cars/:createdAt", brand.findAllByDate);

    app.use('/api/brand', router);

};