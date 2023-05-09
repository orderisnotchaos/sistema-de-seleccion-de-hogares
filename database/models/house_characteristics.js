module.exports = (sequelize, DataTypes) => {

    let alias = 'house_characteristics';
    let cols = {
        houseId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        characteristic:{
            type:DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        }
    }
    let config = {
        tableName: 'house_characteristics',
        timestamps: true,
    };

    let house_characteristics = sequelize.define(alias, cols, config);

    return house_characteristics;
    };