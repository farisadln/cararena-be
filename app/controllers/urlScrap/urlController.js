const db = require("../../models");
const UrlScrap = db.url;
const Op = db.sequelize.Op;

exports.create = async (req,res)=>{

    const urlScrap = new UrlScrap ({
        urlGeneral: req.body.urlGeneral,
        urlSpecification: req.body.urlSpecification,
        urlImg: req.body.urlImg,
        urlReview: req.body.urlReview,
        urlBackground: req.body.urlBackground,
        
    });
    try {
        const saveUrlScrap = await urlScrap.save();
        res.send(saveUrlScrap);
    } catch (err) {
        res.status(400)
            .send(err);
    }
};

exports.findAll = (req,res)=>{
    const urlGeneral = req.query.urlGeneral;
    let condition = urlGeneral ? { urlGeneral: { [Op.like]: `%${urlGeneral}%` } } : null;


    UrlScrap.findAll({ where: condition  })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Url."
            });
        });

};



exports.update = async (req, res) =>{

    const id = req.params.id;

    UrlScrap.update(req.body, {
        where : {id:id}
    })
        .then(num => {
            if (num == 1 ){
                res.send({
                    message : "Url was updated"
                });
            } else {
                res.send({
                    message : `Cannot update Background with id=${id}. Url was not found!`
                })
            }
        }).catch(err => {
        res.status(500)
            .send(err)
    })

};

exports.findOne = (req, res) => {
    const id = req.params.id;

    console.log(id)
    UrlScrap.findOne({ where:{id}})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving url."
            });
        });

};


exports.delete = (req, res) => {
    const id = req.params.id;

    UrlScrap.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "url was deleted!"
                });
            } else {
                res.send({
                    message: `Cannot delete url with id=${id}. url was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500)
                .send(err);
        });
};