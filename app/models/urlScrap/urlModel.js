module.exports = (sequelize, Sequelize) =>{
    const UrlScrap = sequelize.define("urlScrap", {
        id:{
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            type: Sequelize.INTEGER
        },
        urlGeneral:{
            allowNull:false,
            type: Sequelize.STRING
        },
        urlSpecification: {
            allowNull: false,
            type: Sequelize.STRING
        },
        urlImg: {
            allowNull: false,
            type: Sequelize.STRING
        },
        urlReview: {
            allowNull: false,
            type: Sequelize.STRING
        },
        urlBackground: {
            allowNull: false,
            type: Sequelize.STRING
        },
        createdAt : {
            type: Sequelize.DATEONLY,
        }

    },{updatedAt: false,
        timestamps: true, tableName:"urlScrap"});

    return UrlScrap;
};