module.exports = (sequelize, DataTypes) => {

    let alias = "PartialMatch";

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
        tableName: 'partialmatch',
        timestamps: true,
    };

    let PartialMatch = sequelize.define(alias, cols, config);

    return PartialMatch;
}