module.exports = (sequelize, DataTypes) => {

    let alias = 'Houses';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        direction: {
            type:DataTypes.STRING,
            allowNull: false
        },
        squareMeters:{
            type:DataTypes.FLOAT,
            allowNull: false
        },
        ambients:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        valueRent:{
            type:DataTypes.FLOAT,
            allowNull: false
        },
        valueSell:{
            type:DataTypes.FLOAT,
            allowNull: false
        },
        lat:{
            type:DataTypes.FLOAT,
            allowNull: false
        },
        lng:{
            type:DataTypes.FLOAT,
            allowNull: false
        },
    }
    let config = {
        tableName: 'houses',
        timestamps: true,
    };

    let Houses = sequelize.define(alias, cols, config);

    Houses.associate = (models) =>{

        Houses.belongsToMany(models.Characteristic, {
            
            as: 'characteristics',
            through: 'house_characteristics',
            foreignKey: 'houseId',
            otherKey: 'characteristic',
            timestamps: false
        });

    };

    return Houses;
    };