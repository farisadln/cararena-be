module.exports = app => {
    const backgrounds = require("../controllers/cars/backgroundController");

    let router = require("express")
        .Router();


    router.post("/", backgrounds.create);

    router.get("/", backgrounds.findAll);

    router.put("/:id", backgrounds.update);

    router.delete("/:id", backgrounds.delete);

    router.get("/:id", backgrounds.findOne)

    app.use('/api/backgrounds', router);
};