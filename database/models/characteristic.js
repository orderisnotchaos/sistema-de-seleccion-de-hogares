module.exports = (sequelize, DataTypes) => {

    let alias = 'Characteristic';
    let cols = {
        
        propertyId:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },

        propertyType:{
            type:DataTypes.STRING,
            primaryKey: true,
        },

        roomsQuantity:{
            type:DataTypes.INTEGER,
            allowNull: true
        },

        bathroomsQuantity:{
            type:DataTypes.INTEGER,
            allowNull: true
        },

        cocherasQuantity:{
            type:DataTypes.INTEGER,
            allowNull: true
        },

        floorsQuantity:{
            type:DataTypes.INTEGER,
            allowNull: true
        },

        sqmc:{
            type:DataTypes.DOUBLE,
            allowNull: true
        },

        sqmt:{
            type:DataTypes.DOUBLE,
            allowNull: true
        },

        antiquity:{
            type:DataTypes.INTEGER,
            allowNull: true
        },

        description:{
            type:DataTypes.STRING,
            allowNull: true
        },

        address:{
            type:DataTypes.STRING,
            allowNull: true
        },

        city:{
            type:DataTypes.STRING,
            allowNull: true
        },

        neighborhood:{
            type:DataTypes.STRING,
            allowNull: true
        },

        province:{
            type:DataTypes.STRING,
            allowNull: true
        },

        currency:{
            type:DataTypes.STRING,
            allowNull: true
        },

        operationType:{
            type:DataTypes.STRING,
            allowNull: true
        },
    }
    let config = {
        tableName: 'characteristics',
        timestamps: true,
    };

    let Characteristics = sequelize.define(alias, cols, config);

    Characteristics.associate = (models) =>{

        Characteristics.belongsTo(models.Property, {
            as: 'property',
            foreignKey: 'propertyId',
        });
    }
    return Characteristics;
    };