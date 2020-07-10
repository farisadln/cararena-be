module.exports = (sequelize, Sequelize) =>{
    const Background = sequelize.define("background",{
        id : {
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
            type: Sequelize.INTEGER
        },
        url_img1 : {
            defaultValue: "-",
            type: Sequelize.STRING
        },
        url_img2 : {
            defaultValue: "-",
            type: Sequelize.STRING
        },
        url_img3 : {
            defaultValue: "-",
            type: Sequelize.STRING
        },
        logActivity: {
            defaultValue:"-",
            allowNull: true,
            type: Sequelize.STRING(64)
        },
        createdAt : {
            type: Sequelize.DATEONLY,
        }

    },{updatedAt: false,
        timestamps: true, tableName:"background"});

    return Background;
};