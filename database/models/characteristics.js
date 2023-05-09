module.exports = (sequelize, DataTypes) => {

    let alias = 'Characteristics';
    let cols = {
        characteristic:{
            type:DataTypes.STRING,
            primaryKey: true,
            allowNull: false

        }
    }
    let config = {
        tableName: 'characteristics',
        timestamps: true,
    };

    let Characteristics = sequelize.define(alias, cols, config);

    Characteristics.associate = (models) =>{
        Characteristics.belongsToMany(models.House, {
            as: 'houses',
            through: 'house_characteristics',
            foreignKey: 'houseId',
            otherKey: 'characteristic',
            timestamps: false
        })
    }
    return Characteristics;
    };