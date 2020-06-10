module.exports = (sequelize, Sequelize) => {
    const Review = sequelize.define("review", {
            name : {
                type: Sequelize.STRING
            },
            review : {
                type: Sequelize.STRING
            },
            createdAt : {
                type: Sequelize.DATEONLY
            }
        },
        {updatedAt: false,
            timestamps: true, tableName:"review"}
    );

    return Review;
};
