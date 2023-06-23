module.exports = (sequelize, DataTypes) => {

    let alias = 'Property';
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
        valueRent:{
            type:DataTypes.FLOAT,
            allowNull: false
        },
        valueSell:{
            type:DataTypes.FLOAT,
            allowNull: false
        },
        type:{
            type:DataTypes.STRING,
            allowNull:false
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
        tableName: 'property',
        timestamps: true,
    };

    let Property = sequelize.define(alias, cols, config);

    Property.associate = (models) =>{

        Property.hasMany(models.Characteristic, {
            as: 'characteristics',
            foreignKey: 'propertyId',
        });

    };

    return Property;
    };