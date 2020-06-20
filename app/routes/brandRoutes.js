module.exports = app => {

    const brand = require('../controllers/cars/brandController');

    const router = require("express").Router();

    router.post("/", brand.create);

    router.get("/cars", brand.findAll);

    router.get("/" ,brand.findBrans);

    router.delete("/:id" ,brand.delete);

    router.get("/cars/:createdAt", brand.findAllByDate);

    app.use('/api/brand', router);

};