module.exports = app => {

    const carImg = require('../controllers/cars/imgCarController');

    const router = require("express").Router();

    router.post('/', carImg.create);

    router.get('/', carImg.findImg);

    router.put('/:id', carImg.update);

    router.delete('/:id', carImg.delete);


    app.use('/api/img', router);

};