module.exports = app => {

    const general = require('../controllers/cars/generalController');

    const router = require("express").Router();

    router.post("/", general.create);

    router.get("/", general.findGeneral);

    router.put("/:id", general.update);

    router.delete("/:id", general.delete);

    app.use('/api/general', router);

};