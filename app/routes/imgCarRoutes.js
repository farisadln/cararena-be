module.exports = app => {

    const carImg = require('../controllers/cars/imgCarController');

    const router = require("express").Router();

    router.post('/', carImg.create);

    router.get('/', carImg.findImg);

    router.put('/:id', carImg.update);

    router.delete('/:id', carImg.delete);

    router.get('/:id', carImg.findOne)

    app.use('/api/img', router);

};