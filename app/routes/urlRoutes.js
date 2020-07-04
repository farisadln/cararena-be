module.exports = app => {

    const url = require('../controllers/urlScrap/urlController');

    const router = require("express").Router();

    router.post('/', url.create);

    router.get('/', url.findAll);

    router.get('/:id', url.findOne)

    router.put('/:id', url.update);

    router.delete('/:id', url.delete);

 
    app.use('/api/url', router);

};