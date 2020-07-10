module.exports = (sequelize, Sequelize) =>{
    const General = sequelize.define("general",{
        id:{
            primaryKey:true,
            allowNull:false,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        type:{
            type: Sequelize.STRING(100)
        },
        hargaOtr: {
            type: Sequelize.STRING(100)
        },
        logActivity: {
            defaultValue:"-",
            allowNull: true,
            type: Sequelize.STRING(64)
        },
        createdAt : {
            type: Sequelize.DATEONLY
        }

    },{updatedAt: false,
        timestamps: true, tableName:"general"});

    return General;
};