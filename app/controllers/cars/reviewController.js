const db = require('../../models');

const Review = db.review;
const Op = db.sequelize.Op;

exports.create =  async (req, res) => {

    const review = new Review({
        name : req.body.name,
        review : req.body.review,
        generalId : req.body.generalId
    });
    try {
        const saveReview = await review.save();
        res.send(saveReview);
    } catch (err) {
        res.status(400)
            .send(err);
    }
};

exports.findReview = async (req,res) => {
    const name = req.query.name;
    let condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Review.findAll({ where: condition })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving brand."
            });
        });
};

exports.update = async (req, res) =>{

    const id = req.params.id;

    Review.update(req.body, {
        where : {id:id}
    })
        .then(num => {
            if (num == 1 ){
                res.send({
                    message : "Review was updated"
                });
            } else {
                res.send({
                    message : `Cannot update Review with id=${id}. Review was not found!`
                })
            }
        }).catch(err => {
            res.status(500)
                .send(err)
    })

};

exports.delete = (req, res) => {
    const id = req.params.id;

    Review.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Review was deleted!"
                });
            } else {
                res.send({
                    message: `Cannot delete Review with id=${id}. Review was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500)
                .send(err);
        });
};