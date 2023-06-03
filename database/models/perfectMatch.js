
module.exports = (sequelize, DataTypes) => {

    let alias = "PerfectMatch";

    let cols = {
        propertyId:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        clientId:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        }
    };

    let config = {
        tableName: 'perfectmatch',
        timestamps: true,
    };

    let PerfectMatch = sequelize.define(alias, cols, config);

    return PerfectMatch;
}