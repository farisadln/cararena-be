module.exports = (sequelize, Sequelize) =>{
    const General = sequelize.define("general",{
        id:{
            primaryKey:true,
            allowNull:false,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        type:{
            type: Sequelize.STRING
        },
        hargaOtr: {
            type: Sequelize.STRING
        },
        createdAt : {
            type: Sequelize.DATEONLY
        }

    },{updatedAt: false,
        timestamps: true, tableName:"general"});

    return General;
};