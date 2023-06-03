
module.exports = (sequelize, DataTypes) => {

    let alias = 'Demand';

    let cols = {
        clientId:{
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        propertyType:{
            type: DataTypes.STRING,
            allowNull: false
        },
        roomsQuantity:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        bathroomsQuantity:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cocherasQuantity:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        floorsQuantity:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        sqmc:{
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        sqmt:{
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        antiquity:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        state:{
            type: DataTypes.STRING,
            allowNull: true
        },

    };

    let config = {
        tableName: 'demand',
        timestamps: true,
    };

    let Demand = sequelize.define(alias, cols, config);

    Demand.associate = (models) =>{

        Demand.belongsTo(models.Client, {

            as: 'client',
            foreignKey: 'clientId'
            
        });

    }

    return Demand;
};