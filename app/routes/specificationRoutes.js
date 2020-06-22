module.exports = app => {

    const spec = require('../controllers/cars/specificationController');

    const router = require("express").Router();

    router.post('/', spec.create);

    router.get('/', spec.findAll);

    router.put('/:id', spec.update);

    router.delete('/:id', spec.delete);

    router.get('/:id', spec.findOne)

    app.use('/api/specification', router);

};